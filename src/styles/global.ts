import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.blue};
  }

  body {
    line-height: 1.6;
    
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    `}
  }

  body,
  input,
  textarea,
  button,
  select {
    font: 400 1rem "Nunito", sans-serif;
  }

  a,
  button {
    cursor: pointer;
  }

  input,
  button {
    border: 0;
    background: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
  }
`;
