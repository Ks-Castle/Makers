import useGetMapleNews from "@/api/hooks_maple/useGetMapleNews";
import { flex } from "@/assets/styles/index";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { RESOLUTION } from "@/data/str";
import styled from "styled-components";
import EventBox from "./components/EventBox";
import { fetchingDefaultDTO } from "./DTO/index";

const MapleEvents = () => {
  const mapleNewsAPI = useGetMapleNews();
  return (
    <Layout>
      <Head link="MapleEvents" desc="Current and Past Events of MapleStory" />
      <Wrapper>
        <GridWrapper>
          {mapleNewsAPI.data?.map((v: fetchingDefaultDTO, i: number) => {
            return <EventBox img={v.photo} key={i} />;
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
