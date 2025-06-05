"use client";

import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import AlternativeImage from "../../../assets/11-removebg-preview.png";

const AlternativeInvestMentFunt = ({ serviceName }) => {
  return (
    <Box sx={{ px: 2, py: 4, backgroundColor:'#ffffff'}}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            border: "10px solid #e4d4fa",
            padding: { xs: "20px 10px", sm: "40px" },
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            animation: "fadeIn 6s ease-in-out infinite alternate",
            "@keyframes fadeIn": {
              "0%": {
                transform: "scale(1.02)",
              },
              "50%": {
                transform: "scale(1.03)",
              },
              "100%": {
                transform: "scale(1)",
              },
            },
            "&:hover": {
              transition: "all 0.55s ease-in",
              boxShadow: "0 4px 10px #49326b",
            },
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #f9f3fe",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                    />
                    <Typography variant="h5" fontWeight="bold" color="#49326b">
                      Structured funds for HNIs.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                    />
                    <Typography variant="h5" fontWeight="bold" color="#49326b">
                      Diversification beyond traditional assets.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                    />
                    <Typography variant="h5" fontWeight="bold" color="#49326b">
                      Includes private equity, venture capital, hedge funds.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={{ mt: 2, maxWidth: 300 }}>
                  <Image
                    src={AlternativeImage}
                    alt="Puzzle of different investment assets forming a portfolio."
                    width={300}
                    height={300}
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AlternativeInvestMentFunt;