import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/prisma';
import { isLoggedIn } from '@/lib/utils';

async function handler(req: Request) {
  if (req.method === 'POST') {
    // Only allow authenticated users to create posts
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    try {
      const { title, content } = await req.json();
      const post = await prismaClient.post.create({
        data: { title, content }
      });
      return NextResponse.json(post);
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to create post' },
        { status: 500 }
      );
    }
  }

  if (req.method === 'GET') {
    // Anyone can read posts
    try {
      const posts = await prismaClient.post.findMany({
        orderBy: { createdAt: 'desc' }
      });
      return NextResponse.json(posts);
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch posts' },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export { handler as GET, handler as POST };