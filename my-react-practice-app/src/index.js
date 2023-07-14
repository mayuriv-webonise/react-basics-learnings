import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../src/components/App.js';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <React.StrictMode>
  {/*  New line */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>);

reportWebVitals();


