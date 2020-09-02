import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;  
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        margin: 0;
        font-family: Roboto;    
        transition: all 0.3s linear;
        --primary: #2a7ae4;
        --black: #000;
        --blackLighter: #9e9e9e;
        --grayLight: #f5f5f5;
        --grayMedium: #e5e5e5;
        --white: #fff;
        --frontEnd: #6bd1ff;
        --backEnd: #00c86f;
    }
    .Menu {
        background: ${({ theme }) => theme.body};
        transition: all 0.3s linear;
    }
    .ButtonLink {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        border: 1px solid ${({ theme }) => theme.toogleBorder};
        
    }
`;
