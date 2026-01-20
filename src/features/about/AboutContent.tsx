import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';
import styles from './AboutContent.module.scss';

function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const tl = useRef<GSAPTimeline>(null);
  const split = useRef<SplitText>(null);

  useGSAP(() => {
    split.current = new SplitText(textRef.current, { type: 'words' });
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 66%',
        scrub: true,
      },
    }).from(split.current.words, {
      opacity: 0.2,
      stagger: 0.2,
      ease: 'none',
    });
  }, [containerRef, textRef]);

  return (
    <div id='about' className={styles.about} ref={containerRef}>
      <div className={styles.about__background}>
        <p className={styles.about__text} ref={textRef}>
          Tick… tock… time is running out to register for WildHacks,
          Northwestern’s largest hackathon on April 11-12, 2026!
        </p>
      </div>
    </div>
  );
}

export default AboutContent;
