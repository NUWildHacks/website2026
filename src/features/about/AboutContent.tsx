import styles from './AboutContent.module.scss';

function AboutContent() {
  return (
    <div className={styles.about}>
      <div className={styles.about__background}>
        <p className={styles.about__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default AboutContent;
