import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  LinearProgress,
  useTheme,
} from '@mui/material';
import {
  Gavel as GavelIcon,
  Description as DocumentIcon,
  Assessment as AssessmentIcon,
  Timeline as TimelineIcon,
  Warning as WarningIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';
import PageContainer from '../components/PageContainer';

interface AnalysisResult {
  id: string;
  title: string;
  document: string;
  date: string;
  status: 'pending' | 'completed' | 'error';
  progress: number;
  keyFindings: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

const mockResults: AnalysisResult[] = [
  {
    id: '1',
    title: 'Contract Analysis - Commercial Lease',
    document: 'Commercial_Lease_Agreement.pdf',
    date: '2024-02-20',
    status: 'completed',
    progress: 100,
    keyFindings: [
      'Standard lease terms identified',
      'No unusual clauses detected',
      'Standard security deposit requirements',
    ],
    riskLevel: 'low',
  },
  {
    id: '2',
    title: 'Employment Contract Review',
    document: 'Employment_Contract.pdf',
    date: '2024-02-19',
    status: 'completed',
    progress: 100,
    keyFindings: [
      'Non-compete clause present',
      'Standard benefits package',
      'Standard termination terms',
    ],
    riskLevel: 'medium',
  },
  {
    id: '3',
    title: 'Merger Agreement Analysis',
    document: 'Merger_Agreement.pdf',
    date: '2024-02-18',
    status: 'pending',
    progress: 65,
    keyFindings: [
      'Complex ownership structure',
      'Multiple conditions precedent',
      'Detailed transition plan',
    ],
    riskLevel: 'high',
  },
];

const CaseAnalysis: React.FC = () => {
  const theme = useTheme();

  const getRiskColor = (risk: AnalysisResult['riskLevel']) => {
    switch (risk) {
      case 'low':
        return 'success';
      case 'medium':
        return 'warning';
      case 'high':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: AnalysisResult['status']) => {
    switch (status) {
      case 'completed':
        return <CheckIcon color="success" />;
      case 'pending':
        return <TimelineIcon color="primary" />;
      case 'error':
        return <WarningIcon color="error" />;
      default:
        return <DocumentIcon />;
    }
  };

  return (
    <PageContainer title="Case Analysis">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h2">
                  Case Analysis Dashboard
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<GavelIcon />}
                  onClick={() => {/* Handle new analysis */}}
                >
                  New Analysis
                </Button>
              </Box>

              <List>
                {mockResults.map((result, index) => (
                  <React.Fragment key={result.id}>
                    <ListItem
                      sx={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        py: 3,
                      }}
                    >
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <ListItemIcon>
                            {getStatusIcon(result.status)}
                          </ListItemIcon>
                          <ListItemText
                            primary={result.title}
                            secondary={`Document: ${result.document} • Date: ${result.date}`}
                          />
                        </Box>
                        <Chip
                          label={result.riskLevel.toUpperCase()}
                          color={getRiskColor(result.riskLevel)}
                          size="small"
                        />
                      </Box>

                      {result.status === 'pending' && (
                        <Box sx={{ width: '100%', mb: 2 }}>
                          <LinearProgress
                            variant="determinate"
                            value={result.progress}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            Analysis in progress: {result.progress}%
                          </Typography>
                        </Box>
                      )}

                      <Box sx={{ width: '100%', mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Key Findings:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {result.keyFindings.map((finding, idx) => (
                            <Chip
                              key={idx}
                              label={finding}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </Box>

                      <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<AssessmentIcon />}
                          onClick={() => {/* Handle view details */}}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<DocumentIcon />}
                          onClick={() => {/* Handle download report */}}
                        >
                          Download Report
                        </Button>
                      </Box>
                    </ListItem>
                    {index < mockResults.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CaseAnalysis; 