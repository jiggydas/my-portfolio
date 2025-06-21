import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PageTransition from '../components/PageTransition';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'Oracle',
    period: '13 Jan 2025 - Present',
    description: [
      "Designed and implemented View CRUDL and RBAC APIs for Oracle's Intelligent Data Lake platform, delivering specifications, backend logic and comprehensive test coverage for successful release in LA+1 milestone.",
      "Implemented multi-part uploads, large-scale paginated operations, and assert-free resource cleanup to optimize performance and test reliability.",
      "Led E2E testing and deployment efforts across INTEG, DEMO, and PREPROD environments; diagnosed and resolved production issues using log analysis and system monitorin.",
      "Strengthened platform security and observability by enabling Fortify scans, SLAPS SCA container usage, and custom alarms for Intelligent Data Lake metrics.",
    ],
  },
  {
    title: 'Software Engineer',
    company: 'GE Vernova',
    period: '15 Feb 2021 - 08 Jan 2025',
    description: [
      'Built and modernized enterprise-grade web applications using Angular, Java, Spring Boot, reducing page load times by 30%.',
      'Developed cloud-agnostic microservices with Python/Flask to abstract integrations with RabbitMQ and Git, ensuring platform independence.',
      'Implemented Test-Driven Development (TDD) practices, resulting in a 30% decrease in production defects.',
      'Enhanced transactional performance with Hibernate, reducing backend processing time and improving system throughput.',
      'Drove cloud migration of critical applications from Cloud Foundry to AWS EKS, ensuring scalable, secure, and fault-tolerant architecture.',
      'Containerized services using Docker & Kubernetes, implemented HPA/KEDA autoscaling, and streamlined GitOps deployments using ArgoCD.',
    ],
  },
  {
    title: 'Digital Technology Co-Op',
    company: 'GE HealthCare',
    period: '01 Sep 2020 - 31 Jan 2021',
    description: [
      'Developed a Salesforce-based training portal using Aura Components, JavaScript, and Apex that improved team onboarding and productivity.',
      'Contributed to UI enhancements using AngularJS, including theme-switching capabilities to improve UX.',
    ],
  },
  {
    title: 'Digital Technology Intern',
    company: 'GE HealthCare',
    period: '06 Jan 2020 - 31 Aug 2020',
    description: [
      'Delivered front-end features and enhancements for customer-facing applications',
      'Trained in Salesforce Cloud platform.',
    ],
  },
  {
    title: 'Software Development Intern',
    company: 'BringMyFood',
    period: '01 Jun 2019 - 30 Jun 2019',
    description: [
      'Created a React Native Android application for delivery agents', 
      'Implemented backend using PHP and MySQL to track delivery status and reduce manual overhead.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <PageTransition>
      <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
            <Typography variant="h4" component="h1">
              My Professional Journey &amp; Growth
            </Typography>
            <Button
              variant="outlined"
              startIcon={<OpenInNewIcon />}
              href="https://drive.google.com/file/d/1xqD1JOKzpSaZ6soQiTrT9bSbABwPzHwg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: 'none' }}
            >
              Get my Resume
            </Button>
          </Box>
          <Box sx={{ mt: 4 }}>
            {experiences.map((exp, index) => (
              <Box key={index} sx={{ mb: 4, position: 'relative' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'background.paper',
                      flexShrink: 0,
                    }}
                  >
                    <WorkIcon />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 2 }}
                    >
                      {exp.period}
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                      {exp.description.map((point, i) => (
                        <ListItem key={i} sx={{ p: 0, alignItems: 'flex-start' }}>
                          <ListItemIcon sx={{ minWidth: 20 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 8, color: 'text.secondary', mt: 0.9 }} />
                          </ListItemIcon>
                          <ListItemText primary={point} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
                {index < experiences.length - 1 && (
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      left: 20,
                      top: 60,
                      bottom: -32,
                      width: 2,
                      bgcolor: 'divider',
                    }} 
                  />
                )}
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </PageTransition>
  );
};

export default Experience; 