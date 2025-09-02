/* Entry point to React app */
/* It’s the bridge to connects plain HTML (index.html) with React components (App.js) */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // No need to import again in App.js
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // This is where it inserts the react component into the empty div with id=root in index.html
  // React.StrictMode helps with development, catching problems
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
