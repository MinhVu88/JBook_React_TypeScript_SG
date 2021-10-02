import React from 'react';

const Events: React.FC = (): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <h1>Section 3 - Types around events & refs</h1>
      <h2>Events</h2>
      <input type="text" onChange={handleChange}/>
      <div draggable onDragStart={handleDragStart}>Drag Me</div>
    </div>
  );
};

export default Events;
