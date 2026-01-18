import clockImg from '@/assets/clock.webp';
import displacementImg from '@/assets/textures/displacement.jpg';
import transitionImg from '@/assets/textures/transition.png';
import { useGSAP } from '@gsap/react';
import { useAspect, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useMemo, useRef } from 'react';
import { type ShaderMaterial } from 'three';
import fragmentShader from './shaders/hero.frag';
import vertexShader from './shaders/hero.vert';

type HeroSceneContentProps = {
  scrollContainer: React.RefObject<HTMLDivElement | null>;
};

export default function HeroSceneContent(
  { scrollContainer }: HeroSceneContentProps,
) {
  const materialRef = useRef<ShaderMaterial>(null);

  const [tex1, tex2, disp] = useTexture([
    clockImg,
    transitionImg,
    displacementImg,
  ]);
  const { viewport } = useThree();
  const scale = useAspect(1439, 1290, 1);
  const yOffset = (scale[1] - viewport.height) / 2;

  const uniforms = useMemo(() => ({
    progress: { value: 0 },
    texture1: { value: tex1 },
    texture2: { value: tex2 },
    displacement: { value: disp },
    disRepeat: { value: 2.0 },
  }), [tex1, tex2, disp]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: 'top top',
        end: 'bottom -25%',
        scrub: true,
      },
    });

    tl.to(uniforms.progress, {
      value: 1,
      ease: 'none',
    });
  }, [uniforms, scrollContainer]);

  return (
    <mesh scale={scale} position={[0, -yOffset, 0]}>
      <planeGeometry />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent />
    </mesh>
  );
}
