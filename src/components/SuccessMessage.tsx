import * as React from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';

interface SuccessMessageProps {
  title?: string;
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ title = 'Success', message }) => {
  return (
    <Box sx={{ my: 2 }}>
      <Alert severity="success">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
};

export default SuccessMessage; 