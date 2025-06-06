import { instance } from "../../../utils/api";
import { Url } from "../../../utils/api";
import { defaultCards } from "../../components/details/DefaultCard";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

// Import the new client component
import CardDetailsClient from "./CardDetailsClient";

// This function runs ONLY on the server.
export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const response = await instance.get(`/landing/customer/Blogs/${id}`);
    let data = null;

    if (response.status === 200 && response.data) {
      data = response.data;
    } else {
      const fallback = defaultCards.find(
        (card) => String(card.id) === String(id)
      );
      if (fallback) {
        data = fallback;
      }
    }

    if (!data) {
      return {
        title: "Blog Not Found | Deepan India",
        description: "The requested blog post could not be found.",
      };
    }
    
    // Handle how image objects from static imports are resolved
    const imageSrc =
      typeof data.image === 'object' && data.image.src
        ? `https://yourdomain.com${data.image.src}` // Use your absolute domain
        : data.image
        ? `${Url}${data.image}`
        : `https://yourdomain.com${aboutImg1.src}`;

    const metaDescription = data.metaDescription
      ? data.metaDescription.length > 160
        ? `${data.metaDescription.substring(0, 157)}...`
        : data.metaDescription
      : "Discover insightful financial tips and updates from Deepan India Financial Services.";

    const seoTitle = data.title
      ? data.title.length > 60
        ? `${data.title.substring(0, 57)}... | Deepan India`
        : `${data.title} | Deepan India`
      : "Blog Post | Deepan India Financial Services";
      
    const canonicalUrl = `https://yourdomain.com/card-details/${id}`; // Replace with your actual domain

    return {
      title: seoTitle,
      description: metaDescription,
      keywords: data.keywords || "finance, investment, financial services, deepan india, blog",
      authors: [{ name: data.author || "Deepan India" }],
      robots: "index, follow",
      openGraph: {
        title: seoTitle,
        description: metaDescription,
        images: [{ url: imageSrc }],
        url: canonicalUrl,
        type: "article",
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
  } catch (err) {
    console.error("Metadata generation failed:", err);
    return {
      title: "Blog Not Found | Deepan India",
      description: "The requested blog post could not be found.",
    };
  }
}

// This is the Page component. It's a Server Component by default.
// It simply renders the client component.
export default function CardDetailsPage() {
  return <CardDetailsClient />;
}