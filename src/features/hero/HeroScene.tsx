import { useGSAP } from '@gsap/react';
import { OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useRef } from 'react';
import styles from './HeroScene.module.scss';
import HeroSceneContent from './HeroSceneContent';

function HeroScene() {
  const heroRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(heroRef.current, {
      yPercent: -20,
      ease: 'none',
    }, 0);
  });

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.hero__clock} ref={container}>
        <Canvas gl={{ antialias: false }}>
          <OrthographicCamera
            makeDefault
            left={-1}
            right={1}
            top={1}
            bottom={-1}
            near={0}
            far={1} />
          <HeroSceneContent scrollContainer={heroRef} />
        </Canvas>
      </div>
    </div>
  );
}

export default HeroScene;
