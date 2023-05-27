import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import Tier from "@/components/UI/Tier";
import { TierListDTO } from "@/data/DTO";
import { db } from "@/data/firebase";
import { RESOLUTION } from "@/data/str";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TierList = () => {
  const [data, setData] = useState<TierListDTO[]>([]);

  useEffect(() => {
    const dbCollection = collection(db, `tierLists`);
    const getData = async () => {
      const data = await getDocs(dbCollection);
      return setData(data.docs.map((doc) => doc.data() as TierListDTO));
    };
    getData();
  }, []);

  return (
    <Layout>
      <Head link="Tier Lists" />
      <Wrapper>
        {data?.map((v: TierListDTO, i: number) => {
          return <Tier data={v} key={i} />;
        })}
      </Wrapper>
    </Layout>
  );
};

export default TierList;

const Wrapper = styled.div`
  ${flex({ align: "flex-start" })}
  display: grid;
  overflow: scroll;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  @media (max-width: ${RESOLUTION.PC}px) {
    grid-template-columns: repeat(3, 160px);
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    grid-template-columns: repeat(1, 200px);
  }
`;
