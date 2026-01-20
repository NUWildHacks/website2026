import LogoIcon from '@/assets/logo-icon.svg';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.scss';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const threshold = 100;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > threshold) {
        // Scrolling up
        if (currentScrollY < lastScrollY.current) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, 'top top');
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${
        visible ? styles['navbar--visible'] : ''
      }`}>
      <a href='#' className={styles.navbar__logo}>
        <img src={LogoIcon} />
      </a>

      <div className={styles.navbar__content}>
        <a
          href='#about'
          className={styles.navbar__link}
          onClick={(e) => handleNavClick(e, '#about')}>
          About
        </a>
        <a
          href='#sponsors'
          className={styles.navbar__link}
          onClick={(e) => handleNavClick(e, '#sponsors')}>
          Sponsors
        </a>
        <a
          href='#faq'
          className={styles.navbar__link}
          onClick={(e) => handleNavClick(e, '#faq')}>
          FAQ
        </a>

        <a
          href='#'
          className={styles.navbar__link}
          target='_blank'
          rel='noopener noreferrer'>
          Register
        </a>
        <a
          href='#'
          className={styles.navbar__link}
          target='_blank'
          rel='noopener noreferrer'>
          Dashboard
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
