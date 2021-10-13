import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RestrictionStateProvider from './context/RestrictionContext';


ReactDOM.render(
  <RestrictionStateProvider>
      <App />
  </RestrictionStateProvider>,
    document.getElementById('root')
);



