import { flex, font } from "@/assets/styles/index";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import styled from "styled-components";
import DisplayArea from "./components/DisplayArea";

const MapleEvents = () => {
  return (
    <Layout>
      <Head link="MapleEvents" desc="Current and Past Events of MapleStory" />
      <Wrapper>
        <DisplayArea />
      </Wrapper>
    </Layout>
  );
};

export default MapleEvents;

const Wrapper = styled.div`
  ${flex({ direction: "column", justify: "flex-start", gap: "1rem" })}
  width: 100%;
  height: 100%;
  .date {
    ${font({ weight: 900 })}
    text-align: center;
  }
`;
