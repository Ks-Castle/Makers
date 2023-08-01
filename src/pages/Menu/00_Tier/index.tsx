import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import Tier from "@/pages/Menu/00_Tier/components/Tier";
import { Input, Pagination } from "@/context/Index";
import { db } from "@/data/firebase";
import { tierListArrayState } from "@/data/recoil";
import { RESOLUTION } from "@/data/str";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TierListDTO } from "./DTO";

const TierList = () => {
  const [data, setData] = useRecoilState(tierListArrayState);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [search, setSearch] = useState<TierListDTO[]>([]);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const searchKeywords = inputValue.trim().split(" ");
    const searchResults: TierListDTO[] = [];
    data.forEach((item) => {
      let isMatched = true;
      searchKeywords.forEach((keyword) => {
        if (
          !(
            item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.gameTitle.toLowerCase().includes(keyword.toLowerCase())
          )
        ) {
          isMatched = false;
        }
      });
      if (isMatched) {
        searchResults.push(item);
      }
    });
    setSearch(searchResults);
  };

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
      setSearch(sortedData);
    };
    getData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search]);
  return (
    <Layout>
      <Head
        link="Tier Lists"
        desc="This is a list regarding the tier table that can be created in Makers. More content will be added in the future, so we kindly ask for your continued interest."
      />
      <Wrapper>
        <Search>
          <Input
            onChange={(e) => onSearchHandler(e)}
            border="1px solid black"
            borderType="all"
            width="300px"
            height="30"
            padding="1"
            paddingType="left"
            placeholder="Search"
          />
        </Search>
        <GridWrapper>
          {search
            ?.slice(offset, offset + limit)
            ?.map((v: TierListDTO, i: number) => {
              return <Tier data={v} key={i} />;
            })}
        </GridWrapper>
        <Footer>
          {data && (
            <Pagination
              total={search.length}
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

const Search = styled.div`
  ${flex({ direction: "column" })}
  margin-bottom: 2rem;
  width: 100%;
  input {
    border-radius: 1px;
  }
  input:focus {
    border: 1px solid black;
  }
`;
