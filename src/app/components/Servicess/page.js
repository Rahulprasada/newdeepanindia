"use client";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Your Asset Imports
import pig from "../../../assets/pig.jpeg";
import laptop from "../../../assets/laptop.jpeg";
import coin from "../../../assets/coin.jpeg";
import typer from "../../../assets/typer.jpeg";
import umberla from "../../../assets/umberla.jpeg";
import trader from "../../../assets/trader.jpeg";
import tab from "../../../assets/tab.jpeg";
import house from "../../../assets/house.jpeg";
import Algo from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

const services = [
  { title: "Mutual Funds", image: pig, path: "/service/mutual-funds" },
  { title: "Training in Financial Markets", image: tab, path: "/service/training-in-financial-markets" },
  { title: "Algo Trading", image: trader, path: "/service/algo-trading" },
  { title: "Advisory Services", image: laptop, path: "/service/advisory-services" },
  { title: "Fixed Deposits & Bonds", image: coin, path: "/service/fixed-deposits-&-bond" },
  { title: "Alternative Investment Funds", image: typer, path: "/service/alternate-investment-funds" },
  { title: "Real Estate Funds", image: house, path: "/service/real-estate-funds" },
  { title: "Insurances", image: umberla, path: "/service/insurances" },
];

// Reusable Card Component for a cleaner structure
const ServiceCard = ({ service }) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push(service.path)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        '&:hover': {
          transform: 'translateY(-8px)',
        }
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '200px',
          borderRadius: "16px",
          overflow: 'hidden',
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={200}
          height={200}
          style={{ width: "100%", height: "auto", display: 'block' }}
        />
      </Box>
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "1rem",
          mt: 2,
          minHeight: '40px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {service.title}
      </Typography>
    </Box>
  );
};


const Services = () => {
  // --- KEY CHANGE 1: Split the services array into two halves ---
  const firstColumnServices = services.slice(0, 4); // Gets the first 4 items
  const secondColumnServices = services.slice(4, 8); // Gets the last 4 items

  return (
    <Box
      id="offering"
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${Algo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 900,
            color: "white",
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            mb: { xs: 6, md: 8 },
          }}
        >
          Our Offerings
        </Typography>

        {/* --- KEY CHANGE 2: Create a two-column grid layout --- */}
        <Grid container spacing={{ xs: 5, md: 5 }}   justifyContent={{ xs: "center", sm: "center", md: "centre" }}
  alignItems={{ xs: "center", sm: "center", md: "center" }}>
          
          {/* --- FIRST COLUMN --- */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={5} justifyContent="center">
              {firstColumnServices.map((service, index) => (
                // On mobile, show 2 cards per row (sm=6). On desktop, show 1 card per row (md=12) *within this column*.
                <Grid item xs={12} sm={6} md={12} key={`col1-${index}`}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* --- SECOND COLUMN --- */}
          <Grid item xs={12} md={6} >
            <Grid container spacing={5} justifyContent="center">
              {secondColumnServices.map((service, index) => (
                <Grid item xs={12} sm={6} md={12} key={`col2-${index}`}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Services;