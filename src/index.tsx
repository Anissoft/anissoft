import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Root } from './app/App';

const generateClassName = createGenerateClassName({
  productionPrefix: 'css',
  disableGlobal: true,
});


render(
  <BrowserRouter basename="/">
    <StylesProvider generateClassName={generateClassName}>
      <Root />
    </StylesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);