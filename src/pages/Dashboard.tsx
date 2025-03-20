import * as React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Description as DocumentIcon,
  Gavel as AnalysisIcon,
  Assessment as ReportIcon,
  TrendingUp as TrendingIcon,
} from '@mui/icons-material';
import PageContainer from '../components/PageContainer';

const stats = [
  {
    title: 'Total Documents',
    value: '156',
    icon: <DocumentIcon sx={{ fontSize: 40 }} />,
    color: '#1976d2',
  },
  {
    title: 'Analyses Completed',
    value: '89',
    icon: <AnalysisIcon sx={{ fontSize: 40 }} />,
    color: '#9c27b0',
  },
  {
    title: 'Reports Generated',
    value: '23',
    icon: <ReportIcon sx={{ fontSize: 40 }} />,
    color: '#2e7d32',
  },
  {
    title: 'Success Rate',
    value: '98%',
    icon: <TrendingIcon sx={{ fontSize: 40 }} />,
    color: '#ed6c02',
  },
];

const recentActivities = [
  {
    title: 'Contract Analysis Completed',
    description: 'Commercial Lease Agreement - 15 pages',
    time: '2 hours ago',
    icon: <AnalysisIcon />,
  },
  {
    title: 'New Document Uploaded',
    description: 'Employment Contract.pdf',
    time: '4 hours ago',
    icon: <DocumentIcon />,
  },
  {
    title: 'Report Generated',
    description: 'Monthly Legal Analysis Report',
    time: '1 day ago',
    icon: <ReportIcon />,
  },
];

const Dashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <PageContainer title="Dashboard">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome back, John
        </Typography>
        <Typography color="text.secondary">
          Here's what's happening with your legal documents today.
        </Typography>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: stat.color,
                      mr: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h6" component="h2">
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activities */}
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Recent Activities
          </Typography>
          <List>
            {recentActivities.map((activity, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {activity.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={activity.title}
                    secondary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          {activity.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                {index < recentActivities.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default Dashboard; 