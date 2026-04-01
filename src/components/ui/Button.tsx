import styles from './Button.module.scss';

type ButtonProps =
  & React.ButtonHTMLAttributes<HTMLButtonElement>
  & React.AnchorHTMLAttributes<HTMLAnchorElement>
  & {
    href?: string;
  };

const Button = ({ children, href, ...props }: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        className={styles.button}>
        {children}
      </a>
    );
  }

  return (
    <button
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
      className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
