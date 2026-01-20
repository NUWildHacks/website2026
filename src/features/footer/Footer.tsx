import ClockBreak from '@/assets/clock.webp';
import { categoryMeta, type FaqCategory, faqs } from '@/data/faqs';
import { links } from '@/data/links';
import { useMemo, useState } from 'react';
import {
  FaEnvelopeSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import CodeOfConductModal from './CodeOfConductModal';
import styles from './Footer.module.scss';
import ToggleQuestion from './ToggleQuestion';

const categoryOrder: FaqCategory[] = [
  'general',
  'registration-teams',
  'logistics',
  'support',
];

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section id='faq' className={styles.footer}>
      <div className={styles.footer__container}>
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
      </div>
      <img
        src={ClockBreak}
        style={{ width: '100%' }}
        alt='Golden clock breakpoint' />

      <div className={styles.footer__teamContainer}>
        <p>Made with &lt;3 by the WildHacks Team</p>
        <button
          className={styles.footer__cocLink}
          onClick={() => setIsModalOpen(true)}>
          MLH Code of Conduct
        </button>
        <CodeOfConductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} />
        <div className={styles.footer__socialContainer}>
          <a
            href={links.email}
            className={styles.footer__socialButton}
            target='_blank'
            aria-label='Email us'>
            <FaEnvelopeSquare size={24} />
          </a>
          <a
            href={links.social.linkedin}
            className={styles.footer__socialButton}
            target='_blank'
            aria-label='Go to WildHacks LinkedIn Page'>
            <FaLinkedin size={24} />
          </a>
          <a
            href={links.social.instagram}
            className={styles.footer__socialButton}
            target='_blank'
            aria-label='Go to WildHacks Instagram Page'>
            <FaInstagramSquare size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;

// https://www.linkedin.com/company/wildhacks/
// https://www.instagram.com/wildhacks/
