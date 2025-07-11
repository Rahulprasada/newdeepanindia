"use client";

import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import { styled, keyframes } from "@mui/material/styles";
import { instance, Url } from "../../../utils/api";
import { defaultCards } from "../../components/details/DefaultCard";
import ShareIcon from "@mui/icons-material/Share";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

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

const CardDetailsClient = () => {
  const { slug } = useParams();
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    const cardFromLocalData = defaultCards.find((card) => card.slug === slug);

    if (!cardFromLocalData) {
      setError("No details found for this blog post!");
      setLoading(false);
      return;
    }

    const idToFetch = cardFromLocalData.id;

    const fetchDetails = async () => {
      try {
        const response = await instance.get(
          `/landing/customer/Blogs/${idToFetch}`
        );
        if (response.status === 200 && response.data) {
          setData(response.data);
        } else {
          setData(cardFromLocalData);
        }
      } catch (err) {
        console.warn(
          `Failed to fetch blog post ID ${idToFetch} from API. Using local data.`
        );
        setData(cardFromLocalData);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareText = `Check out this article: "${
      data?.title || "An interesting post"
    }" from Deepan India.`;

    const shareData = {
      title: data?.title || "Share this Blog Post",
      text: shareText,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Blog URL copied to clipboard! You can now paste it to share.");
      }
    } catch (err) {
      console.error("Share failed:", err);
      await navigator.clipboard.writeText(shareUrl);
      alert("Failed to share. URL has been copied to your clipboard instead!");
    }
  };

  if (loading) {
    return (
      <>
        <MainBox image={aboutImg1.src}>
          <ContentBox>
            <Skeleton
              variant="text"
              width="60%"
              height={60}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mx: "auto" }}
            />
            <Skeleton
              variant="text"
              width="80%"
              height={30}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mx: "auto" }}
            />
          </ContentBox>
        </MainBox>
        <Main2Box>
          <Container maxWidth="lg">
            <Content1Box>
              <ImageBox>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={400}
                  sx={{ borderRadius: "12px" }}
                />
              </ImageBox>
              <Skeleton variant="text" width="90%" height={80} />
              <ContentSection>
                <Skeleton variant="text" width="40%" height={40} />
                <Skeleton variant="text" width="100%" height={100} />
              </ContentSection>
              <AuthorBox image={aboutImg1.src}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Skeleton
                      variant="text"
                      width={150}
                      height={30}
                      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }}
                    />
                    <Skeleton
                      variant="text"
                      width={200}
                      height={30}
                      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }}
                    />
                  </Box>
                  <Skeleton
                    variant="rectangular"
                    width={120}
                    height={40}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.3)",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </AuthorBox>
            </Content1Box>
          </Container>
        </Main2Box>
      </>
    );
  }

  if (error) {
    return (
      <Typography
        variant="h5"
        color="#49326b"
        sx={{ textAlign: "center", padding: "4rem" }}
      >
        {error}
      </Typography>
    );
  }

  if (!data) {
    return (
      <Typography
        variant="h5"
        color="#49326b"
        sx={{ textAlign: "center", padding: "4rem" }}
      >
        No details found!
      </Typography>
    );
  }

  const cardFromLocalData = defaultCards.find((card) => card.slug === slug);
  const imageSrc =
    typeof data?.image === "object"
      ? data.image.src
      : data?.image?.includes("static") || data?.image?.includes("assets")
      ? data.image
      : data?.image
      ? `${Url}${data.image}`
      : cardFromLocalData?.image?.src;

  return (
    <>
      <MainBox image={aboutImg1.src}>
        <ContentBox>
          <Typography variant="h3" className="title">
            {data.title.toUpperCase()}
          </Typography>
        </ContentBox>
      </MainBox>
      <Main2Box>
        <Container maxWidth="lg">
          <Content1Box>
            <ImageBox>
              <StyledImage src={imageSrc} alt={data.title} loading="lazy" />
            </ImageBox>
            <Typography
              component="div"
              dangerouslySetInnerHTML={{ __html: data.subTitle }}
              className="metaDescription"
            />
            <Typography
              variant="body1"
              className="metaDescription"
              dangerouslySetInnerHTML={{ __html: data.metaDescription }}
            />
            <Typography
              component="div"
              className="Content"
              dangerouslySetInnerHTML={{ __html: data.content }}
              color="#49326b"
            />
            <AuthorBox image={aboutImg1.src}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  width: "100%",
                  gap: { xs: 2, sm: 0 },
                }}
              >
                <Box sx={{ textAlign: "left" }}>
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
                      __html: `Written by <strong>${data?.author}</strong>`,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#e4d4fa",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                    component="div"
                    dangerouslySetInnerHTML={{ __html: data?.company }}
                  />
                  <Typography
                    sx={{
                      color: "#e4d4fa",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {data?.code}
                  </Typography>
                </Box>
                <Box sx={{ flexShrink: 0, mt: { xs: 2, sm: 0 } }}>
                  <button
                    onClick={handleShare}
                    style={{
                      cursor: "pointer",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "1px solid #49326b",
                      background: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <ShareIcon /> Share Post
                  </button>
                </Box>
              </Box>
            </AuthorBox>
          </Content1Box>
        </Container>
      </Main2Box>
    </>
  );
};

// Styled components (No changes needed)
const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  padding: 40px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: ${slideIn} 0.8s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Main2Box = styled(Box)`
  padding: 80px 0;
  background-color: #f9f3fe;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

const ContentBox = styled(Box)`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 20px;

  .title {
    font-size: 3.5rem;
    font-weight: 900;
    color: #f9f3f6;
    margin-bottom: 16px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 900px) {
      font-size: 2.5rem;
    }

    @media (max-width: 600px) {
      font-size: 1.8rem;
    }
    a {
      color: blue;
      transition: color 0.3s ease;

      &:hover {
        color: violet;
        text-decoration: none;
      }
    }
  }

  .Content {
    a {
      color: blue;
      transition: color 0.3s ease;

      &:hover {
        color: violet;
        text-decoration: none;
      }
    }
  }

  .subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    color: #f9f3fe;
    margin: 0 auto;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
    a {
      color: blue;
      transition: color 0.3s ease;

      &:hover {
        color: violet;
        text-decoration: none;
      }
    }
  }
`;

const Content1Box = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  .metaDescription {
    font-size: 1.1rem;
    font-weight: 500;
    color: #49326b;
    line-height: 1.6;
  }
  a {
    color: blue;
    transition: color 0.3s ease;

    &:hover {
      color: violet;
      text-decoration: none;
    }
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const StyledImage = styled("img")`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;

  @media (max-width: 600px) {
    border-radius: 8px;
  }
`;

const ContentSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AuthorBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 20px;
  background-attachment: fixed;
  animation: ${slideIn} 0.8s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export default CardDetailsClient;
