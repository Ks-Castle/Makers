import flex from "@/assets/styles/flex";
import React from "react";
import styled from "styled-components";

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
  width: 90%;
  height: 100%;
  padding: 1rem;
  margin-top: 4rem;
`;
