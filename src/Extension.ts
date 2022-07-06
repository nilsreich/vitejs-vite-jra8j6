import { Node, mergeAttributes } from '@tiptap/core';
import { SolidNodeViewRenderer } from 'tiptap-solid';
import Counter from './Counter';

export default Node.create({
  name: 'solidComponent',
  group: 'block',
  atom: true,
  addAttributes() {
    return {
      count: {
        default: 0,
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'solid-component',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['solid-component', mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return SolidNodeViewRenderer(Counter);
  },
});
