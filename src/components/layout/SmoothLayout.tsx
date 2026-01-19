import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

type SmoothLayoutProps = {
  children: React.ReactNode;
  world: React.ReactNode;
  scenes: React.ReactNode;
};

export const SmoothLayout = (
  { children, world, scenes }: SmoothLayoutProps,
) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skewRef = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother>(null);

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      speed: 0.6,
      smooth: 0.8,
      ease: 'power3.out',
      effects: true,
      normalizeScroll: true,
      smoothTouch: true,
      wrapper: wrapperRef.current,
      content: contentRef.current,
    });

    const skewTo = gsap.quickTo(skewRef.current, 'skewY', {
      duration: 0.3,
      ease: 'power3.out',
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        let velocity = self.getVelocity() / 1500;
        velocity = gsap.utils.clamp(-7, 7, velocity);
        skewTo(velocity);
      },
    });

    gsap.set(skewRef.current, {
      transformOrigin: 'left center',
      force3D: true,
    });
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} id='smooth-wrapper'>
      <div ref={contentRef} id='smooth-content'>
        {world}
        <div id='scene-layer'>
          {scenes}
        </div>
        <div ref={skewRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
