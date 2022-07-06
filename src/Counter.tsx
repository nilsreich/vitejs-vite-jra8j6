import { NodeViewProps } from '@tiptap/core';
import { Component } from 'solid-js';
import { NodeViewWrapper } from 'tiptap-solid';

const Counter: Component<NodeViewProps> = (props) => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    });
  };

  return (
    <NodeViewWrapper className="solid-component">
      <span contenteditable={false} class="bg-blue-500 text-white">
        Solid Component
      </span>

      <div contenteditable={false} class="content">
        <button onClick={increase}>
          This button has been clicked {props.node.attrs.count} times.
        </button>
      </div>
    </NodeViewWrapper>
  );
};
export default Counter;
