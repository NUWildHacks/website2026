import styles from './SpeakerCard.module.scss';

type SpeakerCardProps = {
  name: string;
  type: string;
  headshot: string;
  title: string;
  blurb: string;
};

const SpeakerCard = (
  { name, type, headshot, title, blurb }: SpeakerCardProps,
) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__flipper}>
        <div className={`${styles.card__side} ${styles.card__front}`}>
          <div className={styles.card__inner}>
            <img src={headshot} className={styles.card__image} />
            <div className={styles.card__heading}>
              <span className={styles.card__heading__name}>{name}</span>
              <div className={styles.card__heading__subtitle}>
                <span className={styles.card__heading__type}>{type}</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  width='16'
                  height='16'>
                  <path d='M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939V.75Z'>
                  </path>
                </svg>

                <span className={styles.card__heading__title}>{title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.card__side} ${styles.card__back}`}>
          <div className={styles.card__inner}>
            <p className={styles.card__blurb}>{blurb}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
