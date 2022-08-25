import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

const a = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {a ? <App /> : <h1>Hello From JS</h1>}
  </React.StrictMode>
);