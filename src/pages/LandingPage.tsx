import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Fade,
  Stack,
  Avatar,
  Rating,
} from '@mui/material';
import {
  Gavel as GavelIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  AutoGraph as AutoGraphIcon,
  Psychology as PsychologyIcon,
  CloudDone as CloudDoneIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <GavelIcon sx={{ fontSize: 40 }} />,
    title: 'Legal Document Analysis',
    description: 'Advanced AI-powered analysis of legal documents with comprehensive insights and recommendations.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Fast Processing',
    description: 'Quick document processing and analysis, saving valuable time for legal professionals.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Secure & Private',
    description: 'Enterprise-grade security ensuring your legal documents remain confidential and protected.',
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    title: 'Detailed Analytics',
    description: 'Comprehensive analytics and reporting tools for better decision-making.',
  },
];

const stats = [
  { value: '99%', label: 'Accuracy Rate' },
  { value: '10x', label: 'Faster Analysis' },
  { value: '50k+', label: 'Documents Processed' },
  { value: '1000+', label: 'Law Firms Trust Us' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Partner, Johnson & Associates',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'This AI platform has revolutionized how we handle document analysis. It\'s incredibly accurate and saves us countless hours.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Legal Director, Tech Solutions Inc.',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: 'The insights provided by this platform are invaluable. It\'s like having an expert legal analyst available 24/7.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Corporate Counsel',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Exceptional tool for legal professionals. The accuracy and speed of analysis are unmatched in the industry.',
    rating: 5,
  },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 3,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    Transform Your Legal Practice with AI
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      opacity: 0.9,
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    Harness the power of artificial intelligence to streamline your legal document analysis,
                    reduce manual work by 90%, and make data-driven decisions with unparalleled accuracy.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={() => navigate('/register')}
                      sx={{
                        py: 2,
                        px: 4,
                        fontSize: '1.1rem',
                      }}
                    >
                      Start Free Trial
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="large"
                      onClick={() => navigate('/login')}
                      sx={{
                        py: 2,
                        px: 4,
                        fontSize: '1.1rem',
                        borderColor: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -40,
                      right: -40,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -20,
                      left: -20,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Legal AI Platform"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '24px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>

        {/* Stats Section */}
        <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 4,
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 800,
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 6, md: 8 },
            fontSize: { xs: '2rem', md: '2.75rem' },
          }}
        >
          Powerful Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      margin: '0 auto',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ flex: 1 }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: theme.palette.grey[50], py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 6, md: 8 },
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}
          >
            What Our Clients Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Fade
                key={index}
                in={activeTestimonial === index}
                timeout={500}
                style={{
                  display: activeTestimonial === index ? 'block' : 'none',
                }}
              >
                <Grid item xs={12} md={8}>
                  <Card sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
                      />
                      <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: '1.25rem',
                          fontStyle: 'italic',
                          mb: 3,
                          color: 'text.secondary',
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Fade>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} textAlign="center">
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  mb: 3,
                }}
              >
                Ready to Transform Your Legal Practice?
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
              >
                Join thousands of legal professionals who are already using our platform.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/register')}
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: '1.1rem',
                }}
              >
                Start Your Free Trial Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;