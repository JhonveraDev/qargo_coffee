import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.router';
import { BrowserRouter } from 'react-router-dom';

import "./assets/styles/global.css";
import "./assets/styles/reset.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);