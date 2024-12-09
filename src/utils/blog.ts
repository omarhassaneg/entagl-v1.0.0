export async function getAllPosts() {
  // This is mock data - in a real application, this would fetch from a CMS or database
  return [
    {
      slug: 'ai-transformation-success',
      title: 'How AI Transformed Customer Service for a Global Retail Chain',
      excerpt: 'Discover how implementing AI-powered customer service solutions led to a 40% increase in customer satisfaction and significant cost savings.',
      publishDate: '2024-02-15',
      category: 'Case Studies',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/150?u=sarah'
      }
    },
    {
      slug: 'future-of-ai-agents',
      title: 'The Future of AI Agents in Business Operations',
      excerpt: 'Explore the emerging trends and possibilities in AI agent technology and how they are reshaping business operations.',
      publishDate: '2024-02-10',
      category: 'AI Technology',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
      author: {
        name: 'Michael Chen',
        avatar: 'https://i.pravatar.cc/150?u=michael'
      }
    },
    {
      slug: 'ai-implementation-guide',
      title: 'A Complete Guide to Implementing AI in Your Business',
      excerpt: 'Step-by-step guide to successfully integrating AI solutions into your business operations, from planning to execution.',
      publishDate: '2024-02-05',
      category: 'Business',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      author: {
        name: 'Emily Rodriguez',
        avatar: 'https://i.pravatar.cc/150?u=emily'
      }
    }
  ];
}