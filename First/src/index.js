import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';

function App () {
  return (
    <Counter />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
