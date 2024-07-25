import { createGlobalStyle, css } from "styled-components";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    background-color: ${({ theme }) => theme.colors.brand[100]};
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.metrics.headerHeight};
  }

  body {
    font-family: "Archivo", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.brand[900]};
    color: ${({ theme }) => theme.colors.neutral[200]};
  }

  input,
  textarea,
  button {
    font-family: "Archivo", sans-serif;
    font-weight: 400;
    background-color: transparent;
    border: none;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  a:focus-visible,
  button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.brand[100]};
    border-radius: 0.375rem;
  }

  p {
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`${style}`;

export default GlobalStyle;
