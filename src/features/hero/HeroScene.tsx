import clock from '@/assets/main_foreground.png';
// import bg from '@/assets/middle_bg.png';
import gsap from 'gsap';
// import { OrthographicCamera } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import styles from './HeroScene.module.scss';
function HeroScene() {
  const container = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLImageElement>(null);
  // const bgRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
    tl.to(clockRef.current, {
      y: '-210vh',
      ease: 'none',
    }, 0);
  }, { scope: container });

  return (
    <div className={styles.hero} ref={container}>
      <img className={styles.hero__clock} src={clock} ref={clockRef} />
      {
        // <img className={styles.hero__bg} src={bg} ref={bgRef} />
        // <img className={styles.hero__clock} src={clock} />
        // <img className={styles.hero__bg} src={fg} />
        // <Canvas gl={{ antialias: false }}>
        //   <OrthographicCamera
        //     makeDefault
        //     left={-1}
        //     right={1}
        //     top={1}
        //     bottom={-1}
        //     near={0}
        //     far={1} />

        //   <mesh>
        //     <planeGeometry />
        //     <shaderMaterial
        //       transparent={true}
        //       uniforms={{}} />
        //   </mesh>
        // </Canvas>
      }
    </div>
  );
}

export default HeroScene;
