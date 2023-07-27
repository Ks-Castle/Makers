import flex from "@/assets/styles/flex.js";
import React from "react";
import styled from "styled-components";

const Modal = () => {
  return <Wrapper>Modal</Wrapper>;
};

export default Modal;

const Wrapper = styled.div`
  ${flex({})}
  font-weight: 700;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: #00000050;
`;
