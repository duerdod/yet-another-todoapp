import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  margin-left: 18px;
  font-size: 1.2rem;
  background: none;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.primary};
  ${({ theme }) => `${theme.media[0]} 
    margin: 0 0 0 4px;
    padding: 6px;
  }`}
`;

export default Button;
