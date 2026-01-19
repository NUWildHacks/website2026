import Clock from '@/components/scene/Clock';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { Suspense, useRef } from 'react';
import styles from './HeroScene.module.scss';

function HeroScene() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    }).to(heroRef.current, {
      yPercent: -20,
      ease: 'none',
    }, 0);
  }, [heroRef]);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.hero__container} ref={containerRef}>
        <Canvas gl={{ antialias: false }}>
          <Suspense fallback={null}>
            <Clock scrollContainer={heroRef} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default HeroScene;
