// app/Blog/blogs/BlogsClient.js

"use client";

import React, { useEffect, useState, useMemo } from "react";
// ... (keep all your other imports: styled, keyframes, Box, Typography, etc.)
import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { Url } from "../../../utils/api";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import Image from "next/image";


// ... (keep all your styled components exactly as they were)
const MainBox = styled(Box)(({ theme }) => ({ /* ... */ }));
const StyledCard = styled(Grid)(({ theme }) => ({ /* ... */ }));
// etc.

// The component now accepts initialBlogs as a prop
const BlogsClient = ({ initialBlogs }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogIdFromUrl = searchParams.get("id");

  // The component uses the prop for its state. No need to fetch.
  const [allBlogs, setAllBlogs] = useState(initialBlogs || []);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  // This useEffect is still needed to set the initially selected blog
  // from the URL when the component mounts on the client.
  useEffect(() => {
    if (allBlogs && allBlogs.length > 0) {
      const initialBlog =
        allBlogs.find((blog) => String(blog.id) === String(blogIdFromUrl)) ||
        allBlogs[0]; // Default to the first blog if ID not found or not in URL
      setSelectedBlog(initialBlog);
    }
  }, [allBlogs, blogIdFromUrl]);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
    router.push(`/Blog/blogs?id=${blog.id}`, { scroll: false });
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    document
      .getElementById("blog-list-box")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const imageSrc = useMemo(() => {
    if (!selectedBlog) return aboutImg1; // Use imported image for fallback
    // Handle local image objects (from defaultCards)
    if (typeof selectedBlog.image === "object" && selectedBlog.image.src) {
      return selectedBlog.image;
    }
    // Handle image paths from the API
    if (typeof selectedBlog.image === "string") {
      return `${Url}${selectedBlog.image}`;
    }
    // Final fallback
    return aboutImg1;
  }, [selectedBlog]);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = allBlogs.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(allBlogs.length / itemsPerPage);

  // The entire JSX return block remains the same, but it's now powered by props.
  return (
    <MainBox>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "24px", md: "48px" } }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledCard container spacing={2}>
                <Grid item xs={12} md={7}>
                  {/* ... Blog list JSX ... */}
                </Grid>
                <Grid item xs={12} md={5}>
                  <StyledImage
                    key={selectedBlog?.id} // This key is crucial to force re-render
                    src={imageSrc}
                    alt={selectedBlog?.title || "Blog Image"}
                    width={500}
                    height={550}
                    priority
                  />
                </Grid>
              </StyledCard>
            </Grid>
            {selectedBlog && (
              <Grid item xs={12}>
                {/* ... Full blog content JSX ... */}
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </MainBox>
  );
};

export default BlogsClient;