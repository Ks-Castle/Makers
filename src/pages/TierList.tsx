import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { db } from "@/data/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TierList = () => {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const dbCollection = collection(db, `tierLists`);
    const getData = async () => {
      const data = await getDocs(dbCollection);
      return setData(data.docs.map((doc) => doc.data()));
    };
    getData();
  }, []);

  return (
    <Layout>
      <Head link="Tier Lists" />
      <Wrapper>ss</Wrapper>
    </Layout>
  );
};

export default TierList;

const Wrapper = styled.div`
  ${flex({ justify: "flex-start", align: "flex-start" })}
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
