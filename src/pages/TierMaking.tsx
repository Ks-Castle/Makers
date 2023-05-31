import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { tierListArrayState } from "@/data/recoil";
import { RESOLUTION } from "@/data/str";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const TierMaking = () => {
  const tierListArray = useRecoilValue(tierListArrayState);
  const param = decodeURIComponent(
    document.location.href.split("/").pop() || ""
  );
  const data = tierListArray.find((item) => item.title === param);

  return (
    <Layout>
      <Head link="Tier Maker" />
      <Wrapper>
        <TierContainer></TierContainer>
        <TierContainer></TierContainer>
        <TierContainer></TierContainer>
        <TierContainer></TierContainer>
        <ImageBoxContainer>
          {data?.imgs.map((img) => {
            return <Box url={img} />;
          })}
        </ImageBoxContainer>
      </Wrapper>
    </Layout>
  );
};

export default TierMaking;

const Wrapper = styled.div`
  ${flex({ direction: "column", gap: "1rem" })}
  overflow: scroll;
  width: 100%;
  height: 100%;
`;

const TierContainer = styled.div`
  ${flex({ align: "flex-start" })}
  max-width: ${RESOLUTION.PC}px;
  width: 90%;
  height: 100px;
  border: 1px solid black;
`;

const ImageBoxContainer = styled.div`
  ${flex({})}
  flex-wrap: wrap;
  max-width: ${RESOLUTION.PC}px;
  width: 90%;
  max-height: 200px;
  border: 1px solid black;
  overflow: scroll;
`;

const Box = styled.div<{ url: string }>`
  width: 70px;
  height: 70px;
  background-image: ${(props) => props.url && `url(${props.url})`};
  background-position: center;
  background-size: cover;
  @media (max-width: ${RESOLUTION.TABLET}px) {
    width: 50px;
    height: 50px;
  }
`;
