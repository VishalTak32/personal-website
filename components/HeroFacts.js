import styles from '../styles/HeroFacts.module.css';

const FACTS = [
  { label: 'Based in', value: 'Frisco, TX' },
  { label: 'Focus', value: 'Distributed systems, applied AI' },
  { label: 'Currently building', value: 'Approval and workflow platforms', live: true },
];

/**
 * The three standing facts, laid along a rail in the hero's right column.
 * Each entry is a horizontal row hung off a vertical spine: marker on the
 * line, label and value to its right. The last marker is filled rather than
 * hollow, so the eye lands on the thing that is actually current.
 */
export default function HeroFacts() {
  return (
    <dl className={styles.rail}>
      {FACTS.map((fact) => (
        <div key={fact.label} className={`${styles.fact} ${fact.live ? styles.live : ''}`}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
