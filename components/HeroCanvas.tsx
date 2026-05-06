"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const VERTEX = `
varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform float uScroll;

void main() {
  vUv = uv;
  vec3 pos = position;

  // Subtle wave displacement on Z driven by mouse + time
  float dist = distance(uv, uMouse);
  float wave = sin(dist * 12.0 - uTime * 1.4) * 0.04 * uMouseStrength;
  pos.z += wave;

  // Scroll-driven curl
  pos.z += sin(uv.y * 4.0 + uTime * 0.4) * uScroll * 0.06;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const FRAGMENT = `
uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform float uScroll;
uniform vec2 uResolution;
varying vec2 vUv;

// Cinema B&W with red shadow tint
vec3 toCinema(vec3 c) {
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  vec3 bw = vec3(l);
  // contrast boost
  bw = (bw - 0.5) * 1.18 + 0.46;
  // red shadow tint
  vec3 tinted = mix(bw, bw * vec3(1.05, 0.92, 0.88), 0.35);
  // sepia warm
  tinted = mix(tinted, tinted * vec3(1.08, 0.98, 0.86), 0.18);
  return tinted;
}

void main() {
  vec2 uv = vUv;

  // Fluid distortion towards cursor
  vec2 toMouse = uv - uMouse;
  float distToMouse = length(toMouse);
  float ripple = sin(distToMouse * 28.0 - uTime * 1.6) * exp(-distToMouse * 4.5) * 0.012 * uMouseStrength;
  vec2 distorted = uv + normalize(toMouse) * ripple;

  // Liquid breathing wobble
  distorted.x += sin(uv.y * 8.0 + uTime * 0.4) * 0.0035;
  distorted.y += cos(uv.x * 6.0 + uTime * 0.32) * 0.0025;

  // Scroll-driven warp
  distorted.y += uScroll * 0.05 * sin(uv.x * 3.0);

  // RGB split (chromatic aberration) intensified by mouse strength
  float aberration = 0.004 + uMouseStrength * 0.012;
  float r = texture2D(uTexture, distorted + vec2(aberration, 0.0)).r;
  float g = texture2D(uTexture, distorted).g;
  float b = texture2D(uTexture, distorted - vec2(aberration, 0.0)).b;
  vec3 col = vec3(r, g, b);

  // Cinema look
  col = toCinema(col);

  // Vignette
  float v = smoothstep(0.85, 0.25, distance(uv, vec2(0.5)));
  col *= mix(0.65, 1.0, v);

  // Film grain
  float grain = (fract(sin(dot(uv * uResolution + uTime * 50.0, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.06;
  col += grain;

  // Subtle red shadow lift
  col.r += smoothstep(0.7, 0.0, dot(col, vec3(0.333))) * 0.04;

  gl_FragColor = vec4(col, 1.0);
}
`;

function ImagePlane({ url }: { url: string }) {
  const tex = useTexture(url);
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport, mouse } = useThree();
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const currentMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const targetStrength = useRef(0);
  const currentStrength = useRef(0);
  const scrollY = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetMouse.current.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
      targetStrength.current = 1;
    };
    const onMouseLeave = () => { targetStrength.current = 0; };
    const onScroll = () => {
      scrollY.current = Math.min(1, window.scrollY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Calculate plane size to match texture aspect filling viewport
  const dimensions = useMemo(() => {
    const img = tex.image as HTMLImageElement | undefined;
    if (!img) return { w: viewport.width, h: viewport.height };
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const vpAspect = viewport.width / viewport.height;
    let w = viewport.width, h = viewport.height;
    if (imgAspect > vpAspect) {
      // image is wider than viewport
      w = viewport.height * imgAspect;
      h = viewport.height;
    } else {
      w = viewport.width;
      h = viewport.width / imgAspect;
    }
    return { w: w * 1.05, h: h * 1.05 }; // slight overscan
  }, [tex, viewport]);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: tex },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseStrength: { value: 0 },
      uScroll: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [tex, size]
  );

  useFrame((state, dt) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    // Smooth mouse follow
    currentMouse.current.lerp(targetMouse.current, 0.06);
    matRef.current.uniforms.uMouse.value.copy(currentMouse.current);
    // Smooth strength
    currentStrength.current = THREE.MathUtils.lerp(
      currentStrength.current,
      targetStrength.current,
      0.08
    );
    matRef.current.uniforms.uMouseStrength.value = currentStrength.current;
    matRef.current.uniforms.uScroll.value = scrollY.current;
    matRef.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[dimensions.w, dimensions.h, 64, 64]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
      />
    </mesh>
  );
}

export default function HeroCanvas({ imageUrl }: { imageUrl: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only enable WebGL on devices that can handle it
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(hasFinePointer && !reduceMotion);
  }, []);

  if (!enabled) {
    return (
      <img
        src={imageUrl}
        alt="Cinematic still"
        className="cinema h-full w-full object-cover"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="absolute inset-0"
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ImagePlane url={imageUrl} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
