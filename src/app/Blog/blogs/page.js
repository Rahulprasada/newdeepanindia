"use client";

import React, { useEffect, useState, useMemo } from "react";
import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { defaultCards } from "../../components/details/DefaultCard";
import { instance, Url } from "../../../utils/api";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import Image from "next/image";

// --- Keyframes for Animations ---
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// --- Styled Components ---
const MainBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  background: "linear-gradient(135deg, #f9f3fe 0%, #e8e0ff 100%)",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
  },
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
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const BlogListBox = styled(Box)(({ theme }) => ({
  flex: "1 1 45%", // Takes up a portion of the flex space
  padding: "16px",
  maxHeight: "600px", // Match the card's min-height
  overflowY: "auto",
  borderLeft: `1px solid ${theme.palette.divider}`,
  "&::-webkit-scrollbar": {
    width: "8px",
  },
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
}));

const StyledImage = styled(Image)(({ theme }) => ({
  width: "90%",
  height: "90%", // Fill the container
  objectFit: "cover", // Prevent image stretching
  // Apply rounded corners only on the right side for desktop
  borderRadius: "16px 16px 16px 16px",
  margin: "20px",
  // On mobile, when it stacks, apply rounded corners to the bottom
  [theme.breakpoints.down("md")]: {
    borderRadius: "0 0 16px 16px",
    minHeight: "300px", // Give it a fixed height on mobile
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: "32px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  animation: `${slideIn} 0.8s ease-in-out`,
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
  },
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
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
    textAlign: "center",
  },
}));

const Blogs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogIdFromUrl = searchParams.get("id");

  const [allBlogs, setAllBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const sliderData = useMemo(
    () => (allBlogs.length > 0 ? allBlogs : defaultCards),
    [allBlogs]
  );

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await instance.get("/landing/customer/Blogs");
        setAllBlogs(response.data || defaultCards);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setAllBlogs(defaultCards);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (sliderData.length > 0) {
      const initialBlog =
        sliderData.find((blog) => String(blog.id) === String(blogIdFromUrl)) ||
        sliderData[0];
      setSelectedBlog(initialBlog);
    }
  }, [sliderData, blogIdFromUrl]);

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
    if (!selectedBlog) return aboutImg1.src; // Return a fallback if no blog is selected
    if (typeof selectedBlog.image === "object" && selectedBlog.image.src) {
      return selectedBlog.image.src;
    }
    if (typeof selectedBlog.image === "string") {
      return `${Url}${selectedBlog.image}`;
    }
    return aboutImg1.src;
  }, [selectedBlog]);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = sliderData.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(sliderData.length / itemsPerPage);

  return (
    <MainBox>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "24px", md: "48px" } }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledCard>
                {/* CHANGED: Blog List is now on the LEFT */}
                <Grid item xs={12} md={8}>
                  <BlogListBox id="blog-list-box">
                    {paginatedData.map((blog, index) => (
                      <BlogItem
                        key={blog.id}
                        selected={selectedBlog?.id === blog.id}
                        onClick={() => handleSelectBlog(blog)}
                        role="button"
                        aria-label={`Select blog: ${blog.title}`}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                          }}
                        >
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
                        size="small"
                        sx={{
                          "& .MuiPaginationItem-root": {
                            color: "#49326b",
                            "&:hover": {
                              backgroundColor: "#e8e0ff",
                            },
                            "&.Mui-selected": {
                              backgroundColor: "#49326b",
                              color: "#fff",
                            },
                          },
                        }}
                      />
                    </Box>
                  )}
                </Grid>

                {/* CHANGED: Image is now on the RIGHT */}
                <Grid item xs={12} md={4}>
                  {/* CHANGED: Removed inline sx prop. All styling is in the styled-component */}
                  <StyledImage
                    src={imageSrc}
                    alt={selectedBlog?.title || "Blog Image"}
                    width={450}
                    height={300}
                    priority
                  />
                </Grid>
              </StyledCard>
            </Grid>

            {/* Full Blog Content Below */}
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
                    sx={{ color: "#616161", mb: 4, lineHeight: 1.7 }}
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
                      "& a": { color: "#49326b", textDecoration: "underline" },
                    }}
                  />
                  <AuthorBox image={aboutImg1}>
                    <Box>
                      <Typography
                        component="div"
                        dangerouslySetInnerHTML={{
                          __html: `Written by ${selectedBlog.author}`,
                        }}
                        sx={{ fontWeight: "bold" }}
                      />
                      <Typography variant="body2">
                        {selectedBlog.company}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                      {selectedBlog.code}
                    </Typography>
                  </AuthorBox>
                </ContentBox>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </MainBox>
  );
};

export default Blogs;
