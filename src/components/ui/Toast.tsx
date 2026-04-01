import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useRef, useState } from 'react';
import styles from './Toast.module.scss';

type ToastProps = {
  text: string;
  href: string;
  actionName: string;
};

const Toast = (
  { text, href, actionName }: ToastProps,
) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  const handleActionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleDismiss();
    if (href.startsWith('#')) {
      e.preventDefault();
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(href, true, 'top top');
      }
    }
  };

  const handleDismiss = () => {
    gsap.to(toastRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.in',
      onComplete: () => setIsDismissed(true),
    });
  };

  useGSAP(() => {
    gsap.from(toastRef.current, {
      y: -50,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, [toastRef]);

  if (isDismissed) return null;
  return (
    <div ref={toastRef} className={styles.toast}>
      <svg
        className={styles.toast__icon}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        width='16'
        height='16'>
        <path d='M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'>
        </path>
      </svg>
      <span className={styles.toast__text}>
        {text}
        <a
          href={href}
          className={styles.toast__action}
          onClick={handleActionClick}>
          {actionName}
        </a>
      </span>
      <button
        className={styles.toast__dismiss}
        onClick={handleDismiss}
        aria-label='Dismiss notification'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 12 12'
          width='12'
          height='12'>
          <path d='M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939 8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6 9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061 3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6 2.22 3.28a.749.749 0 0 1 0-1.06Z'>
          </path>
        </svg>
      </button>
    </div>
  );
};

export default Toast;
