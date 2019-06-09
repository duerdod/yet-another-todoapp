import React from 'react';
import styled from '@emotion/styled';

const Logo = styled.div``;

const LogoText = styled.h1`
  font-size: 3.4rem;
  text-align: center;
  margin: 0;
  font-weight: 800;
  margin: 0.3rem 0.5rem 0.3rem 0.5rem;
  color: #eb1251;
  text-shadow: 5px 5px 0 #032c57;
  transform: skew(0deg, -2deg);
  font-family: sans-serif;
  letter-spacing: 0.08em;
  line-height: 4.5rem;
`;

const Header = () => {
  return (
    <Logo>
      <LogoText>Majas attgöra-lista</LogoText>
    </Logo>
  );
};

export default Header;
