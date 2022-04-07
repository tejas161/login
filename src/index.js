import React from 'react';
import ReactDOm from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js';

ReactDOm.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
,
document.getElementById('root')
);