import { ArrowRight } from '@phosphor-icons/react';
import HeroFacts from './HeroFacts';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={`wrap ${styles.hero}`}>
      <div className={styles.copy}>
        <p className={`${styles.eyebrow} ${styles.seq1}`}>Senior Software Engineer</p>

        <h1 className={styles.giant}>
          <span className={styles.mask}>
            <span className={styles.word}>Vishal</span>
          </span>{' '}
          <span className={styles.mask}>
            <span className={`${styles.word} ${styles.wordAccent}`}>Tak</span>
          </span>
        </h1>

        <p className={`${styles.positioning} ${styles.seq2}`}>
          I build the <strong>backend systems</strong> that move loan decisions, approvals, and
          compensation through Capital One at scale and lately, the AI tooling that speeds up how
          my team ships them.
        </p>

        <div className={`${styles.actions} ${styles.seq3}`}>
          <a className={styles.solid} href="#contact">
            Email me
            <ArrowRight size={15} weight="bold" className={styles.arrow} />
          </a>
          <a
            className={styles.ghost}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </div>
      </div>

      <div className={styles.railWrap}>
        <HeroFacts />
      </div>
    </section>
  );
}
