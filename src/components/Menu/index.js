import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalTheme from '../../globalStyles';
import { lightTheme, darkTheme } from '../../theme';
import Toggle from '../Toggler';
import useDarkMode from '../../hooks/useDarkMode';
import Logo from '../../assets/logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalTheme />
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="GameFlix logo" />
        </Link>
        <div className="Buttons">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
          </Button>
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default Menu;
