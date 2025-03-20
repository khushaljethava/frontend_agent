import * as React from 'react';
import { Container, Paper, Typography } from '@mui/material';

interface PageContainerProps {
  title: string;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        {children}
      </Paper>
    </Container>
  );
};

export default PageContainer; 