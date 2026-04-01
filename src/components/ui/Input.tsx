import styles from './Input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={`${styles.input} ${className ?? ''}`}
        {...props} />
    </div>
  );
};

export default Input;
