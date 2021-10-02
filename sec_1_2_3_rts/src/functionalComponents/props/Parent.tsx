import React from 'react';
import { Child } from './Child';

const Parent = (): JSX.Element => {
  return (
    <Child 
      section={2} 
      handleBtnClick={() => alert('clicked')}
    >
      This's the Child component's children prop
    </Child>
  );
};

export default Parent;
