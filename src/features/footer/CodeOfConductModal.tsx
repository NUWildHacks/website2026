import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import styles from './CodeOfConductModal.module.scss';

interface CodeOfConductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CodeOfConductModal({ isOpen, onClose }: CodeOfConductModalProps) {
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (isOpen) {
      smoother?.paused(true);
    } else {
      smoother?.paused(false);
    }
    return () => {
      smoother?.paused(false);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modal__closeButton}
          onClick={onClose}
          aria-label='Close'>
          <IoClose size={24} />
        </button>

        <div className={styles.modal__content}>
          <h1>
            <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md'>
              MLH Code of Conduct
            </a>
          </h1>

          <h2>TL;DR</h2>
          <p className={styles.modal__tldr}>
            Be respectful. Harassment and abuse are never tolerated. If you are
            in a situation that makes you uncomfortable at an MLH Member Event,
            if the event itself creates an unsafe or inappropriate environment,
            or if interacting with an MLH representative or event organizer
            makes you uncomfortable, please report it using the procedures
            included in this document.
          </p>

          <p>
            Major League Hacking (MLH) stands for inclusivity. We believe that
            every single person has the right to hack in a safe and welcoming
            environment.
          </p>

          <p>
            Harassment includes but is not limited to offensive verbal or
            written comments related to gender, age, sexual orientation,
            disability, physical appearance, body size, race, religion, social
            class, economic status, and veteran status. Additional cases of
            harassment include but are not limited to sharing sexual images,
            violent depictions, vulgar language, deliberate intimidation,
            stalking, following, brigading, doxxing, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </p>

          <p>
            In particular, attendees should not use sexualized images,
            activities, or other material both in their hacks and during the
            event. Booth staff (including volunteers) should not use sexualized
            clothing/uniforms/costumes or otherwise create a sexualized
            environment.
          </p>

          <p>
            If what you’re doing is making someone feel uncomfortable, that
            counts as harassment and is enough reason to stop doing it.
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </p>

          <p>
            Sponsors, judges, mentors, volunteers, organizers, MLH staff, and
            anyone else participating in the event are also subject to the
            anti-harassment policy.
          </p>

          <p>
            If a participant engages in harassing behavior, MLH may take any
            action it deems appropriate, including warning the offender or
            expulsion from the event with no eligibility for reimbursement or
            refund of any type.
          </p>

          <p>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact MLH using the
            reporting procedures defined below.
          </p>

          <p>
            MLH representatives can help participants contact campus security or
            local law enforcement, provide escorts, or otherwise assist those
            experiencing harassment to feel safe for the duration of the event.
            We value your attendance.
          </p>

          <p>
            We expect participants to follow these rules at all hackathon
            venues, hackathon-related social events, hackathon-supplied
            transportation, and online interactions related to the event.
          </p>

          <h2>Reporting Procedures</h2>
          <p>
            If you feel uncomfortable or think there may be a potential
            violation of the code of conduct, please report it immediately using
            one of the following methods. All reporters have the right to remain
            anonymous.
          </p>

          <p>
            By sending information to the general reporting line, your report
            will go to our incident response team members.
          </p>
          <ul>
            <li>
              North America General Reporting - +1 409 202 6060,{' '}
              <a href='mailto:incidents@mlh.io'>incidents@mlh.io</a>
            </li>
            <li>
              Canada General Reporting - +1 343 453 4532,{' '}
              <a href='mailto:incidents@mlh.io'>incidents@mlh.io</a>
            </li>
            <li>
              Europe General Reporting - +44 800 808 5675,{' '}
              <a href='mailto:incidents@mlh.io'>incidents@mlh.io</a>
            </li>
            <li>
              Asia-Pacific General Reporting - +91 000 80004 02492,{' '}
              <a href='mailto:incidents@mlh.io'>incidents@mlh.io</a>
            </li>
            <li>
              India General Reporting - 000 80004 02492,{' '}
              <a href='mailto:incidents@mlh.io'>incidents@mlh.io</a>
            </li>
          </ul>

          <h2>Special Incidents</h2>
          <p>
            If you are uncomfortable reporting your situation to one or more of
            these people or need to contact any of them directly in case of
            emergency, direct contact details are listed below.
          </p>
          <ul>
            <li>
              Mary Siebert - +1 (516) 362-1835,{' '}
              <a href='mailto:mary@mlh.io'>mary@mlh.io</a>
            </li>
            <li>
              Swift - +1 (347) 220-8667,{' '}
              <a href='mailto:swift@mlh.io'>swift@mlh.io</a>
            </li>
          </ul>

          <p>
            MLH reserves the right to revise, make exceptions to, or otherwise
            amend these policies in whole or in part. If you have any questions
            regarding these policies, please contact MLH by e-mail at{' '}
            <a href='mailto:incidents@mlh.io'>incidents@mlh.io</a>.
          </p>

          <p>
            This document was last updated on: February 14th 2025
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default CodeOfConductModal;
