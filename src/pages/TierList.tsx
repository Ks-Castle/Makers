import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import Tier from "@/components/UI/Tier";
import Pagination from "@/context/Pagination";
import { TierListDTO } from "@/data/DTO";
import { db } from "@/data/firebase";
import { tierListArrayState } from "@/data/recoil";
import { RESOLUTION } from "@/data/str";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const TierList = () => {
  const [data, setData] = useRecoilState(tierListArrayState);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    const dbCollection = collection(db, "tierLists");

    const getData = async () => {
      const querySnapshot = await getDocs(dbCollection);
      const fetchedData = querySnapshot.docs.map(
        (doc) => doc.data() as TierListDTO
      );
      const sortedData = fetchedData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setData(sortedData);
    };

    getData();
  }, []);
  return (
    <Layout>
      <Head
        link="Tier Lists"
        desc="This is a list regarding the tier table that can be created in Makers. More content will be added in the future, so we kindly ask for your continued interest."
      />
      <Wrapper>
        <GridWrapper>
          {data
            ?.slice(offset, offset + limit)
            ?.map((v: TierListDTO, i: number) => {
              return <Tier data={v} key={i} />;
            })}
        </GridWrapper>
        <Footer>
          {data && (
            <Pagination
              total={data.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          )}
        </Footer>
      </Wrapper>
    </Layout>
  );
};

export default TierList;

const Wrapper = styled.div`
  ${flex({ direction: "column" })}
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
  height: 100%;

  @media (max-width: ${RESOLUTION.PC}px) {
    grid-template-columns: repeat(2, 200px);
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    grid-template-columns: repeat(1, 200px);
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
`;
