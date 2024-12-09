import { getAllPosts } from '../../utils/blog';

export async function GET() {
  const posts = await getAllPosts();
  return new Response(JSON.stringify(posts), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}