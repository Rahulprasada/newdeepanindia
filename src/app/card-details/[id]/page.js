// app/Blog/[id]/page.js

import { instance } from "../../../utils/api";
import { Url } from "../../../utils/api";
import { defaultCards } from "../../components/details/DefaultCard";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import CardDetailsClient from "./CardDetailsClient";

export async function generateMetadata({ params }) {
  const { id } = params;
  const siteUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : process.env.NEXT_PUBLIC_SITE_URL;

  // --- SOLUTION: Use a variable that can be populated by either the API or the fallback ---
  let data = null;

  try {
    // --- STEP 1: Attempt to fetch data from the API ---
    const response = await instance.get(`/landing/customer/Blogs/${id}`);
    if (response.status === 200 && response.data) {
      data = response.data; // API call was successful, store the data
    }
  } catch (apiError) {
    // If the API call fails (e.g., 404, 500, network error), we catch it here.
    // Instead of returning an error, we simply log a warning and let the code proceed.
    // The `data` variable will remain `null`.
    console.warn(
      `API call for Blog ID ${id} failed. Attempting to use local fallback. Error: ${apiError.message}`
    );
  }

  // --- STEP 2: If the API failed (data is still null), try the local fallback ---
  if (!data) {
    const fallback = defaultCards.find((card) => String(card.id) === String(id));
    if (fallback) {
      data = fallback; // Fallback was successful, store the data
    }
  }

  // --- STEP 3: If BOTH the API and the fallback failed, now we return "Not Found" ---
  if (!data) {
    return {
      title: "Blog Not Found | Deepan India",
      description: "The requested blog post could not be found.",
    };
  }

  // --- STEP 4: If we have data from either source, proceed to generate metadata ---
  // This part of the code is the same as before.
  let imageSrc;
  if (data.image && typeof data.image === 'object' && data.image.src) {
    imageSrc = `${siteUrl}${data.image.src}`;
  } else if (data.image) {
    imageSrc = `${Url}${data.image}`;
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
    
  const canonicalUrl = `${siteUrl}/Blog/${id}`;

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

// The Page component remains unchanged
export default function CardDetailsPage() {
  return <CardDetailsClient />;
}