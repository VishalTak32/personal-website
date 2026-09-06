import NodeField from './NodeField';
import Reveal from './Reveal';
import Metric from './Metric';
import MetricShift from './MetricShift';
import Ticker from './Ticker';
import styles from '../styles/Work.module.css';

const CASE_STUDIES = [
  {
    year: '2026',
    title: 'Approval Workflow Platform',
    problem:
      'approvals across sales teams were scattered through email and Slack threads, with no audit trail or status visibility.',
    role:
      'architected and built the event-driven approval microservice end to end. Schema, state machine, and rollout.',
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
    year: '2026',
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
    year: '2022-2024',
    title: 'Loan Decisioning Graph Engine',
    problem:
      'the core decisioning engine ran single-threaded, making it the bottleneck as application volume grew.',
    role:
      'refactored execution into a multi-threaded worker pool, a 50% latency cut, and built the graph-authoring UI engineers still use today.',
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

/**
 * The three case studies are a sticky stack: each one pins under the nav and
 * the next slides over it. Three dense blocks read as a wall when they scroll
 * past together, and pinning gives each one the viewport to itself without
 * hijacking the scrollbar or costing the visitor any extra distance.
 *
 * Cards below 760px fall back to plain flow (see the stylesheet) because
 * stacking full-height cards on a phone hides more than it frames.
 */
export default function Work() {
  return (
    <section className={`wrap ${styles.work}`} id="work">
      {/* Below 1120px the page-wide field has no margins to live in, so it
          runs here instead. First child, so it paints behind the content. */}
      <NodeField inline />

      <Reveal className={styles.head}>
        <h2 className={styles.sectionTitle}>Selected Work</h2>
      </Reveal>

      <div className={styles.stack}>
        {CASE_STUDIES.map((item) => (
          <article key={item.title} className={styles.case}>
            <div>
              <div className={styles.caseTop}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.year}>{item.year}</span>
              </div>

              <p className={styles.line}>
                <strong>Problem:</strong> {item.problem}
              </p>
              <p className={styles.line}>
                <strong>My role:</strong> {item.role}
              </p>
              <p className={styles.line}>
                <strong>Outcome:</strong> {item.outcome}
              </p>

              <div className={styles.stackTags}>
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
          </article>
        ))}
      </div>

      <Ticker />
    </section>
  );
}
