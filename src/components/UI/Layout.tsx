import flex from "@/assets/styles/flex";
import { RESOLUTION } from "@/data/str";
import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentsWrapper>
      {/* <Header /> */}
      <Contents>{children}</Contents>
    </ContentsWrapper>
  );
};

export default Layout;

const ContentsWrapper = styled.div`
  ${flex({ direction: "column" })}
  height: 100vh;
`;

const Contents = styled.div`
  ${flex({})}
  /* max-width: ${RESOLUTION.PC}px; */
  width: 90%;
  height: 100%;
  padding: 1rem;
  margin-top: 4rem;
`;
