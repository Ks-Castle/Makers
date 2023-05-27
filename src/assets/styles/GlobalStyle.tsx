import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "../fonts/font.css";

const GlobalStyle = createGlobalStyle`
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
body{
}

:root {
    --white: #fff;
    --black: #000;
    --blue:#2662f0;
    --gray-light: #D7D7D7;
    --warning: #e95050;
    --placeholder: #929eb8;
}

input, input:focus{
  border: none;
  outline: none;
}


a {
  text-decoration: none;
  color: var(--black);
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

`;
export default GlobalStyle;
