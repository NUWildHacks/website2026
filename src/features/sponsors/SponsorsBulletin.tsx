import FigureOne from '@/assets/figure1.svg';
import HourGlass from '@/assets/hourglass.svg';
import styles from './SponsorsBulletin.module.scss';

import appifexLogo from '@/assets/sponsors/appifex_ai.svg';
import claudeLogo from '@/assets/sponsors/claude.png';
import hrtLogo from '@/assets/sponsors/hrt.svg';
import imcLogo from '@/assets/sponsors/imc.png';
import menolearnLogo from '@/assets/sponsors/menolearn.png';
import nuCsLogo from '@/assets/sponsors/nu-cs.jpg';
import pureButtonsLogo from '@/assets/sponsors/pure_buttons.png';
import redBullLogo from '@/assets/sponsors/red_bull.png';
import garageLogo from '@/assets/sponsors/the_garage.png';

const sponsors = [
  {
    name: 'Appifex',
    url: 'appifex.ai',
    image: appifexLogo,
  },
  {
    name: 'Claude',
    url: 'claude.ai',
    image: claudeLogo,
  },
  {
    name: 'Hudson River Trading',
    url: 'hudsonrivertrading.com',
    image: hrtLogo,
  },
  {
    name: 'IMC Trading',
    url: 'imc.com',
    image: imcLogo,
  },
  {
    name: 'Menolearn',
    url: 'menolearn.com',
    image: menolearnLogo,
  },
  {
    name: 'Northwestern Computer Science',
    url: 'cs.northwestern.edu',
    image: nuCsLogo,
  },
  {
    name: 'Pure Buttons',
    url: 'purebuttons.com',
    image: pureButtonsLogo,
  },
  {
    name: 'Red Bull',
    url: 'redbull.com',
    image: redBullLogo,
  },
  {
    name: 'The Garage at Northwestern',
    url: 'thegarage.northwestern.edu',
    image: garageLogo,
  },
];

function SponsorsBulletin() {
  return (
    <div className={styles.sponsors}>
      <div className={styles.sponsors__left}>
        <img
          src={FigureOne}
          alt='Illustration of a man-clock hybrid pointing towards Coming Soon card' />
      </div>

      <div className={styles.sponsors__card}>
        <div className={'blank'}></div>
        <div className={styles.sponsors__card__inner}>
          {sponsors.map((s, idx) => (
            <a href={'https://www.' + s.url} target='_blank'>
              <img
                key={idx}
                src={s.image}
                alt={s.name + ' logo'}
                title={s.name}
                className={styles.sponsors__logo} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.sponsors__right}>
        <img src={HourGlass} alt='Illustration of a bug-hourglass hybrid' />
      </div>
    </div>
  );
}

export default SponsorsBulletin;
