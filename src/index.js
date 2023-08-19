import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';
import { Azzhakrutt } from './Azzhakrutt';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Azzhakrutt />
  </BrowserRouter>
);
