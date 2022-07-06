import { Component } from 'solid-js';

type CompProps = {
  parentcallback: (value: string) => void;
};

export const Comp: Component<CompProps> = ({ parentcallback }) => {
  return (
    <div class="bg-red-50" onClick={() => parentcallback('text-xs')}>
      Hallo
    </div>
  );
};
