import styles from '../styles/Ticker.module.css';

const STACK = [
  { label: 'Java' },
  { label: 'Spring Boot', hot: true },
  { label: 'AWS' },
  { label: 'PostgreSQL' },
  { label: 'TypeScript' },
  { label: 'Distributed Systems', hot: true },
  { label: 'Angular' },
  { label: 'Gremlin' },
  { label: 'Python' },
  { label: 'Applied AI', hot: true },
  { label: 'Snowflake' },
  { label: 'Docker' },
];

export default function Ticker() {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...STACK, ...STACK];

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={`${item.label}-${i}`} className={item.hot ? styles.hot : undefined}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
