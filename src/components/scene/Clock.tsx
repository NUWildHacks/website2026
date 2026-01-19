import clockImg from '@/assets/clock.webp';
import displacementImg from '@/assets/textures/displacement.jpg';
import transitionImg from '@/assets/textures/transition.png';
import { useGSAP } from '@gsap/react';
import { useAspect, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useMemo, useRef } from 'react';
import { Mesh, ShaderMaterial } from 'three';
import fragmentShader from './shaders/hero.frag';
import vertexShader from './shaders/hero.vert';

type ClockProps = {
  scrollContainer: React.RefObject<HTMLDivElement | null>;
};

const Clock = (
  { scrollContainer }: ClockProps,
) => {
  const materialRef = useRef<ShaderMaterial>(null);
  const meshRef = useRef<Mesh>(null);
  const tl = useRef<GSAPTimeline>(null);

  const [tex1, tex2, disp] = useTexture([
    clockImg,
    transitionImg,
    displacementImg,
  ]);

  const { viewport } = useThree();
  const scale = useAspect(1439, 1290, 1);

  const clockOffset = (viewport.height / 2) - (viewport.height * 0.375)
    - (scale[1] / 2);

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    progress: { value: 0 },
    texture1: { value: tex1 },
    texture2: { value: tex2 },
    displacement: { value: disp },
    disRepeat: { value: 2.0 },
  }), [tex1, tex2, disp]);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    }).to(uniforms.progress, {
      value: 1,
      ease: 'none',
    });
  }, [scrollContainer, uniforms]);

  return (
    <mesh
      scale={scale}
      renderOrder={1}
      position={[0, clockOffset, 0]}
      ref={meshRef}>
      <planeGeometry />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        depthTest={true} />
    </mesh>
  );
};

export default Clock;
