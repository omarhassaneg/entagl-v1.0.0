import { getCollection } from 'astro:content';
import fs from 'fs/promises';
import path from 'path';

async function generateBlogData() {
  try {
    // Get all blog posts
    const blogPosts = await getCollection('blog');
    
    // Transform the data
    const data = blogPosts.map((post) => ({
      slug: post.slug,
      title: post.data.title,
      excerpt: post.data.excerpt,
      publishDate: post.data.publishDate,
      category: post.data.category,
      readTime: post.data.readTime,
      image: post.data.image,
      author: post.data.author
    }));

    // Sort posts by date (newest first)
    data.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    // Create the public directory if it doesn't exist
    await fs.mkdir(path.join(process.cwd(), 'public'), { recursive: true });

    // Write the JSON file
    await fs.writeFile(
      path.join(process.cwd(), 'public', 'blog-data.json'),
      JSON.stringify(data, null, 2),
      'utf-8'
    );

    console.log('✅ Blog data generated successfully!');
  } catch (error) {
    console.error('❌ Error generating blog data:', error);
    process.exit(1);
  }
}

generateBlogData();