// src/app/Blog/[slug]/page.js

import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { slugify } from '../../../utils/slugify'; // Adjust path
import { defaultCards } from '../../components/details/DefaultCard'; // Adjust path

// This client component will now do the heavy lifting.
import BlogDetailClient from './BlogsClient'; 

// Loading component remains the same.
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
        Loading Blog...
      </Typography>
    </Box>
  );
}


// This Server Component gets the slug from the URL `params`
// and passes it down to the client component.
export default function BlogDetailPage({ params }) {
  const { slug } = params; // e.g., "what-to-do-after-b-com"

  return (
    <Suspense fallback={<LoadingFallback />}>
      <BlogDetailClient currentSlug={slug} />
    </Suspense>
  );
}

// Function to generate static paths for all your blogs
// This is great for performance and SEO!
export async function generateStaticParams() {
  return defaultCards.map((post) => ({
    slug: slugify(post.title),
  }));
}