// app/Blog/blogs/loading.js

import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Loading() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #f9f3fe 0%, #e8e0ff 100%)'
      }}
    >
      <CircularProgress sx={{ color: '#49326b' }} />
      <Typography sx={{ mt: 2, color: '#49326b', fontWeight: 'bold' }}>
        Loading Blogs...
      </Typography>
    </Box>
  );
}