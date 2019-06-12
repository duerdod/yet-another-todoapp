import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const isActive = css`
  opacity: 0.4 !important;
`;

const Wrapper = styled.span`
  padding: 4px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  border: 4px solid rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  ${p => (p.active ? `opacity: 0.4;` : `opacity: 1;`)}

  svg {
    font-size: 1.5rem;
  }
`;

const IconWrapper = ({ children, active }) => (
  <Wrapper active={active}>{children}</Wrapper>
);

export default IconWrapper;
