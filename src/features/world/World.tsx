import clockBg from '@/assets/clock_bg.png';
import cloudBg from '@/assets/cloud_bg.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import styles from './World.module.scss';

export const World = () => {
  const worldRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLImageElement>(null);
  const clockRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(moverRef.current, {
      y: '15svh',
      ease: 'none',
      scrollTrigger: {
        trigger: worldRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, [worldRef, moverRef]);

  return (
    <div className={styles.world} ref={worldRef}>
      <div className={styles.world__mover} ref={moverRef}>
        <img src={cloudBg} ref={cloudsRef} />
        <div style={{ backgroundColor: '#128684', height: '250svh' }} />
        <img src={clockBg} ref={clockRef} />
      </div>
    </div>
  );
};
