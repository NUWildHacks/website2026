import { useState } from 'react';
import styles from './ToggleQuestion.module.scss';

interface ToggleQuestionProps {
  question: string;
  answer: string;
}

function ToggleQuestion({ question, answer }: ToggleQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.toggleQuestion}>
      <button
        className={styles.toggleQuestion__header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        <span
          className={`${styles.toggleQuestion__icon} ${
            isOpen ? styles['toggleQuestion__icon--open'] : ''
          }`}>
          +
        </span>
        <span className={styles.toggleQuestion__question}>{question}</span>
      </button>
      <div
        className={`${styles.toggleQuestion__answer} ${
          isOpen ? styles['toggleQuestion__answer--open'] : ''
        }`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default ToggleQuestion;
