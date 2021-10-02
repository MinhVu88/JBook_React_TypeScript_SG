import React, {useState, useEffect, useRef} from 'react';

const users = [
  {name: 'Chris Cornell', age: 57},
  {name: 'Kim Thayil', age: 56},
  {name: 'Hiro Yamamoto', age: 47},
  {name: 'Scott Sundquist', age: 55},
  {name: 'Matt Cameron', age: 60},
  {name: 'Jason Everman', age: 50},
  {name: 'Ben Shepherd', age: 40}
];

const UserSearchRefs: React.FC = (): JSX.Element => {
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setMsg('');
    setUser(undefined);

    if(!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, []);

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
      <h2>User Search (useRef)</h2>
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputRef} 
      />
      <button onClick={handleBtnClick}>Find User</button>
      {user && <><h3>Name: {user.name} | Age: {user.age}</h3></>}
      {<><h3>{msg}</h3></>}
    </div>
  );
};

export default UserSearchRefs;
