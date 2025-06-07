import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

// Import the client component you just made
import BlogsClient from './BlogsClient';

// This is a simple, good-looking loading component that will be shown
// while the main blog component loads on the client.
function LoadingFallback() {
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

// This is your new page. It's a Server Component by default.
// Its only job is to provide the Suspense boundary.
export default function BlogsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BlogsClient />
    </Suspense>
  );
}