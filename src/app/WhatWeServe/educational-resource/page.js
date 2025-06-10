"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalculateIcon from "@mui/icons-material/Calculate";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import Handshake from "../../../assets/10-removebg-preview.png";
import GetMoreButton from "../../components/Button/page";

const resources = [
  {
    icon: <MenuBookIcon />,
    title: "Simple Financial Articles",
    desc: "Easy-to-understand articles on finance and investing.",
  },
  {
    icon: <CalculateIcon />,
    title: "Planning Tools & Calculators",
    desc: "Tools and calculators for retirement, SIPs, and goal planning.",
  },
  {
    icon: <LiveTvIcon />,
    title: "Webinars & Expert Videos",
    desc: "Webinars, videos, and expert tips to stay informed.",
  },
  {
    icon: <DownloadIcon />,
    title: "Guides & E-books",
    desc: "Downloadable guides and e-books for every stage of your financial journey.",
  },
];

const EducationalResource = () => {
  return (
    <Box
      sx={{
        padding: { xs: "30px 0", sm: "60px 0" },
        backgroundColor: "#f9f3fe",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            padding: { xs: "20px 0 5px 0", sm: "30px 0" },
            textAlign: "left",
            fontWeight: 900,
            color: "#49326b",
            fontSize: { xs: "26px", sm: "50px" },
          }}
        >
          Educational Resources
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            color: "#49326b",
            fontSize: "18px",
            marginBottom: { xs: "30px", sm: "40px" },
            fontWeight: 300,
          }}
        >
          Knowledge is the foundation of sound financial decisions. Our platform
          offers:
        </Typography>

        <Box
          sx={{
            position: "relative",
            backgroundColor: "#33197a",
            width: "100%",
            backgroundImage: `linear-gradient(rgba(73, 50, 107, 0.7), rgba(73, 50, 107, 0.7)), url(/assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: { xs: "20px 10px", sm: "40px 40px" },
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(73, 50, 107, 0.3)",
              zIndex: 1,
            },
            "& > *": {
              position: "relative",
              zIndex: 2,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "#f9f3fe",
                    borderTop: "10px solid #e4d4fa",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.3s ease",
                    animation: "slideIn 1s ease-in-out",
                    "@keyframes slideIn": {
                      from: { opacity: 0, transform: "translateY(-20px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 4px 20px rgba(73, 50, 107, 0.2)",
                    },
                  }}
                >
                  {resources.map((res, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "left",
                        paddingY: "8px",
                        "&:hover": {
                          backgroundColor: "#f9f3fe",
                          borderRadius: "5px",
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#f9f3fe",
                          color: "#49326b",
                          mr: 2,
                          ml: 1,
                        }}
                      >
                        {res.icon}
                      </Avatar>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", color: "#49326b" }}
                        >
                          {res.title}
                        </Typography>
                        <Typography variant="body2" color="#49326b">
                          {res.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={Handshake}
                    alt="handshake"
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "18px", sm: "28px" },
              fontWeight: "900",
              color: "white",
              marginTop: "20px",
              padding: "10px",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#e73ed1",
              },
            }}
          >
            Empower yourself with insights that help you take control of your
            finances.
          </Typography>
        </Box>
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <GetMoreButton />
        </Box>
      </Container>
    </Box>
  );
};

export default EducationalResource;
