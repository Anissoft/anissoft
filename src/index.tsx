import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { Root } from './app/App';
import { theme } from './theme';

render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <BrowserRouter basename="/">
        <Root />
      </BrowserRouter>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);