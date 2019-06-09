import React from 'react';
import styled from '@emotion/styled';
import Header from './Components/Header';

const AppContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <span>Hejhej</span>
    </AppContainer>
  );
};

export default App;
