"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Box from '@mui/material/Box';
export default function Cards({ e }) {
  const { title, metaDescription, image } = e || {};
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/card-details/${e?.slug || "default"}`);
  };

  return (
    <Card
      role="article"
      aria-labelledby={`card-title-${e?.id}`}
      sx={{
        width: "100%",
        maxWidth: { xs: "90%", sm: 400 },
        margin: "15px auto",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(73, 50, 107, 0.15)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: "#fff",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 32px rgba(73, 50, 107, 0.25)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={title || "Blog Image"}
          fill
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
      </Box>
      <CardContent sx={{ backgroundColor: "#fff", padding: "20px" }}>
        <Typography
          id={`card-title-${e?.id}`}
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#49326b",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            marginBottom: "12px",
          }}
        >
          {title || "Default Title"}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#6b5b95",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            lineHeight: 1.6,
          }}
        >
          {metaDescription || "No description available."}
        </Typography>
      </CardContent>
      <Divider
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#e6e0fa",
          backgroundColor: "#e6e0fa",
          width: "100%",
        }}
      />
      <CardActions sx={{ padding: "16px", justifyContent: "flex-end" }}>
        <Button
          size="medium"
          sx={{
            textTransform: "none",
            color: "#49326b",
            fontWeight: 600,
            fontSize: "16px",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#49326b",
              borderRadius: "8px",
            },
            padding: "8px 16px",
          }}
          endIcon={<ArrowRightAltIcon sx={{ fontSize: "20px" }} />}
          onClick={handleReadMore}
          aria-label={`Read more about ${title || "this blog"}`}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}