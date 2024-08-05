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

const skills = [
  'Springboot', 'Java', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Gremlin',
  'REST API', 'Angular', 'PgAdmin', 'AWS',
];

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
            <Link href="https://www.dealernavigator.com/dashboard" target="_blank">
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h6"
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
                    Software Engineer · Capital One
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
                  </Typography>
                  <Typography
                    variant="body2"
                    className="bright-text"
                    sx={{
                      fontStyle: 'italic',
                      fontSize: {
                        xs: '12px',
                        sm: '12px',
                        md: '14px',
                        lg: '14px',
                        xl: '16px',
                      },
                    }}
                  >
                    JAN 2024 — PRESENT
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    className="bright-text"
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                    paragraph
                  >
                    Developed and deployed a micro-frontend (MFE) on the Capital One Dealer Navigator page, managing over 1 million views per month. Implemented intricate backend-for-frontend (BFF) logic to deliver dynamic marketing messaging, informing dealers about their benefits and motivating them to achieve their contract goals. Enhanced dealership awareness of their benefits by more than 10 times through the benefits MFE, leading to an increase in contracts funded through Capital One.
                  </Typography>
                  <ChipContainer>
                    <Chip className={styles.chip} label="Springboot" variant="outlined" />
                    <Chip className={styles.chip} label="Java" variant="outlined" />
                    <Chip className={styles.chip} label="JavaScript" variant="outlined" />
                    <Chip className={styles.chip} label="TypeScript" variant="outlined" />
                    <Chip className={styles.chip} label="Salesforce" variant="outlined" />
                  </ChipContainer>
                </CardContent>
              </StyledCard>
            </Link>
            <Link href="https://www.capitalone.com/" target="_blank">
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h6"
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
                    Associate Software Engineer · Capital One
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
                  </Typography>
                  <Typography
                    variant="body2"
                    className="bright-text"
                    sx={{
                      fontStyle: 'italic',
                      fontSize: {
                        xs: '12px',
                        sm: '12px',
                        md: '14px',
                        lg: '14px',
                        xl: '16px',
                      },
                    }}
                  >
                    AUG 2022 — DEC 2023
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    className="bright-text"
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                    paragraph
                  >
                    Enabled the transition of the car loan decisioning system from a code-based to a graph orchestration framework, streamlining graph construction and enhancing efficiency. Improved system performance through parallel thread execution, significantly reducing execution time, and developed a visual graph representation using Angular and JavaScript to enhance accessibility for non-technical users. Engineered a high-performance execution engine and led the development of critical components, significantly advancing the overall success of the initiative.
                  </Typography>
                  <ChipContainer>
                    {skills.map((skill) => (
                      <Chip key={skill} label={skill} variant="outlined" className={styles.chip} />
                    ))}
                  </ChipContainer>
                </CardContent>
              </StyledCard>
            </Link>
            <Link href="https://www.uspto.gov/patents" target="_blank">
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h6"
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
                    Patents · Capital One
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
                  </Typography>
                  <br />
                  <Typography
                    className="bright-text"
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                    variant="body2"
                    paragraph
                  >
                    Filed a patent for an innovative SQL Query Combiner, enhancing database querying capabilities.
                  </Typography>
                  <Typography
                    className="bright-text"
                    sx={{
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '18px',
                        xl: '20px',
                      },
                    }}
                    variant="body2"
                    paragraph
                  >
                    Filed a patent for a custom Direct-Acylic-Graph (DAG) grouping algorithm, enhancing user experience for viewing complex graphs.
                  </Typography>
                  <ChipContainer>
                    <Chip className={styles.chip} label="SQL" variant="outlined" />
                    <Chip className={styles.chip} label="Graphs" variant="outlined" />
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
                </Typography>
              </Link>
            </Box>
          </ExperienceContainer>
        </Box>
      </Container>
    </>
  );
}
