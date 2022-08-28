import * as React from 'react';

import ContrastChecker from './steps/ContrastChecker'

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App = ({ }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <ContrastChecker />
    </ThemeProvider>
  );
};

export default App;
