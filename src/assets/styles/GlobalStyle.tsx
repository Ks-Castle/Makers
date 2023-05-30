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

body {
  background-color: var(--background);
  color: var(--text-color);
}

:root {
    --white: #fff;
    --black: #000;
    --background: var(--white);
    --text-color: var(--black);
    --background-dark: #000; /* 추가: 다크 모드 배경 색상 */
    --text-color-light: #fff; /* 추가: 다크 모드 텍스트 색상 */
}

.dark-mode {
    --background: var(--background-dark);
    --text-color: var(--text-color-light);
}

input, input:focus{
  border: none;
  outline: none;
}


a {
  text-decoration: none;
  color: var(--text-color);
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
  darkMode &&
  `
  body {
    background-color: var(--background-dark);
    color: var(--text-color-light);
  }
`}
`;

export default GlobalStyle;
