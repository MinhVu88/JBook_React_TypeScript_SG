import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux';
import Packages from './Packages';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{textAlign: 'center'}}>
        <h1>Section 4 - TypeScript with Redux | NPM Packages Search</h1>
        <Packages/>
      </div>
    </Provider>
  );
}

export default App;
