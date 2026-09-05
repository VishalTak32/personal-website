import Reveal from './Reveal';
import Metric from './Metric';
import MetricShift from './MetricShift';
import Ticker from './Ticker';
import styles from '../styles/Work.module.css';

const CASE_STUDIES = [
  {
    tags: 'Backend · Workflow Platform · 2026',
    title: 'Approval Workflow Platform',
    problem:
      'approvals across sales teams were scattered through email and Slack threads, with no audit trail or status visibility.',
    role:
      'architected and built the event-driven approval microservice end to end — schema, state machine, and rollout.',
    outcome:
      'one system now handles 100+ approvals a day with a full audit trail and live status tracking.',
    stack: ['Spring Boot', 'PostgreSQL', 'AWS Fargate', 'State Machines'],
    metric: {
      value: 300,
      suffix: '+',
      desc: 'sales agents running approvals through a single auditable system',
    },
  },
  {
    tags: 'AI Tooling · Observability · 2026',
    title: 'AI-Driven Observability Workflow',
    problem:
      'standing up dashboards and alerts for a new service took engineers days of manual configuration.',
    role:
      'designed and built a tool that generates dashboards and alerts directly from a service’s metrics on request.',
    outcome:
      'setup dropped from days to minutes, and the project took Runner-Up at a company-wide hackathon.',
    stack: ['LLM Tooling', 'New Relic API', 'Python'],
    metric: {
      before: 'Days',
      after: 'Minutes',
      desc: 'to stand up dashboards and alerts for a new service',
    },
  },
  {
    tags: 'Distributed Systems · Graph Engine · 2022–2024',
    title: 'Loan Decisioning Graph Engine',
    problem:
      'the core decisioning engine ran single-threaded, making it the bottleneck as application volume grew.',
    role:
      'refactored execution into a multi-threaded worker pool — a 50% latency cut — and built the graph-authoring UI engineers still use today.',
    outcome:
      'the platform orchestrates ~1,000-node DAGs across six microservices with zero execution failures.',
    stack: ['Java', 'Angular', 'Gremlin', 'Concurrency'],
    metric: {
      value: 80,
      suffix: 'K+',
      desc: 'loan applications decisioned per day on the platform',
    },
  },
];

export default function Work() {
  return (
    <section className={`wrap ${styles.work}`} id="work">
      <Reveal className={styles.sectionLabel}>
        <h2 className={styles.sectionTitle}>Selected Work</h2>
        <span className={styles.sectionNote}>Three case studies, not fifteen bullet points</span>
      </Reveal>

      {CASE_STUDIES.map((item, index) => (
        <Reveal key={item.title} className={styles.case} delay={index === 0 ? 0 : 1}>
          <div>
            <p className={styles.tags}>{item.tags}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.line}>
              <strong>Problem:</strong> {item.problem}
            </p>
            <p className={styles.line}>
              <strong>My role:</strong> {item.role}
            </p>
            <p className={styles.line}>
              <strong>Outcome:</strong> {item.outcome}
            </p>
            <div className={styles.stack}>
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.metric}>
            {item.metric.before ? (
              <MetricShift before={item.metric.before} after={item.metric.after} />
            ) : (
              <Metric
                className={styles.metricNum}
                value={item.metric.value}
                suffix={item.metric.suffix}
              />
            )}
            <p className={styles.metricDesc}>{item.metric.desc}</p>
          </div>
        </Reveal>
      ))}

      <Ticker />
    </section>
  );
}
