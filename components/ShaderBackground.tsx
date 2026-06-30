"use client";
import { useEffect, useRef } from "react";

/**
 * Three.js GLSL shader background — ported from the interview-portfolio project.
 * Adapted to a black/white monochrome palette with mouse-reactive glowing waves.
 */
export default function ShaderBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let THREE: typeof import("three");
    let scene: import("three").Scene;
    let camera: import("three").OrthographicCamera;
    let renderer: import("three").WebGLRenderer;
    let material: import("three").ShaderMaterial;
    let clock: import("three").Clock;
    let animationId: number;

    const mouse = { x: 0.5, y: 0.5 };
    const targetMouse = { x: 0.5, y: 0.5 };

    const init = async () => {
      THREE = await import("three");

      const uniforms = {
        t: { value: 0.0 },
        r: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        mouse: { value: new THREE.Vector2(0.5, 0.5) },
      };

      scene = new THREE.Scene();
      clock = new THREE.Clock();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      camera.position.z = 1;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.PlaneGeometry(2, 2);

      material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec2 r;
          uniform float t;
          uniform vec2 mouse;
          varying vec2 vUv;

          mat2 rot(float a) {
            float s = sin(a), c = cos(a);
            return mat2(c, -s, s, c);
          }

          float wave(vec2 p, float phase, float freq) {
            return sin(p.x * freq + phase) * 0.3 * sin(p.y * freq * 0.5 + phase * 0.7);
          }

          float glowLine(float dist, float thickness, float intensity) {
            return intensity * thickness / (abs(dist) + thickness * 0.5);
          }

          vec3 mod289v3(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
          vec2 mod289v2(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
          vec3 permute(vec3 x) { return mod289v3(((x * 34.0) + 1.0) * x); }

          float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i = floor(v + dot(v, C.yy));
            vec2 x0 = v - i + dot(i, C.xx);
            vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289v2(i);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m * m; m = m * m;
            vec3 x2 = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x2) - 0.5;
            vec3 ox = floor(x2 + 0.5);
            vec3 a0 = x2 - ox;
            m *= (1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h));
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
          }

          float starfield(vec2 uv, float time) {
            vec2 grid = floor(uv * 180.0);
            vec2 fr   = fract(uv * 180.0) - 0.5;
            float star = hash(grid);
            if (star < 0.988) return 0.0;
            float twinkle = sin(time * 2.0 + grid.x + grid.y) * 0.5 + 0.5;
            return smoothstep(0.07, 0.0, length(fr)) * twinkle * (star - 0.988) * 80.0;
          }

          void main() {
            vec2 uv = (vUv - 0.5) * 2.0;
            uv.x *= r.x / r.y;
            vec2 uv0 = uv;
            vec3 col = vec3(0.0);
            float time = t * 0.35;

            /* mouse glow */
            vec2 muv = (mouse - 0.5) * 2.0;
            muv.x *= r.x / r.y;
            float md = length(uv - muv);
            float mg = 0.08 / (md + 0.12) * (sin(t * 1.4) * 0.4 + 0.6);
            col += mg * vec3(0.9, 0.9, 0.9) * 0.18;
            uv += (muv - uv) * (0.25 / (md + 0.5));

            uv *= rot(time * 0.04);
            float wn = snoise(uv * 2.0 + time * 0.2) * 0.08;

            float c1 = sin(time * 0.3 + 0.0) * 0.5 + 0.5;
            float c2 = sin(time * 0.3 + 2.0) * 0.5 + 0.5;
            float c3 = sin(time * 0.3 + 4.0) * 0.5 + 0.5;

            /* wave 1 */
            float y1 = uv.y - wave(uv, time * 1.5, 2.0) + wn;
            col += vec3(c1 * 0.18 + 0.06) * glowLine(y1, 0.025, 0.45);

            /* wave 2 */
            float y2 = uv.y + 0.4 - wave(uv + vec2(1.0, 0.5), time * 1.2, 2.5) + wn * 0.8;
            col += vec3(c2 * 0.22 + 0.08) * glowLine(y2, 0.025, 0.45);

            /* wave 3 */
            float y3 = uv.y - 0.4 - wave(uv + vec2(-0.5, 1.0), time * 1.8, 1.8) + wn * 1.2;
            col += vec3(c3 * 0.15 + 0.05) * glowLine(y3, 0.025, 0.45);

            /* circular pulse */
            float dist = length(uv0);
            float circle = abs(sin(dist * 4.0 - time * 2.0)) * exp(-dist * 0.5);
            col += vec3(0.12) * circle * 0.1;

            /* stars */
            col += starfield(uv0 * 1.8 + time * 0.01, t) * vec3(0.7) * 0.4;

            /* center glow */
            col += exp(-dist * 1.2) * vec3(0.08);

            /* vignette */
            col *= smoothstep(0.0, 1.0, 1.0 - dist * 0.45);

            gl_FragColor = vec4(col, 1.0);
          }
        `,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const onMove = (e: MouseEvent) => {
        targetMouse.x = e.clientX / window.innerWidth;
        targetMouse.y = 1.0 - e.clientY / window.innerHeight;
      };
      const onTouch = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          targetMouse.x = e.touches[0].clientX / window.innerWidth;
          targetMouse.y = 1.0 - e.touches[0].clientY / window.innerHeight;
        }
      };
      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.r.value.set(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onTouch, { passive: true });
      window.addEventListener("resize", onResize);

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        uniforms.t.value = clock.getElapsedTime();
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;
        uniforms.mouse.value.set(mouse.x, mouse.y);
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onTouch);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        material.dispose();
      };
    };

    let cleanup: (() => void) | undefined;
    init().then((fn) => { cleanup = fn; });
    return () => { cleanup?.(); };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
