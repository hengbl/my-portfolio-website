import { Editor } from '@tiptap/react';
import {
    BoldIcon,
    CodeBracketIcon,
    ItalicIcon,
    UnderlineIcon,
  } from '@heroicons/react/24/outline';
import { MenuButton } from './editorToolbarMenuButton';

interface EditorToolbarMenuProps {
    editor: Editor | null
}

/**
 * Editor toolbar menu with all the tool buttons
 */
export const EditorToolbarMenu = ({ editor }: EditorToolbarMenuProps) => (
    <div className="sticky top-0 z-10 flex flex-wrap gap-1 p-2 mb-4 
    bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        
        {/* Bold button */}
        <MenuButton
            onClick={() => editor?.chain().focus().toggleBold().run()}
            isActive={editor?.isActive('bold')}
            icon={BoldIcon}
            title="Bold"
            shortcut="⌘+B"
        />
        
        {/* Italic button */}
        <MenuButton
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            isActive={editor?.isActive('italic')}
            icon={ItalicIcon}
            title="Italic"
            shortcut="⌘+I"
        />
        
        {/* Underline button */}
        <MenuButton
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            isActive={editor?.isActive('underline')}
            icon={UnderlineIcon}
            title="Underline"
            shortcut="⌘+U"
        />
        
        {/* vertical separator line */}
        <div className="w-px h-6 mx-2 bg-gray-200 dark:bg-gray-700" />
        
        {/* Codeblock button */}
        <MenuButton
            onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
            isActive={editor?.isActive('codeBlock')}
            icon={CodeBracketIcon}
            title="Code Block"
            shortcut="⌘+alt+C"
        />
    </div>
);