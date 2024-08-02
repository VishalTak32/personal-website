import Head from 'next/head';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import Sidebar from './sidebar'; // Adjust the path as necessary
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6],
  },
  textAlign: 'left',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
  textAlign: 'center',
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

export default function Resume() {
  const [activeSection, setActiveSection] = useState('education');

  const renderContent = (section) => {
    switch (section) {
      case 'education':
        return (
          <Box>
            <SectionTitle variant="h4">Education</SectionTitle>
            <CardContainer>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="body1" align='center'>School</Typography>
                  <Typography variant="body1">The University of Texas at Austin - Austin, TX</Typography>
                </CardContent>
              </StyledCard>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="body1" align='center'>Degree</Typography>
                  <Typography variant="body1">Bachelor of Science in Computer Science</Typography>
                </CardContent>
              </StyledCard>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="body1" align='center'>Courses</Typography>
                  <Typography variant="body2">Data Structures, Software Engineering, Artificial Intelligence, Operating Systems, Algorithms</Typography>
                </CardContent>
              </StyledCard>
            </CardContainer>
          </Box>
        );
      case 'skills':
        return (
          <Box>
            <SectionTitle variant="h4">Skills</SectionTitle>
            <CardContainer>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="body1" align='center'>Languages</Typography>
                  <Typography variant="body1">Python, Java, C/C++, R, HTML/CSS, JavaScript/TypeScript, Gremlin</Typography>
                </CardContent>
              </StyledCard>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="body1" align='center'>Technologies</Typography>
                  <Typography variant="body1">SpringBoot, REST API, GitHub, Docker, PgAdmin, AWS, GCP, Flask, Postman</Typography>
                </CardContent>
              </StyledCard>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="body1" align='center'>Certifications</Typography>
                  <Typography variant="body2">AWS Solutions Architect, CSSE Associate and Professional</Typography>
                </CardContent>
              </StyledCard>
            </CardContainer>
          </Box>
        );
      case 'experience':
        return (

          <Box>
            <SectionTitle variant="h4">Experience</SectionTitle>
            <CardContainer>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                <Typography variant="body1" align='center'>Capital One - Plano, TX</Typography>
                <Typography variant="body2">Associate Software Engineer - August 2022 - Present</Typography>
              <Typography variant="body2">- Collaborated on a pivotal initiative to transition a code-based decisioning system for car loans into an advanced graph orchestration framework.</Typography>
              <Typography variant="body2">- Spearheaded the authoring component, optimizing graph structure by implementing an algorithm that reduced connection-building time by 10%, streamlining the graph's creation process.</Typography>
              <Typography variant="body2">- Introduced parallel thread execution using the Java concurrency library, achieving a 50% reduction in execution time and significantly enhancing system performance.</Typography>
              <Typography variant="body2">- Conceptualized and implemented a visual representation of the graph using Angular and JavaScript, enhancing system understandability for non-technical audiences.</Typography>
              <Typography variant="body2">- Engineered a high-performance execution engine, ensuring efficient traversal and execution of complex decisioning structures. Identified and resolved node execution errors, enabling the successful execution of ~1000 nodes.</Typography>
              <Typography variant="body2">- Demonstrated technical leadership by driving the development of critical components, contributing to the overall success of the graph orchestration initiative.</Typography>
                </CardContent>
              </StyledCard>
              <StyledCard sx={{ flex: 1 }}>
                <CardContent>
                <Typography variant="body1" align='center'>ShopLC - Austin, TX</Typography>
                  <Typography variant="body2">Machine Learning Engineer Intern - July 2020 - May 2021</Typography>
              <Typography variant="body2">- Analyzed machine learning models to predict inventory costs and profits using Python, resulting in significant improvement in inventory management.</Typography>
              <Typography variant="body2">- Developed classification models using Python to predict customer mediums of sales to improve marketing strategies.</Typography>
              <Typography variant="body2">- Achieved 50% improvement in model training and prediction time through utilizing Python’s multiprocessing library.</Typography>
                </CardContent>
              </StyledCard>
            </CardContainer>
          </Box>
        );
      case 'projects':
        return (
          <Box>
             <SectionTitle variant="h4">Projects</SectionTitle>
            <StyledCard>
              <CardContent>
                <Typography variant="body1" align='center'>RENUW</Typography>
                <Typography variant="body2">- Contributed to developing a new and innovative graph-based car loan decisioning system, leveraging an array of cutting-edge technologies such as Java SpringBoot, AWS, Angular, JavaScript, and Gremlin.</Typography>
                <Typography variant="body2">- Led and presented in discussions around work on authoring and execution to business stakeholders, ensuring alignment with project goals.</Typography>
                <Typography variant="body2">- Implemented comprehensive unit testing, ensuring the reliability and robustness of the authoring and execution components. Utilized the Spock unit testing framework to conduct thorough tests, enhancing code quality and identifying potential issues early in the development lifecycle.</Typography>
              </CardContent>
            </StyledCard>
          </Box>
        );
      case 'leadership':
        return (
          <Box>
             <SectionTitle variant="h4">Volunteering</SectionTitle>
            <StyledCard>
              <CardContent>
                <Typography variant="body1" align='center'>CODERS - Plano, TX</Typography>
                <Typography variant="body2">- Volunteered with Coders to mentor middle school students in a 12-week course on HTML and CSS.</Typography>
                <Typography variant="body2">- Guided students through hands-on projects, empowering them to create their own websites independently.</Typography>
                <Typography variant="body2">- Contributed to community development by imparting essential coding skills to the next generation.</Typography>
              </CardContent>
            </StyledCard>
          </Box>
        );
      default:
        return <StyledCard id="education"> {/* Default content if necessary */} </StyledCard>;
    }
  };

  return (
    <>
      <Head>
        <title>Work - Vishal Tak</title>
        <meta name="description" content="Vishal Tak's resume" />
      </Head>
      <Sidebar onSectionSelect={setActiveSection} />
      <Container
        sx={{
          paddingTop: '30px', // Adjust this value based on the height of the AppBar
        }}
      >
        {renderContent(activeSection)}
      </Container>
    </>
  );
}
