import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      {<h1 className={styles.footer__heading}>FAQs</h1>}
    </div>
  );
}

export default Footer;
