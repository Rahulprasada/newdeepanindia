// src/app/Blog/[slug]/page.js

import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { slugify } from '../../../utils/slugify'; // Adjust path
import { defaultCards } from '../../components/details/DefaultCard'; // Adjust path

// This client component will now do the heavy lifting.
import BlogDetailClient from './BlogsClient'; 
import schema from '../../../lib/schema';

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


export default function BlogDetailPage({ params }) {
  const currentSlug = params // e.g., "what-to-do-after-b-com"

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema?.organization),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://deepanindia.com/Blog/${currentSlug}}`,
          },
          headline: currentSlug.title,
          description: currentSlug.metaDescription?.replace(/<[^>]+>/g, ""),
          image: `${currentSlug.Image}`,
          author: {
            "@type": "Organization",
            name: "Deepan India",
          },
          publisher: {
            "@type": "Organization",
            name: "Deepan India",
            logo: {
              "@type": "ImageObject",
              url: "https://deepanindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEditedLogo-removebg-preview.35b1ca45.png&w=1920&q=75",
            },
          },
        }),
      }}
    />
  <BlogDetailClient currentSlug={currentSlug} />
  </>
  );
}

export async function generateStaticParams() {
  return defaultCards.map((post) => ({
    slug: slugify(post.title),
  }));
}      