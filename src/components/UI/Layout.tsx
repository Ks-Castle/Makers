import flex from "@/assets/styles/flex";
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { ENUM } from "@/data/Enum";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ContentsWrapper>
      <Header />
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
  ${flex({ align: "flex-start" })}
  max-width: ${ENUM.RESOLUTION_PC}px;
  width: 90%;
  height: 100%;
  padding: 1rem;
  border: 1px solid black;
`;
