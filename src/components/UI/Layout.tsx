import flex from "@/assets/styles/flex";
import React from "react";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentsWrapper>
      <Contents>{children}</Contents>
    </ContentsWrapper>
  );
};

export default Layout;

const ContentsWrapper = styled.div`
  ${flex({ direction: "column" })}
  height:calc(100vh - 60px);
  margin-top: 60px;
`;

const Contents = styled.div`
  ${flex({})}
  width: 90%;
  height: 100%;
  padding: 1rem;
`;
