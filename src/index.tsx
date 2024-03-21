import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss'
import App from './App';
import JSApp from './JSApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <JSApp />
  </React.StrictMode>
);

