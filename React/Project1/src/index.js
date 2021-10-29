import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jon from './Jon';
import List from './List'

ReactDOM.render(
  <React.StrictMode>
    <Jon />
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);
