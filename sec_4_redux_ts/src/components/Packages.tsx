import React, {useState} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

const Packages: React.FC = (): JSX.Element => {
  const {data, error, loading} = useTypedSelector(reduxStoreState => reduxStoreState.packages);

  const [npmPackage, setNpmPackage] = useState('');

  const {searchPackage} = useActions();

  const handleFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchPackage(npmPackage);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          value={npmPackage} 
          onChange={e => setNpmPackage(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {
        !error && 
        !loading && 
        data.map(
          p => <ul key={p} style={{listStyleType: 'none'}}><li>{p}</li></ul>
        )
      }
    </div>
  );
};

export default Packages;
