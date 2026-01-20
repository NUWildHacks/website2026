import doordashTable from '@/assets/doordash-table.png';
import openingCeremony from '@/assets/opening-ceremony.png';
import wildhacks2025 from '@/assets/wildhacks-2025.gif';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './AboutLastYear.module.scss';

function AboutLastYear() {
  const containerRef = useRef<HTMLDivElement>(null);

  const imgARef = useRef<HTMLImageElement>(null);
  const statARef = useRef<HTMLDivElement>(null);
  const copyARef = useRef<HTMLDivElement>(null);

  const copyBRef = useRef<HTMLDivElement>(null);
  const statBTopRef = useRef<HTMLDivElement>(null);
  const imgBRef = useRef<HTMLImageElement>(null);
  const statBRef = useRef<HTMLDivElement>(null);

  const imgCRef = useRef<HTMLImageElement>(null);
  const statCRef = useRef<HTMLDivElement>(null);
  const copyCRef = useRef<HTMLDivElement>(null);

  const copyDRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reveal = (
      el: Element | null,
      {
        fromXPercent,
        start = 'top 75%',
        end = 'top 45%',
      }: { fromXPercent: number; start?: string; end?: string },
    ) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { autoAlpha: 0, xPercent: fromXPercent },
        {
          autoAlpha: 1,
          xPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        },
      );
    };

    const all = [
      imgARef.current,
      statARef.current,
      copyARef.current,
      copyBRef.current,
      statBTopRef.current,
      imgBRef.current,
      statBRef.current,
      imgCRef.current,
      statCRef.current,
      copyCRef.current,
      copyDRef.current,
    ].filter(Boolean) as Element[];

    gsap.set(all, { willChange: 'transform,opacity' });

    // A section
    reveal(imgARef.current, {
      fromXPercent: -12,
      start: 'top 80%',
      end: 'top 45%',
    });
    reveal(statARef.current, {
      fromXPercent: -12,
      start: 'top 80%',
      end: 'top 53%',
    });
    reveal(copyARef.current, {
      fromXPercent: 12,
      start: 'top 95%',
      end: 'top top',
    });

    // B section
    reveal(copyBRef.current, {
      fromXPercent: -12,
      start: 'top 90%',
      end: 'top 70%',
    });
    reveal(statBTopRef.current, {
      fromXPercent: 12,
      start: 'top 85%',
      end: 'top 53%',
    });
    reveal(imgBRef.current, {
      fromXPercent: 12,
      start: 'top 80%',
      end: 'top 51%',
    });
    reveal(statBRef.current, {
      fromXPercent: 12,
      start: 'top 80%',
      end: 'top 60%',
    });

    // C section
    reveal(statCRef.current, {
      fromXPercent: -12,
      start: 'top 80%',
      end: 'top 53%',
    });
    reveal(imgCRef.current, {
      fromXPercent: -12,
      start: 'top 70%',
      end: 'top 55%',
    });
    reveal(copyCRef.current, {
      fromXPercent: 12,
      start: 'top 80%',
      end: 'top 51%',
    });

    // D section
    reveal(copyDRef.current, {
      fromXPercent: 0,
      start: 'top 80%',
      end: 'top 65%',
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div className={styles.timeline} ref={containerRef}>
      <div className={styles.timeline__content}>
        {/* A */}
        <div className={styles.block}>
          <div className={styles.imageBlock}>
            <img
              ref={imgARef}
              className={styles.image}
              src={openingCeremony}
              alt='WildHacks 2025 opening ceremony' />
            <div ref={statARef} className={styles.stat__A}>
              348<br />participants
            </div>
          </div>

          <div ref={copyARef} className={styles.copyContainer__A}>
            <p className={styles.copy}>
              Join the best hackers in the Chicagoland area to tackle today’s
              pressing problems and ship innovative projects before the clock
              hits midnight.
            </p>
          </div>
        </div>

        {/* B */}
        <div className={styles.block}>
          <div ref={copyBRef} className={styles.copyContainer__B}>
            <p className={styles.copy}>
              In 24 hours, you and your team will build with the help of mentors
              and workshops and turn a spark into a finished demo.
            </p>
          </div>

          <div className={styles.imageBlock}>
            <div ref={statBTopRef} className={styles.stat__topB}>
              10+ prizes
            </div>
            <img
              ref={imgBRef}
              className={styles.image__B}
              src={doordashTable}
              alt='WildHacks 2025 refreshments table' />
            <div ref={statBRef} className={styles.stat__bottomB}>
              94<br />submissions
            </div>
          </div>
        </div>

        {/* C */}
        <div className={styles.block}>
          <div className={styles.imageBlock}>
            <div ref={statCRef} className={styles.stat__C}>57 universities</div>
            <img
              ref={imgCRef}
              className={styles.image__C}
              src={wildhacks2025}
              alt='WildHacks 2025 dinner timelapse gif' />
          </div>
          <div className={styles.copyContainer__C}>
            <div ref={copyCRef} className={styles.copy}>
              Whether you’re a seasoned pro or coding for the first time,
              WildHacks is the space for you to grow, learn, and collaborate.
            </div>
          </div>
        </div>

        {/* D */}
        <div className={styles.block__final}>
          <div ref={copyDRef} className={styles.copyFinal}>
            We’ll provide the food, you bring the energy.<br />Happy hacking!
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLastYear;
