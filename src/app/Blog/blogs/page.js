"use client"; // <-- This is the most important change

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { defaultCards } from "../../components/details/DefaultCard"; 
import { slugify } from '../../../utils/slugify'; 

export default function BlogRedirectClientPage() {
  const router = useRouter();

  useEffect(() => {
    if (defaultCards && defaultCards.length > 0) {
      const firstBlogSlug = slugify(defaultCards[0].title);
      
      router.push(`/Blog/${firstBlogSlug}`);
    } else {
      router.push('/Blog');
    }
  }, [router]); 

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '90vh', 
        backgroundColor:'#fff'
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}