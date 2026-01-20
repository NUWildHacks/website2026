import logo from '@/assets/logo-full.svg';
import mlhLogo from '@/assets/mlh-logo-white.svg';
import Button from '@/components/ui/Button';
import { links } from '@/data/links';
import { useRef } from 'react';
import styles from './HeroContent.module.scss';

function HeroContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.hero} ref={sectionRef}>
      <div ref={contentRef}>
        <div className={styles.hero__mlh}>
          <img src={mlhLogo} />
          <p>Official Member</p>
        </div>
        <img src={logo} className={styles.hero__logo} />
        <div className={styles.hero__subtitle}>
          <div className={styles.hero__subtitle__meta}>
            <span>
              April 11 &mdash; 12, 2026
            </span>
            <span>
              In-person event @ Evanston, IL
            </span>
          </div>
          <Button href={links.register.participant} target='_blank'>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
