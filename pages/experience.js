import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import styles from '../styles/Experience.module.css';
import Image from 'next/image';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6],
    '& .bright-text': {
      color: '#ffffff',
    },
  },
  textAlign: 'left',
  backgroundColor: '#1a1a1a', // Adjust this to your color scheme
  color: '#ffffff',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
  borderRadius: '10px',
}));

const ExperienceContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ChipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const roleTitleSx = {
  color: (theme) => `${theme.palette.primary.main} !important`,
  fontWeight: 'bold',
  fontSize: {
    xs: '16px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
  },
};

const roleDateSx = {
  fontStyle: 'italic',
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '14px',
    lg: '14px',
    xl: '16px',
  },
};

const bulletListSx = {
  margin: 0,
  paddingLeft: '20px',
};

const bulletItemSx = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  marginBottom: '8px',
};

const patentTextSx = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
};

const linkIcon = (
  <Image
    src="/link.png"
    alt="Link Icon"
    width={20}
    height={20}
    style={{
      marginLeft: '8px',
      width: '1em',
      height: '1em',
    }}
  />
);

const associateSkills = ['Angular', 'TypeScript', 'Gremlin (Graph DB)', 'REST API', 'PgAdmin'];

export default function Experience() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          padding: '20px',
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            gutterBottom
            sx={{
              fontSize: {
                xs: '16px',
                sm: '18px',
                md: '18px',
                lg: '20px',
                xl: '22px',
              },
            }}
          >
            Experience
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 3,
            maxWidth: { xs: '100%', sm: '800px' },
          }}
        >
          <ExperienceContainer>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={roleTitleSx}>
                  Senior Software Engineer · Capital One
                </Typography>
                <Typography variant="body2" className="bright-text" sx={roleDateSx}>
                  JAN 2026 — PRESENT
                </Typography>
                <br />
                <Box component="ul" className="bright-text" sx={bulletListSx}>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Architected an event-driven approval microservice (Spring Boot, PostgreSQL, AWS Fargate) that centralized 100+ approvals/day across 300+ users, replacing a fragmented email/Slack process.
                  </Typography>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Identified and fixed a state-management bug in core exception-limit logic that let users bypass usage lockouts, restoring correct enforcement in production with zero regressions.
                  </Typography>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Built an AI-driven observability workflow that auto-generates monitoring dashboards and alerts, cutting metric setup time from days to minutes; earned Runner-Up at a company-wide hackathon.
                  </Typography>
                </Box>
                <ChipContainer>
                  <Chip className={styles.chip} label="Spring Boot" variant="outlined" />
                  <Chip className={styles.chip} label="Java" variant="outlined" />
                  <Chip className={styles.chip} label="AWS Fargate" variant="outlined" />
                  <Chip className={styles.chip} label="PostgreSQL" variant="outlined" />
                  <Chip className={styles.chip} label="System Design" variant="outlined" />
                </ChipContainer>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={roleTitleSx}>
                  Software Engineer · Capital One
                </Typography>
                <Typography variant="body2" className="bright-text" sx={roleDateSx}>
                  JAN 2024 — JAN 2026
                </Typography>
                <br />
                <Box component="ul" className="bright-text" sx={bulletListSx}>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Developed a micro-frontend serving 1M+ views/month, with backend-for-frontend logic that increased dealer awareness of available benefits 8x and drove additional contracts funded.
                  </Typography>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Led the cross-team design and delivery of a new dealer-incentive compensation platform, increasing partner payouts and loan volume network-wide.
                  </Typography>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Built a production AWS Spring Batch pipeline (job queues, EventBridge, retry logic, Splunk alerting) automating monthly compensation calculations end-to-end.
                  </Typography>
                </Box>
                <ChipContainer>
                  <Chip className={styles.chip} label="TypeScript" variant="outlined" />
                  <Chip className={styles.chip} label="JavaScript" variant="outlined" />
                  <Chip className={styles.chip} label="AWS Batch" variant="outlined" />
                  <Chip className={styles.chip} label="Salesforce" variant="outlined" />
                  <Chip className={styles.chip} label="EventBridge" variant="outlined" />
                </ChipContainer>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={roleTitleSx}>
                  Associate Software Engineer · Capital One
                </Typography>
                <Typography variant="body2" className="bright-text" sx={roleDateSx}>
                  AUG 2022 — JAN 2024
                </Typography>
                <br />
                <Box component="ul" className="bright-text" sx={bulletListSx}>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Cut decisioning-engine execution latency 50% by refactoring single-threaded graph processing into a multi-threaded worker pool (Java ExecutorService, CompletableFuture).
                  </Typography>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Built the graph-authoring and simulation UI on a stack new to me — Angular/TypeScript over a graph database — with topological sorting to structure execution.
                  </Typography>
                  <Typography component="li" variant="body2" className="bright-text" sx={bulletItemSx}>
                    Implemented the core graph-authoring engine (recursive node/edge construction + topological sort) that remains a foundational building block of the platform today.
                  </Typography>
                </Box>
                <ChipContainer>
                  {associateSkills.map((skill) => (
                    <Chip key={skill} label={skill} variant="outlined" className={styles.chip} />
                  ))}
                </ChipContainer>
              </CardContent>
            </StyledCard>
            <Link href="https://patents.google.com/patent/US12536176B2" target="_blank" rel="noopener noreferrer">
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" sx={roleTitleSx}>
                    Patents · Capital One
                    {linkIcon}
                  </Typography>
                  <br />
                  <Typography className="bright-text" sx={patentTextSx} variant="body2" paragraph>
                    Granted a U.S. patent for an innovative SQL Query Combiner, enhancing database querying capabilities.
                  </Typography>
                  <Typography className="bright-text" sx={patentTextSx} variant="body2" paragraph>
                    Filed a patent application for a custom Directed Acyclic Graph (DAG) grouping algorithm, enhancing user experience for viewing complex graphs.
                  </Typography>
                  <ChipContainer>
                    <Chip className={styles.chip} label="SQL" variant="outlined" />
                    <Chip className={styles.chip} label="Graph Algorithms" variant="outlined" />
                  </ChipContainer>
                </CardContent>
              </StyledCard>
            </Link>
            <Box className={styles.linkBox}>
              <Link
                className={styles.link}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="h7"
                  sx={{
                    color: (theme) => `${theme.palette.primary.main} !important`,
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '16px',
                      sm: '16px',
                      md: '18px',
                      lg: '20px',
                      xl: '22px',
                    },
                  }}
                >
                  View Full Résumé
                  {linkIcon}
                </Typography>
              </Link>
            </Box>
          </ExperienceContainer>
        </Box>
      </Container>
    </>
  );
}
