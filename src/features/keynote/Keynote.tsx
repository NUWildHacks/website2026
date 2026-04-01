import AndrewHotzHeadshot from '@/assets/andrew-hotz.jpg';
import SpeakerCard from '@/components/ui/SpeakerCard';
import { useRef } from 'react';
import styles from './Keynote.module.scss';

function Keynote() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id='keynote' className={styles.keynote} ref={containerRef}>
      <div className={styles.keynote__background}>
        <div className={styles.keynote__heading}>
          <p className={styles.keynote__subtitle}>Meet our 2026</p>
          <p className={styles.keynote__title}>
            Keynote Speaker
          </p>
        </div>

        <div className={styles.keynote__cards}>
          <SpeakerCard
            name='Andrew Hotz'
            type='Opening Speaker'
            title='Director @ Google'
            headshot={AndrewHotzHeadshot}
            blurb='Andrew is a tech & media executive currently serving as Director at Google leading the programmatic media business for the Brand Sector (Auto, CPG, Government, Entertainment, Consumer Electronics). His work at Google focuses on helping marketers realize added savings through programmatic media buying, integrating Google’s AI to drive greater performance and helping marketers bridge Brand and Performance marketing efforts (including Commerce & Retail Media). Prior to Google, Andrew served as the EVP of Worldwide Digital Marketing and Chief Data Strategist for Warner Bros, leading a team overseeing digital marketing, media, influencers and data & analytics on films like Ready Player One, Crazy Rich Asians, Aquaman, Joker, The Batman, and Elvis. While at Warner Bros, he helped lead WB’s business through the pandemic, including connecting WB’s theatrical business with the streaming business and launch of HBO Max. He’s a passionate people leader, mentor & coach, and is the Exec Sponsor of Google’s LGBTQ+ organization. Andrew is an education advocate, having served as a volunteer teacher (Citizen Schools), student mentor (SPARK) and currently serves on his local School Board.' />
        </div>
      </div>
    </div>
  );
}

export default Keynote;
