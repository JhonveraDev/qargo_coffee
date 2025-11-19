import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/global.css";
import "./assets/styles/reset.css";
import { BrowserRouter } from 'react-router-dom';
import App from './App.router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);