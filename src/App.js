import React from 'react';
import { Global } from '@emotion/core';
import theme, { styleReset } from './Components/Theme';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Header from './Components/Header';
import Todos from './Components/Todos';

const AppContainer = styled.div`
  margin: 6rem auto;
  padding: 20px 10px 40px 10px;
  max-width: 550px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  ${({ theme }) => `${theme.media[0]} 
    margin: 0;
    padding: 6px;
  }`}
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
