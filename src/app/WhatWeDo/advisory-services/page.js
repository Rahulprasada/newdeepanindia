"use client";

import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { keyframes } from '@mui/system'; // Correct import for MUI keyframes
import Image from "next/image"; // Use Next.js Image for optimization
import GetMoreButton from "../../Button/GetMoreButton";

// Import images directly for Next.js Image component
import financial1 from "../../../assets/14-removebg-preview.png";
import financial2 from "../../../assets/15-removebg-preview.png";
import financial3 from "../../../assets/16-removebg-preview.png";
import financial4 from "../../../assets/17-removebg-preview.png";

// Define keyframes using MUI's utility
const imageFloat = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const fadeIn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const AdvisoryService = ({ serviceName }) => {
  const advisory = [
    {
      title: "Short & Medium-Term Stock Bags",
      subtitle: "SIP & Lumpsum options from ₹5,000 to ₹50,000.",
      description: "Actively managed with averaging & timely churning.",
      audience: "Ideal for beginners and progressive investors.",
      img: financial1,
      alt: "Stock bag with multiple logos and a SIP chart.",
    },
    {
      title: "Long-Term Stock Bags for HNIs",
      subtitle: "Starting from ₹1,00,000 to any amount.",
      description: "Blue-chip and growth picks.",
      audience: "Managed with periodic review and realignment.",
      img: financial2,
      alt: "Tree growing from coins with long-term tag.",
    },
    {
      title: "Momentum Delivery-Based Trading",
      subtitle: "Short-term high-potential trades.",
      description: "Uses margin/leveraged funds with strong risk management.",
      audience: "Regular alerts and exits on time.",
      img: financial4,
      alt: "Speedometer with “Momentum” label on dial",
    },
    {
      title: "Swing Trading – Index, Futures & Options",
      subtitle: "3 days to 1 month hold",
      description: "Includes hedge-based risk reduction.",
      audience: "Suits active traders seeking calculated exposure.",
      img: financial3,
      alt: "Swing graph with hedge overlay (put/call icons)",
    },
  ];

  // Filter logic remains the same
  const filteredAdvisory = serviceName
    ? advisory.filter((item) => item.title.toLowerCase().includes(serviceName.toLowerCase()))
    : advisory;

  // Reusable component for perfectly aligned detail rows
  const DetailRow = ({ label, value }) => (
    <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'flex-start' }}>
      <Typography
        variant="body1" // Slightly larger for readability
        sx={{
          fontWeight: 'bold',
          color: '#49326b',
          width: '100%', // Adjusted for slightly longer labels
          flexShrink: 0,
          textAlign: 'left',
        }}
      >
        {label}:
      </Typography>
      <Typography variant="body1" sx={{ color: '#333', textAlign: 'left' }}>
       
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 6, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {filteredAdvisory.map((course, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              {/* This is the InfoCard refactored with MUI's sx prop */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '10px solid #e4d4fa',
                  borderRadius: '16px',
                  padding: '20px',
                  transition: 'all 0.3s ease-in-out',
                  animation: `${fadeIn} 6s ease-in-out infinite alternate`,
                  '&:hover': {
                    boxShadow: '0 10px 25px rgba(73, 50, 107, 0.25)',
                    transform: 'scale(1.02)'
                  },
                }}
                role="article"
                aria-label={`Advisory service: ${course.title}`}
              >
                {/* Image Wrapper */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  <Image
                    src={course.img}
                    alt={course.alt}
                    width={400} // Provide base width
                    height={270} // Provide base height
                    style={{
                      width: '100%',
                      height: 'auto', // Keep aspect ratio
                      maxHeight: '270px',
                      borderRadius: '16px',
                      animation: `${imageFloat} 4s ease-in-out infinite`,
                    }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#49326b"
                  textAlign="center"
                  sx={{
                    mb: 3,
                    minHeight: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {course.title}
                </Typography>

                {/* Details Section */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%', // Ensures full width for proper left alignment
                  }}
                >
                  {/* Using the DetailRow component for clean, aligned rows */}
                  <DetailRow label="Subtitle" value={course.subtitle} />
                  <DetailRow label="Description" value={course.description} />
                  <DetailRow label="Audience" value={course.audience} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 6 }}>
          <GetMoreButton />
        </Box>
      </Container>
    </Box>
  );
};

export export default AdvisoryService;