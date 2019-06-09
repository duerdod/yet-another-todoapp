import React from 'react';
import { Global } from '@emotion/core';
import theme, { styleReset } from './Components/Theme';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Header from './Components/Header';
import Todos from './Components/Todos';

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 550px;
  min-width: 500px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Global styles={{ styleReset }} />
        <Header />
        <Todos />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
