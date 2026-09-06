import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal';
import styles from '../styles/About.module.css';

const CREDENTIALS = [
  { label: 'Education', value: 'B.S. Computer Science, UT Austin' },
  {
    label: 'Patent',
    value: 'Granted, SQL Query Combiner',
    href: 'https://patents.google.com/patent/US12536176B2',
  },
  { label: 'Certification', value: 'AWS Solutions Architect, Associate' },
];

export default function About() {
  return (
    <section className={`wrap ${styles.about}`} id="about">
      <Reveal className={styles.head}>
        <h2 className={styles.sectionTitle}>About</h2>
      </Reveal>

      <Reveal className={styles.copy}>
        <p>
          I’m currently a software engineer at Capital One, working on the systems behind auto
          lending. The services that decide loans, route approvals, and calculate dealer
          compensation. Most of it lives in the part nobody sees: making sure work happens in the
          right order, holds up under volume, and fails in ways someone can actually debug at 2am.
        </p>
        <p>
          The parts I enjoy most are the unglamorous ones. Clear ownership, useful logging,
          tests that catch real problems. Lately I’ve been looking for places where{' '}
          <span className={styles.hl}>AI can take the repetitive work off my team’s plate</span>,
          which is how the observability tooling above came about.
        </p>
        <p className={styles.aside}>
          Outside of work you’ll usually find me on a basketball or pickleball court, at a piano,
          or planning the next trip.
        </p>
      </Reveal>

      <Reveal as="dl" className={styles.creds} delay={1}>
        {CREDENTIALS.map((cred) => (
          <div key={cred.label} className={styles.cred}>
            <dt>{cred.label}</dt>
            <dd>
              {cred.href ? (
                <a
                  className={styles.credLink}
                  href={cred.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cred.value}
                  <ArrowUpRight size={13} weight="bold" />
                </a>
              ) : (
                cred.value
              )}
            </dd>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
