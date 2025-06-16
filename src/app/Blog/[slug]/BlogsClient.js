"use client";

import React, { useEffect, useState, useMemo } from "react";
import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "next/navigation";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import Skeleton from "@mui/material/Skeleton";

import { defaultCards } from "../../components/details/DefaultCard";
import { slugify } from "../../../utils/slugify";
import { instance } from "../../../utils/api";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

const slideIn = keyframes`from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); }`;
const MainBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  background: "linear-gradient(135deg, #f9f3fe 0%, #e8e0ff 100%)",
  minHeight: "100vh",
  [theme.breakpoints.down("sm")]: { padding: "40px 0" },
}));
const StyledCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "16px",
  overflow: "hidden",
  border: `2px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  marginBottom: "32px",
  padding: "24px",
  [theme.breakpoints.down("md")]: { flexDirection: "column" },
}));
const BlogListBox = styled(Box)(({ theme }) => ({
  flex: "1 1 45%",
  padding: "16px",
  maxHeight: "600px",
  overflowY: "auto",
  borderLeft: `1px solid ${theme.palette.divider}`,
  "&::-webkit-scrollbar": { width: "8px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[400],
    borderRadius: "8px",
  },
  [theme.breakpoints.down("md")]: {
    borderLeft: "none",
    borderTop: `1px solid ${theme.palette.divider}`,
    maxHeight: "300px",
  },
}));
const BlogItem = styled(Box)(({ theme, selected }) => ({
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "8px",
  cursor: "pointer",
  border: "2px solid #49326b",
  backgroundColor: selected ? "#49326b" : "transparent",
  color: selected
    ? theme.palette.primary.contrastText
    : theme.palette.text.primary,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: selected
      ? theme.palette.primary.dark
      : theme.palette.grey[200],
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(4px)",
  },
}));
const StyledImage = styled(Image)(({ theme }) => ({
  width: "90%",
  height: "90%",
  objectFit: "cover",
  borderRadius: "16px",
  margin: "20px",
  [theme.breakpoints.down("md")]: {
    borderRadius: "0 0 16px 16px",
    minHeight: "300px",
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  padding: "32px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  animation: `${slideIn} 0.8s ease-in-out`,
  [theme.breakpoints.down("sm")]: { padding: "24px" },
}));
const AuthorBox = styled(Box)(({ theme, image }) => ({
  backgroundImage: `url(${image.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "12px",
  padding: "24px",
  marginTop: "32px",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.common.white,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
    borderRadius: "12px",
  },
  "& > *": { position: "relative", zIndex: 1 },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
    textAlign: "center",
  },
}));

export default function BlogDetailClient() {
  const params = useParams();
  const currentSlug = params?.slug;
  const router = useRouter();
  const [apiBlogs, setApiBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await instance.get("/landing/customer/Blogs");
        if (response.data && Array.isArray(response.data)) {
          setApiBlogs(response.data);
        } else {
          setApiBlogs([]);
        }
      } catch (error) {
        console.error("API fetch failed:", error);
        setApiBlogs([]);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    fetchBlogs();
  }, []);

  // Scroll slightly downward when skeleton loader is displayed
  useEffect(() => {
    if (isLoading) {
      window.scrollTo({
        top: window.scrollY + 700,
        behavior: "smooth",
      });
    }
  }, [isLoading]);

  const processedBlogs = useMemo(() => {
    const dataSource = apiBlogs.length > 0 ? apiBlogs : defaultCards;
    return dataSource.map((blog) => ({ ...blog, slug: slugify(blog.title) }));
  }, [apiBlogs]);

  useEffect(() => {
    if (processedBlogs.length === 0 || isLoading) return;
    const blogToSelect =
      processedBlogs.find((blog) => blog.slug === currentSlug) ||
      processedBlogs[0];
    setSelectedBlog(blogToSelect);
  }, [processedBlogs, currentSlug, isLoading]);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
    router.replace(`/Blog/${blog.slug}`, { scroll: false });
  };

  const handlePageChange = (event, value) => setPage(value);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = processedBlogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const pageCount = Math.ceil(processedBlogs.length / itemsPerPage);

  if (isLoading) {
    return (
      <MainBox>
        <Container maxWidth="xl">
          <Box sx={{ padding: { xs: "24px", md: "48px" } }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <StyledCard>
                  <Grid item xs={12} md={8}>
                    <BlogListBox>
                      {[...Array(5)].map((_, index) => (
                        <Skeleton
                          key={index}
                          variant="rectangular"
                          height={60}
                          sx={{ borderRadius: 2, mb: 2 }}
                        />
                      ))}
                    </BlogListBox>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width={450}
                      height={300}
                      sx={{ borderRadius: "16px", margin: "20px" }}
                    />
                  </Grid>
                </StyledCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </MainBox>
    );
  }

  return (
    <MainBox>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "24px", md: "48px" } }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledCard>
                <Grid item xs={12} md={8}>
                  <BlogListBox>
                    {paginatedData.map((blog, index) => (
                      <BlogItem
                        key={blog.id || index}
                        selected={selectedBlog?.id === blog.id}
                        onClick={() => handleSelectBlog(blog)}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {startIndex + index + 1}. {blog.title}
                        </Typography>
                      </BlogItem>
                    ))}
                  </BlogListBox>
                  {pageCount > 1 && (
                    <Box
                      sx={{ display: "flex", justifyContent: "center", p: 2 }}
                    >
                      <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                      />
                    </Box>
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  {selectedBlog && (
                    <StyledImage
                      key={selectedBlog.id}
                      src={selectedBlog.image?.src || aboutImg1.src}
                      alt={selectedBlog.title || "Blog Image"}
                      width={450}
                      height={300}
                      priority
                    />
                  )}
                </Grid>
              </StyledCard>
            </Grid>
            {selectedBlog && (
              <Grid item xs={12}>
                <ContentBox>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#49326b", mb: 2 }}
                  >
                    {selectedBlog.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#616161",
                      mb: 4,
                      lineHeight: 1.7,
                      "& a": { color: "blue" },
                    }}
                  >
                    {selectedBlog.metaDescription}
                  </Typography>
                  <Divider sx={{ mb: 4 }} />
                  <Typography
                    component="div"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                    sx={{
                      color: "#49326b",
                      lineHeight: 1.8,
                      "& a": { color: "blue" },
                    }}
                  />
                  <AuthorBox image={aboutImg1}>
                    <Box>
                      <Typography
                        sx={{
                          color: "#e4d4fa",
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          "& a": {
                            color: "red",
                            textDecoration: "none",
                          },
                        }}
                        component="div"
                        dangerouslySetInnerHTML={{
                          __html: `Written by <strong>${selectedBlog.author}</strong>`,
                        }}
                      />
                      <Typography variant="body2">
                        {selectedBlog.company}
                      </Typography>
                    </Box>
                    <Box>
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          navigator.clipboard.writeText(url);
                          alert("Blog URL copied to clipboard!");
                        }}
                        style={{
                          cursor: "pointer",
                          padding: "10px 20px",
                          borderRadius: "8px",
                          border: "1px solid #49326b",
                          background: "#e4d4fa",
                          color: "#49326b",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <ShareIcon /> Share Post
                      </button>
                    </Box>
                  </AuthorBox>
                </ContentBox>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </MainBox>
  );
}
