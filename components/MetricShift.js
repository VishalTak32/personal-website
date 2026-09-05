import styles from '../styles/Work.module.css';

/**
 * A before → after metric. Both states stay on screen permanently so the
 * comparison still reads once any animation has finished.
 */
export default function MetricShift({ before, after }) {
  return (
    <div className={styles.shift}>
      <span className={styles.shiftBefore}>{before}</span>
      <span className={styles.shiftArrow} aria-hidden="true">
        →
      </span>
      <span className={styles.shiftAfter}>{after}</span>
    </div>
  );
}
