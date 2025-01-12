import { prismaClient } from '../lib/prisma';

async function main() {
  try {
    const count = await prismaClient.post.count();
    console.log('Connection successful');
    console.log('Number of posts:', count);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

main();