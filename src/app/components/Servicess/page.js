"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  {
    title: "Mutual Funds",
    image: pig,
    path: "/service/mutual-funds",
  },
  {
    title: "Training in Financial Markets",
    image: tab,
    path: "/service/training-in-financial-markets",
  },
  {
    title: "Algo Trading",
    image: trader,
    path: "/service/algo-trading",
  },
  {
    title: "Advisory Services",
    image: laptop,
    path: "/service/advisory-services",
  },
  {
    title: "Fixed Deposits & Bonds",
    image: coin,
    path: "/service/fixed-deposits-&-bond",
  },
  {
    title: "Alternate Investment Funds (AIFs)",
    image: typer,
    path: "/service/alternate-investment-funds-(AIFS)",
  },
  {
    title: "Real Estate Funds",
    image: house,
    path: "/service/real-estate-funds",
  },
  {
    title: "Insurances",
    image: umberla,
    path: "/service/insurances",
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <Box
      id="offering"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${Algo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "20px 0px 20px 0px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC143C' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 1,
        }}
      />

        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "40px 20px", md: "80px 50px" },
          }}
        >
          <Typography
            sx={{
              padding: "20px 40px 0px 40px",
              textAlign: "center",
              fontWeight: 900,
              color: "white",
              fontSize: { xs: "26px", sm: "50px" },
            }}
          >
            Our Offerings
          </Typography>

          <Grid container spacing={-3} justifyContent="center" padding={"20px"} >
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderRadius: "20px",
                    paddingBottom: "10px",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "80%",
                      borderRadius: "15px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={260}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push(service.path)}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                        "&:hover": { color: "#49326b" },
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
    </Box>
  );
};

export default Services;