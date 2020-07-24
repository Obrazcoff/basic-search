import React from 'react';
import './App.css';
import UsersList from './containers/user-list';
import UserSearch from './containers/user-search';
import UserDetails from './containers/user-details';

function App(props) {
  return (
    <div className="app">
      <div className="left_side">
        <UserSearch searchLink={props.match.params.searchString} />
      </div>
      <div className="main">
        <div className="content">
          <h2>Users list:</h2>
          <UsersList />
        </div>
      </div>

      <div className="right_side">
        <h3>User Details:</h3>
        <UserDetails key={Math.random()} />
      </div>
    </div>
  );
}

export default App;
