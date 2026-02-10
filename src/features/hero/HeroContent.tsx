import logo from '@/assets/logo-full.svg';
import mlhLogo from '@/assets/mlh-logo-white.svg';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/input';
import { links } from '@/data/links';
import supabase from '@/utils/supabase';
import { Toast } from 'radix-ui';
import { useRef, useState } from 'react';
import styles from './HeroContent.module.scss';

function HeroContent() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = async () => {
    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      return;
    }

    setStatus('loading');

    const { data: existing } = await supabase.from('newsletter').select('email')
      .eq('email', email);

    if (existing?.length) {
      setStatus('error');
      setMessage('This email is already subscribed');
      return;
    }

    // Insert new subscriber
    const { error } = await supabase.from('newsletter').insert({ email });

    if (error) {
      setStatus('error');
      setMessage('Something went wrong');
      return;
    }

    setStatus('success');
    setMessage('Successfully subscribed!');
    setEmail('');
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.hero} ref={sectionRef}>
      <div ref={contentRef}>
        <div className={styles.hero__mlh}>
          <img src={mlhLogo} alt='MLH logo' />
          <p>Official Member</p>
        </div>
        <img
          src={logo}
          className={styles.hero__logo}
          alt='WildHacks 2026 Logo' />
        <div className={styles.hero__subtitle}>
          <div className={styles.hero__subtitle__meta}>
            <span>
              April 11 &mdash; 12, 2026
            </span>
            <span>
              In-person event @ Evanston, IL
            </span>
          </div>
          <Button href={links.register.participant} target='_blank'>
            Register
          </Button>
        </div>
        <div>
          <span>
            Keep up to date with news
          </span>
          <Input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'} />
          <Button onClick={handleSubscribe} disabled={status === 'loading'}>
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
          {message && <p>{message}</p>}
        </div>
      </div>
      <Toast.Root>
        <Toast.Description>Saved!</Toast.Description>
      </Toast.Root>
    </div>
  );
}

export default HeroContent;
