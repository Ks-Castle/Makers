import useGetMapleNews from "@/api/hooks_maple/useGetMapleNews";
import { flex } from "@/assets/styles/index";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { RESOLUTION } from "@/data/str";
import styled from "styled-components";
import { fetchingDefaultDTO } from "./DTO/index";
import useGetMapleOldNews from "@/api/hooks_maple/useGetMapleOldNews.js";
import HoverBox from "./components/HoverBox";

const MapleEvents = () => {
  const mapleNewsAPI = useGetMapleNews();
  const mapleOldNewsAPI = useGetMapleOldNews();
  return (
    <Layout>
      <Head link="MapleEvents" desc="Current and Past Events of MapleStory" />
      <Wrapper>
        <GridWrapper>
          {mapleNewsAPI.data?.map((v: fetchingDefaultDTO, i: number) => {
            return (
              <HoverBox img={v.photo} key={i} title={v.title} link={v.link} />
            );
          })}
          {mapleOldNewsAPI.data?.map((v: fetchingDefaultDTO, i: number) => {
            return (
              <HoverBox img={v.photo} key={i} title={v.title} link={v.link} />
            );
          })}
        </GridWrapper>
      </Wrapper>
    </Layout>
  );
};

export default MapleEvents;

const Wrapper = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 100%;
`;

const GridWrapper = styled.div`
  ${flex({ align: "flex-start" })}
  display: grid;
  overflow: scroll;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 1rem;
  width: 100%;
  @media (max-width: ${RESOLUTION.PC}px) {
    grid-template-columns: repeat(3, 170px);
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    grid-template-columns: repeat(1, 200px);
  }
`;
