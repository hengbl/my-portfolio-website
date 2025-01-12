import CreatePost from "@/components/blog/createPostComponent";
import { redirect } from "next/navigation";
import { isLoggedIn } from "@/lib/utils";

export default async function CreatePostPage() {
  const isUserLoggedIn = await isLoggedIn();
  if (!isUserLoggedIn) {
    redirect('/blog');
  }
  return (
    <CreatePost />
  );
}