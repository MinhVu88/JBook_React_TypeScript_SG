import React from 'react';
import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { CodeCell } from './components';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <CodeCell/>
    </div>
  );
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
