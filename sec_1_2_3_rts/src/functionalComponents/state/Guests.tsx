import React, {useState} from 'react';

const Guests: React.FC = (): JSX.Element => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleBtnClick = (): void => {
    setName('');

    setGuests([...guests, name]);
  };

  return (
    <div>
      <h2>Guest list</h2>
      <ul>
        {guests.map((guest, index) => <li key={index}>{guest}</li>)}
      </ul>
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleBtnClick}>Add Guest</button>
    </div>
  );
};

export default Guests;
