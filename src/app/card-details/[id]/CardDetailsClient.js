"use client"; // <--- This is the crucial directive

import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import { styled, keyframes } from "@mui/material/styles";
import { instance } from "../../../utils/api";
import { Url } from "../../../utils/api";
import { defaultCards } from "../../components/details/DefaultCard";
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
  const { id } = useParams();
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // You can keep or remove the hovered states if they are not used
  // const [hovered, setHovered] = useState(false);
  // ... and so on

  useEffect(() => {
    setLoading(true); // Reset loading state on ID change
    const fetchDetails = async () => {
      try {
        const response = await instance.get(`/landing/customer/Blogs/${id}`);
        if (response.status === 200 && response.data) {
          setData(response.data);
        } else {
          const fallback = defaultCards.find(
            (card) => String(card.id) === String(id)
          );
          if (fallback) {
            setData(fallback);
          } else {
            setError("No details found!");
          }
        }
      } catch (err) {
        const fallback = defaultCards.find(
          (card) => String(card.id) === String(id)
        );
        if (fallback) {
          setData(fallback);
        } else {
          setError("Failed to fetch data");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
        fetchDetails();
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: data?.title || "Check out this blog!",
      text: data?.metaDescription || "An interesting blog post!",
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Blog URL copied to clipboard! Share it on your favorite platform.");
      }
    } catch (err) {
      console.error("Share failed:", err);
      alert("Failed to share. URL copied to clipboard!");
      await navigator.clipboard.writeText(shareUrl);
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
                <Box>
                  <Skeleton
                    variant="text"
                    width={150}
                    height={30}
                    sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }}
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
      <Typography variant="h5" color="#49326b" sx={{textAlign: 'center', padding: '4rem'}}>
        {error}
      </Typography>
    );
  }

  if (!data) {
    return (
      <Typography variant="h5" color="#49326b" sx={{textAlign: 'center', padding: '4rem'}}>
        No details found!
      </Typography>
    );
  }

  const imageSrc =
    typeof data?.image === "object"
      ? data.image.src // Handle Next.js static image import object
      : data?.image?.includes("static") || data?.image?.includes("assets")
        ? data?.image
        : data?.image
          ? `${Url}${data?.image}`
          : defaultCards.find((card) => String(card.id) === String(id))?.image?.src;

  return (
    <>
      <MainBox image={aboutImg1.src}>
        <ContentBox>
          <Typography variant="h3" className="title">
            {data.title.toUpperCase()}
          </Typography>
          <Typography
            component="div"
            dangerouslySetInnerHTML={{ __html: data.subTitle }}
            className="subtitle"
          />
        </ContentBox>
      </MainBox>
      <Main2Box>
        <Container maxWidth="lg">
          <Content1Box>
            <ImageBox>
              <StyledImage
                src={imageSrc}
                alt={data.title}
                loading="lazy"
              />
            </ImageBox>
            <Typography variant="body1" className="metaDescription">
              {data.metaDescription}
            </Typography>
            <Typography
              component="div"
              dangerouslySetInnerHTML={{ __html: data.content }}
              color="#49326b"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "#49326b", mt: 2, fontWeight: 500 }}
            >
              Share this blog with your network:
            </Typography>
            {/* Added Share Button */}
            <button onClick={handleShare} style={{cursor: 'pointer', padding: '10px 20px', borderRadius: '8px', border: '1px solid #49326b', background: '#e4d4fa', color: '#49326b', fontWeight: 'bold'}}>
                Share Post
            </button>
            <AuthorBox image={aboutImg1.src}>
              <Box>
                <Typography
                  sx={{ color: "#e4d4fa", fontSize: "1rem" }}
                  component="div"
                  dangerouslySetInnerHTML={{
                    __html: `Written by ${data?.author}`,
                  }}
                />
                <Typography
                  sx={{ color: "#e4d4fa", fontSize: "1rem" }}
                  component="div"
                  dangerouslySetInnerHTML={{
                    __html: data?.company,
                  }}
                />
                <Typography sx={{ color: "#e4d4fa", fontSize: "1rem" }}>
                  {data?.code}
                </Typography>
              </Box>
            </AuthorBox>
          </Content1Box>
        </Container>
      </Main2Box>
    </>
  );
};

// Styled components
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
`;
// ... (Paste ALL your other styled components here: Main2Box, ContentBox, etc.)
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
  }

  .subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    color: #f9f3fe;
    margin: 0 auto;

    @media (max-width: 600px) {
      font-size: 1rem;
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
`;

export default CardDetailsClient;