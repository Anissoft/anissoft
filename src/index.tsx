import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { Root } from './app/App';

render(
  <BrowserRouter basename="/">
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
);