// app/Blog/blogs/page.js

import { instance, Url } from "../../../utils/api";
import { defaultCards } from "../../components/details/DefaultCard";
import BlogsClient from "./BlogsClient"; // Import your client component

// --- Server-Side Data Fetching Functions ---

// Fetches ALL blogs for the list component.
async function getAllBlogs() {
  try {
    const response = await instance.get("/landing/customer/Blogs");
    // If API returns data, use it. Otherwise, fall back to defaultCards.
    return response.data && response.data.length > 0 ? response.data : defaultCards;
  } catch (error) {
    console.error("API Error: Could not fetch all blogs. Using default cards.", error);
    return defaultCards; // Return default cards on API failure
  }
}

// Fetches a SINGLE blog by ID. Needed for generating specific metadata.
async function getBlogById(id) {
  if (!id) return null;
  try {
    // NOTE: This assumes you have an API endpoint like /Blogs/{id}
    // If not, this will fail and the fallback below will run.
    const response = await instance.get(`/landing/customer/Blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`API Error: Could not fetch blog with ID ${id}. Falling back to searching the list.`, error);
    // Fallback: If single fetch fails, get all blogs and find it.
    const allBlogs = await getAllBlogs();
    return allBlogs.find(blog => String(blog.id) === String(id)) || null;
  }
}

// --- METADATA GENERATION FOR SOCIAL SHARING ---
export async function generateMetadata({ searchParams }) {
  const blogId = searchParams.get("id");

  let blog = null;
  if (blogId) {
    blog = await getBlogById(blogId);
  }

  // If a specific blog is found, use its data for metadata
  if (blog) {
    return {
      title: blog.title,
      description: blog.metaDescription,
      openGraph: {
        title: blog.title,
        description: blog.metaDescription,
        // The image URL MUST be an absolute path for social crawlers
        images: [{
          url: `${Url}${blog.image}`, // e.g., https://your-api-domain.com/path/to/image.jpg
          width: 1200,
          height: 630,
        }],
        type: 'article',
        // IMPORTANT: Replace with your actual website domain
        url: `https://yourwebsite.com/Blog/blogs?id=${blog.id}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.metaDescription,
        images: [`${Url}${blog.image}`],
      },
    };
  }

  // --- DEFAULT METADATA ---
  // If no blog ID is in the URL, or the blog wasn't found, return default metadata.
  return {
    title: "Our Blog | Insights and News",
    description: "Explore the latest articles, insights, and news from our team.",
    openGraph: {
      title: "Our Blog | Insights and News",
      description: "Explore the latest articles, insights, and news from our team.",
      images: [{
        url: `https://yourwebsite.com/default-blog-image.jpg`, // Provide a default fallback image
        width: 1200,
        height: 630,
      }],
    }
  };
}

// --- The Page Component (Server Component) ---
export default async function BlogPage() {
  // Fetch all blogs on the server to pass to the client component.
  // This happens once during the server render.
  const allBlogsData = await getAllBlogs();

  return (
    // Render the client component and pass the pre-fetched data as a prop.
    <BlogsClient initialBlogs={allBlogsData} />
  );
}