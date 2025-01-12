"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHeading from '@/components/section-heading';
import toast from 'react-hot-toast';
import { EditorToolbarMenu } from './editorToolBarMenu';
import { CancelPostButton, PublishPostButton } from './createPostActionButton';
import { createPost } from '@/lib/utils';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline, 
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'min-h-[300px] prose prose-lg max-w-none dark:prose-invert focus:outline-none p-4',
      },
    },
    immediatelyRender: false,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !editor?.getHTML()) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = createPost(title.trim(), editor.getHTML());
      toast.success('Post created successfully!');
      router.push('/blog');
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto py-10 px-4">
      <SectionHeading>Create New Post</SectionHeading>

      {/* Title Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        className="w-full text-3xl font-bold mb-8 p-4 bg-transparent border-none 
          focus:outline-none focus:ring-0 placeholder:text-gray-400"
        required
      />

      {/* Editor Toolbar */}
      <EditorToolbarMenu editor={editor}/>

      {/* Editor */}
      <div className="min-h-[300px] border dark:border-gray-800 rounded-lg mb-8">
        <EditorContent editor={editor} />
      </div>

      {/* Actions */}
      <div className="flex gap-4 justify-end">
        <CancelPostButton toDisable={isSubmitting} />
        <PublishPostButton router={router} />
      </div>
    </form>
  );
}