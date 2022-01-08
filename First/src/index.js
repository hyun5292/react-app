import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './components/UserList';

function App () {
  return (
    <UserList />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
