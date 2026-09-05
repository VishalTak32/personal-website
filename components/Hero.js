import styles from '../styles/Hero.module.css';

const QUICK_FACTS = [
  { label: 'Based in', value: 'Austin, TX' },
  { label: 'Focus', value: 'Distributed systems, applied AI' },
  { label: 'Currently building', value: 'Approval & workflow platforms', live: true },
];

export default function Hero() {
  return (
    <section className={`wrap ${styles.hero}`}>
      <p className={`${styles.eyebrow} ${styles.seq1}`}>Senior Software Engineer</p>

      <h1 className={styles.giant}>
        <span className={styles.mask}>
          <span className={styles.word}>Vishal</span>
        </span>{' '}
        <span className={styles.mask}>
          <span className={`${styles.word} ${styles.wordAccent}`}>Tak</span>
        </span>
      </h1>

      <div className={styles.row}>
        <p className={`${styles.positioning} ${styles.seq2}`}>
          I build the <strong>backend systems and graph engines</strong> that move loan decisions,
          approvals, and compensation through Capital One at scale — and lately, the AI tooling that
          speeds up how my team ships them.
        </p>

        <dl className={`${styles.facts} ${styles.seq3}`}>
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>
                {fact.live && <i className={styles.live} aria-hidden="true" />}
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
