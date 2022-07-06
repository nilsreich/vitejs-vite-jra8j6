import { Component } from 'solid-js';
import StarterKit from '@tiptap/starter-kit';
import { createEditor, EditorContent } from 'tiptap-solid';
import Extension from './Extension';

export const Tiptap: Component = () => {
  const editor = createEditor({
    extensions: [StarterKit, Extension],
    content: `Hello    <solid-component count="5">
    <p>
      Editable
    </p>
  </solid-component>!`,
  });
  return (
    <>
      <button
        onClick={() =>
          editor()?.chain().focus().insertContent('<solid-component />').run()
        }
      >
        insert
      </button>
      <EditorContent editor={editor()} />
    </>
  );
};
