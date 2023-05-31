import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "../fonts/font.css";

interface GlobalStyleProps {
  darkMode?: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
${reset}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
/* Chrome, Safari, Opera */
::-webkit-scrollbar {
    display: none;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

html{
  font-size: 10px;
  font-family: 'Roboto';
}

:root {
  --dark-000: #fff;
  --dark-010: #F2F2F2;
  --dark-020: #CCC;
  --dark-030: #B3B3B3;
  --dark-040: #999;

  --dark-060: #666;
  --dark-070: #333;
  --dark-080: #1A1A1A;
  --dark-090: #0D0D0D;
  --dark-100: #000;
}

input, input:focus{
  border: none;
  outline: none;
}

a {
  text-decoration: none;
  color: var(--dark-100);
}

button {
  border: none;
    &:hover {
      opacity: 70%;
    }
    &:active{
      opacity: 40%;
    }
    &:disabled{
      opacity: 50%;
      cursor: default;
    }
}

${({ darkMode }) =>
  darkMode
    ? `
  body {
    background-color: var(--dark-070);
    color: var(--dark-000);
  }
`
    : `
  body {
    background-color: var(--dark-000);
    color: var(--dark-090);
  }
`}
`;

export default GlobalStyle;
