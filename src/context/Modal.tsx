import flex from "@/assets/styles/flex.js";
import { Z_INDEX } from "@/data/str.js";
import React from "react";
import styled from "styled-components";

const Modal = () => {
  return <Wrapper>Modal</Wrapper>;
};

export default Modal;

const Wrapper = styled.div`
  ${flex({})}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.MODAL};
  background: #00000050;
`;
