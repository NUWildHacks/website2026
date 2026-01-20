import { categoryMeta, type FaqCategory, faqs } from '@/data/faqs';
import { useMemo } from 'react';
import styles from './Footer.module.scss';
import ToggleQuestion from './ToggleQuestion';

const categoryOrder: FaqCategory[] = [
  'general',
  'registration-teams',
  'logistics',
  'support',
];

function Footer() {
  const grouped = useMemo(() => {
    const sorted = [...faqs].sort((a, b) =>
      (a.order ?? 999) - (b.order ?? 999)
    );
    const acc: Record<FaqCategory, typeof sorted> = {
      general: [],
      'registration-teams': [],
      logistics: [],
      support: [],
    };
    for (const item of sorted) acc[item.category].push(item);
    return acc;
  }, []);

  return (
    <section className={styles.footer}>
      <h1 className={styles.footer__heading}>FAQs</h1>

      <div className={styles.footer__grid}>
        {categoryOrder.map((cat) => {
          const meta = categoryMeta[cat];
          const items = grouped[cat];

          return (
            <div key={cat} className={styles.footer__cell}>
              <div className={styles.footer__meta}>
                <span className={styles.footer__time}>{meta.time}</span>
                <span className={styles.footer__slug}>{meta.slug}</span>
              </div>

              {items.map((item) => (
                <ToggleQuestion
                  key={item.id}
                  question={item.question}
                  answer={item.answer} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Footer;
