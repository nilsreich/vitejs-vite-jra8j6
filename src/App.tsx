import { Component, createSignal } from 'solid-js';
import { Tiptap } from './Tiptap';

import { Comp } from './Comp';
type AppProps = {
  foo: string;
};

export const App: Component<AppProps> = ({ foo }) => {
  const [count, setCount] = createSignal(0);
  const [textsize, setTextsize] = createSignal('text-3xl');

  const handleClick = (value: string) => {
    setTextsize(value);
    console.log(value);
  };

  return (
    <>
      <button
        class={textsize()}
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        {count()} - {foo}
      </button>
      <Comp parentcallback={handleClick} />
      <Tiptap />
    </>
  );
};
