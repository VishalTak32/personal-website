import { ArrowRight } from '@phosphor-icons/react';
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
          <a
            className={styles.ghost}
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
