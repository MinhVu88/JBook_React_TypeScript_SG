import React, {useState, useEffect} from 'react';

const users = [
  {name: 'Maynard Keenan', age: 57},
  {name: 'Adam Jones', age: 56},
  {name: 'Justin Chancellor', age: 47},
  {name: 'Paul D\'Amour', age: 55},
  {name: 'Dan Carey', age: 60}
];

const UserSearchFC: React.FC = (): JSX.Element => {
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>();

  useEffect(() => {
    setMsg('');
    setUser(undefined);
  }, [])

  const handleBtnClick = (): void => {
    setName('');

    const foundUser = users.find(user => {
      return user.name === name;
    });

    if (foundUser === undefined) {
      setMsg('User Not Found');
      setUser(undefined);
    } else {
      setMsg('');
      setUser(foundUser);
    }
  };

  return (
    <div>
      <h2>User Search (functional component)</h2>
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} 
      />
      <button onClick={handleBtnClick}>Find User</button>
      {user && <><h3>Name: {user.name} | Age: {user.age}</h3></>}
      {<><h3>{msg}</h3></>}
    </div>
  );
};

export default UserSearchFC;
