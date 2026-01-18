import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';
import styles from './AboutContent.module.scss';

function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: 'words' });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 75%',
        scrub: true,
      },
    });

    tl.from(split.words, {
      opacity: 0.2,
      stagger: 0.1,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <div className={styles.about} ref={containerRef}>
      <div className={styles.about__background}>
        <p className={styles.about__text} ref={textRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default AboutContent;
