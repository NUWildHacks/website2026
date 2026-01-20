import FigureOne from '@/assets/figure1.svg';
import HourGlass from '@/assets/hourglass.svg';
import Button from '@/components/ui/Button';
import { links } from '@/data/links';
import styles from './SponsorsBulletin.module.scss';

function SponsorsBulletin() {
  return (
    <div className={styles.sponsors}>
      <div className={styles.sponsors__left}>
        <img
          src={FigureOne}
          alt='Illustration of a man-clock hybrid pointing towards Coming Soon card' />
      </div>

      <div className={styles.sponsors__card}>
        <h1 className={styles.sponsors__title}>Coming soon...</h1>

        <div className={styles.sponsors__cta}>
          <p className={styles.sponsors__body}>
            In the meantime, register as a
          </p>
          <div className={styles.sponsors__buttons}>
            <Button
              className={styles.sponsors__button}
              href={links.register.participant}
              target='_blank'>
              Participant
            </Button>
            <Button
              className={styles.sponsors__button}
              href={links.register.judge}
              target='_blank'>
              Judge / Mentor
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.sponsors__right}>
        <img src={HourGlass} alt='Illustration of a bug-hourglass hybrid' />
      </div>
    </div>
  );
}

export default SponsorsBulletin;
