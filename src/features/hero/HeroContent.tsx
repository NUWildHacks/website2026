import logo from '@/assets/logo-full.svg';
import { useRef } from 'react';
import styles from './HeroContent.module.scss';

function HeroContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.hero} ref={sectionRef}>
      <div ref={contentRef}>
        {
          // <h1 className={styles.hero__heading}>LOREM IPSUM DOLOR</h1>
        }
        <img src={logo} className={styles.hero__logo} />
      </div>
    </div>
  );
}

export default HeroContent;
