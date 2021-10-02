import React from 'react';

interface ChildProps {
  section: number;
  handleBtnClick: () => void;
}

// Approach 1: a React function component with TS (not recommended)
// export const Child = ({section}: ChildProps): JSX.Element => {
//   return (
//     <div>
//       <h1>Section {section} - Types around props & state</h1>
//     </div>
//   );
// };

// Approach 2 (recommended)
export const Child: React.FC<ChildProps> = ({
  section, 
  handleBtnClick, 
  children
}): JSX.Element => {
  return (
    <div>
      <h1>Section {section} - Types around props & state</h1>
      <h2>{children}</h2>
      <button onClick={handleBtnClick}>Click Here</button>
    </div>
  );
};
