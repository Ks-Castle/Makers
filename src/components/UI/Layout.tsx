import flex from "@/assets/styles/flex";
import GoogleAdvertise from "@/context/GoogleAds";
import { infeedPropsOne } from "@/data/ads";
import React from "react";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentsWrapper>
      <div className="ads-row">
        <GoogleAdvertise {...infeedPropsOne} />
        <GoogleAdvertise {...infeedPropsOne} />
        <GoogleAdvertise {...infeedPropsOne} />
        <GoogleAdvertise {...infeedPropsOne} />
        <GoogleAdvertise {...infeedPropsOne} />
        <GoogleAdvertise {...infeedPropsOne} />
      </div>
      <Contents>{children}</Contents>
    </ContentsWrapper>
  );
};

export default Layout;

const ContentsWrapper = styled.div`
  ${flex({ direction: "column" })}
  height:calc(100vh - 60px);
  margin-top: 60px;
  .ads-row {
    ${flex({})}
  }
`;

const Contents = styled.div`
  ${flex({})}
  width: 90%;
  height: 90%;
  padding: 1rem;
`;
