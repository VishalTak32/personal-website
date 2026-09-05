import Reveal from './Reveal';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="wrap">
        <Reveal as="h2" className={styles.heading}>
          Let’s build
          <br />
          something.
        </Reveal>

        <Reveal className={styles.actions} delay={1}>
          <a className={styles.solid} href="mailto:vishal.tak14@gmail.com">
            Email me <span className={styles.arrow}>→</span>
          </a>
          <a
            className={styles.line}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé
          </a>
          <a
            className={styles.line}
            href="https://www.linkedin.com/in/vishal-tak14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
