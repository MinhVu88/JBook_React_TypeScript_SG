import React from 'react';
import ReactDOM from 'react-dom';
import Events from './functionalComponents/events/Events';
import Parent from './functionalComponents/props/Parent';
import Guests from './functionalComponents/state/Guests';
import UserSearchFC from './functionalComponents/state/UserSearchFC';
import UserSearchCC from './classComponents/UserSearchCC';
import UserSearchRefs from './functionalComponents/refs/UserSearchRefs';

const users = [
  {name: 'Jerry Cantrell', age: 37},
  {name: 'Layne Staley', age: 36},
  {name: 'Mike Starr', age: 27},
  {name: 'Sean Kinney', age: 35},
  {name: 'Mike Inez', age: 40},
  {name: 'William DuVall', age: 30}
];

const App = (): JSX.Element => {
  return (
    <>
      <Parent/>
      <hr />
      <Guests/>
      <hr />
      <UserSearchFC/>
      <hr />
      <Events/>
      <hr />
      <UserSearchCC users={users}/>
      <hr />
      <UserSearchRefs/>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
