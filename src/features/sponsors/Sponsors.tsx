import logoIcon from '@/assets/logo-icon.svg';
import styles from './Sponsors.module.scss';
import SponsorsBulletin from './SponsorsBulletin';

function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <img src={logoIcon} className={styles.sponsors__logo} />
      <h2 className={styles.sponsors__heading}>
        Sponsors
      </h2>
      <p className={styles.sponsors__subtitle}>
        Our sponsors make this weekend possible.
        <br />
        Stay tuned as we confirm more sponsors for WildHacks 2026!
      </p>

      <p className={styles.sponsors__subtitle}>
        Want to help make this event a reality for 300+ hackers across the
        globe?
        <br />
        Email us at{' '}
        <a href='mailto:wildhacks@northwestern.edu'>
          wildhacks@northwestern.edu
        </a>
      </p>

      <SponsorsBulletin />
    </div>
  );
}

export default Sponsors;
