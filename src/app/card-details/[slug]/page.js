// app/card-details/[slug]/page.js

import { instance, Url } from "../../../utils/api";
import { defaultCards } from "../../components/details/DefaultCard";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import CardDetailsClient from "./CardDetailsClient";

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  const siteUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : process.env.NEXT_PUBLIC_SITE_URL;

  const cardFromLocalData = defaultCards.find((card) => card.slug === slug);

  if (!cardFromLocalData) {
    return {
      title: "Blog Not Found | Deepan India",
      description: "The requested blog post could not be found.",
    };
  }
  
  const { id } = cardFromLocalData;
  let data = null;

  try {
    const response = await instance.get(`/landing/customer/Blogs/${id}`);
    if (response.status === 200 && response.data) {
      data = response.data;
    }
  } catch (apiError) {
    console.warn(
      `API call for Blog ID ${id} (from slug "${slug}") failed. Using local fallback. Error: ${apiError.message}`
    );
  }

  if (!data) {
    data = cardFromLocalData;
  }

  let imageSrc;
  if (data.image && typeof data.image === 'object' && data.image.src) {
    imageSrc = `${siteUrl}${data.image.src}`;
  } else if (data.image) {
    imageSrc = data.image.startsWith('http') ? data.image : `${Url}${data.image}`;
  } else {
    imageSrc = `${siteUrl}${aboutImg1.src}`;
  }

  const baseTitle = data.title || "Blog Post from Deepan India";
  const seoTitle = baseTitle.length > 60
      ? `${baseTitle.substring(0, 57)}... | Deepan India`
      : `${baseTitle} | Deepan India`;

  const metaDescription = data.metaDescription
    ? data.metaDescription.length > 160
      ? `${data.metaDescription.substring(0, 157)}...`
      : data.metaDescription
    : "Discover insightful financial tips and updates from Deepan India Financial Services.";
    
  // --- THIS LINE IS NOW CORRECTED ---
  const canonicalUrl = `${siteUrl}/card-details/${slug}`;

  return {
    title: seoTitle,
    description: metaDescription,
    keywords: data.keywords || "finance, investment, financial services, deepan india, blog",
    authors: [{ name: data.author || "Deepan India" }],
    robots: "index, follow",
    openGraph: {
      title: seoTitle,
      description: metaDescription,
      images: [{ url: imageSrc, width: 1200, height: 630 }],
      url: canonicalUrl,
      type: "article",
      siteName: "Deepan India Financial Services",
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: metaDescription,
      images: [imageSrc],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function CardDetailsPage() {
  return <CardDetailsClient />;
}