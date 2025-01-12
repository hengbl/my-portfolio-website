import { prismaClient } from '@/lib/prisma';
import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import { Post } from '@/lib/types';
import { getUserSession } from '@/lib/utils';

export default async function BlogPage() {
  const session = await getUserSession();
  const posts = await prismaClient.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <SectionHeading>Blog</SectionHeading>

      {/* Create Post Button - Only shown when logged in */}
      {session && (
        <div className="flex justify-end mb-8">
          <Link
            href="/blog/create"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
              outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
              transition cursor-pointer borderBlack dark:bg-white/10"
          >
            Create Post
          </Link>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="flex flex-col gap-4">
        {posts.map((post: Post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.id}`}
            className="group bg-gray-100 max-w-[42rem] border border-black/5 
              rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem]
              hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white
              dark:bg-white/10 dark:hover:bg-white/20"
          >
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}