import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 15px;
  font-weight: bold;
  padding: 16px 24px;
  outline: none;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  }

  &:hover,
  &:focus {
    opacity: .5;
  }
`;
const Toggle = ({ theme, toggleTheme }) => (
  <Button onClick={toggleTheme}>
    Alterar Tema
  </Button>
);
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
