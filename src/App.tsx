import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { SmoothLayout } from './components/layout/SmoothLayout';
import { World } from './components/scene/World';
import { Spacer } from './components/ui/Spacer';
import AboutContent from './features/about/AboutContent';
import Footer from './features/footer/Footer';
import HeroContent from './features/hero/HeroContent';
import HeroScene from './features/hero/HeroScene';

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother, SplitText);

function App() {
  return (
    <SmoothLayout
      world={<World />}
      scenes={<HeroScene />}>
      <HeroContent />
      <Spacer height={45} />
      <AboutContent />
      <Spacer height={200} />
      <Footer />
    </SmoothLayout>
  );
}

export default App;
