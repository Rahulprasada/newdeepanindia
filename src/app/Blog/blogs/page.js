// src/app/Blog/blogs/page.js

import { redirect } from 'next/navigation';
import { defaultCards } from "../../components/details/DefaultCard"; // Adjust path
import { slugify } from '../../../utils/slugify'; // Adjust path

// This is a Server Component that handles redirection.
export default function BlogListRedirectPage() {
  // If there are blogs, redirect to the first one using its slug.
  if (defaultCards && defaultCards.length > 0) {
    const firstBlogSlug = slugify(defaultCards[0].title);
    redirect(`/Blog/${firstBlogSlug}`);
  }

  // Fallback if no blogs are found
  return (
    <div>
      <h1>Blogs</h1>
      <p>No blog posts available at the moment.</p>
    </div>
  );
}