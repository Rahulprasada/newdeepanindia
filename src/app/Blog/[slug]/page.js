// src/app/Blog/[slug]/page.js

import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { slugify } from '../../../utils/slugify';
import { defaultCards } from '../../components/details/DefaultCard';
import BlogDetailClient from './BlogsClient'; 
import schema from '../../../lib/schema'; // Correctly import from one place

// --- IMPORTANT: ADD generateMetadata FOR SEO ---
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogData = defaultCards.find(post => slugify(post.title) === slug);

  if (!blogData) {
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  return {
    title: blogData.title,
    description: blogData.metaDescription?.replace(/<[^>]+>/g, ""),
    alternates: {
      canonical: `https://deepanindia.com/Blog/${slug}`,
    },
  };
}

// Loading component remains the same.
function LoadingFallback() {
  // ... your LoadingFallback component is fine
}

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  // Find the blog data
  const blogData = defaultCards.find(
    (post) => slugify(post.title) === slug
  );

  if (!blogData) {
    // You can return a proper 404 page here using notFound() from next/navigation
    return <div>Blog not found</div>;
  }
  
  // Assuming blogData.image is a relative path like '/images/my-image.png'
  const absoluteImageUrl = `https://deepanindia.com${blogData.image?.src || ''}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://deepanindia.com/Blog/${slug}`,
    },
    headline: blogData.title,
    description: blogData.metaDescription?.replace(/<[^>]+>/g, ""),
    // --- FIX #1: Use 'image' (lowercase) and an absolute URL ---
    image: absoluteImageUrl, 
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
    // --- BEST PRACTICE: Add dates ---
    datePublished: blogData.datePublished, // e.g., "2023-10-26"
    dateModified: blogData.dateModified,   // e.g., "2023-10-27"
  };

  return (
    <>
      {/* Script for the Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema.organization),
        }}
      />
      {/* Script for the specific Blog Post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <Suspense fallback={<LoadingFallback />}>
        <BlogDetailClient currentSlug={slug} />
      </Suspense>
    </>
  );
}

// This function is excellent, keep it as is.
export async function generateStaticParams() {
  return defaultCards.map((post) => ({
    slug: slugify(post.title),
  }));
}