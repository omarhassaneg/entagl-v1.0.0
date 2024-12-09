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
    },
    {
      slug: 'ai-driven-sales-strategies',
      title: 'AI-Driven Sales Strategies That Actually Work',
      excerpt: 'Learn how businesses are leveraging AI to boost sales performance and improve customer engagement.',
      publishDate: '2024-02-01',
      category: 'Business',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786',
      author: {
        name: 'David Kim',
        avatar: 'https://i.pravatar.cc/150?u=david'
      }
    },
    {
      slug: 'ethical-ai-development',
      title: 'The Importance of Ethical AI Development',
      excerpt: 'Exploring the critical considerations and best practices for developing ethical AI solutions.',
      publishDate: '2024-01-28',
      category: 'AI Technology',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9',
      author: {
        name: 'Lisa Chen',
        avatar: 'https://i.pravatar.cc/150?u=lisa'
      }
    },
    {
      slug: 'healthcare-ai-revolution',
      title: 'How AI is Revolutionizing Healthcare Services',
      excerpt: 'Discover the transformative impact of AI technology in modern healthcare delivery and patient care.',
      publishDate: '2024-01-25',
      category: 'Case Studies',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      author: {
        name: 'Dr. James Wilson',
        avatar: 'https://i.pravatar.cc/150?u=james'
      }
    },
    {
      slug: 'ai-customer-experience',
      title: 'Enhancing Customer Experience with AI',
      excerpt: 'Practical strategies for using AI to improve customer satisfaction and loyalty.',
      publishDate: '2024-01-20',
      category: 'Business',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
      author: {
        name: 'Rachel Thompson',
        avatar: 'https://i.pravatar.cc/150?u=rachel'
      }
    },
    {
      slug: 'ai-automation-trends',
      title: '2024 AI Automation Trends to Watch',
      excerpt: 'Stay ahead of the curve with these emerging trends in AI automation and business transformation.',
      publishDate: '2024-01-15',
      category: 'Industry News',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      author: {
        name: 'Alex Martinez',
        avatar: 'https://i.pravatar.cc/150?u=alex'
      }
    },
    {
      slug: 'small-business-ai',
      title: 'AI Solutions for Small Businesses',
      excerpt: 'How small businesses can leverage AI technology to compete with larger enterprises.',
      publishDate: '2024-01-10',
      category: 'Business',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1539278670307-a69d04dc8a75',
      author: {
        name: 'Sophie Anderson',
        avatar: 'https://i.pravatar.cc/150?u=sophie'
      }
    }
  ];
}