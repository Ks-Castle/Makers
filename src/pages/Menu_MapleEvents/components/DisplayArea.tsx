import useGetMapleNews from "@/api/hooks_maple/useGetMapleNews";
import useGetMapleOldNews from "@/api/hooks_maple/useGetMapleOldNews";
import { flex } from "@/assets/styles/index";
import { HoverBox } from "@/context/Index.js";
import { RESOLUTION } from "@/data/str";
import styled from "styled-components";
import { fetchingDefaultDTO } from "../DTO/index";

const DisplayArea = () => {
  const mapleNewsAPI = useGetMapleNews();
  const mapleOldNewsAPI = useGetMapleOldNews();

  const combineAndSortData = () => {
    const combinedData = [
      ...(mapleNewsAPI.data || []),
      ...(mapleOldNewsAPI.data || []),
    ];

    const groupedAndSortedData = combinedData.reduce((result, item) => {
      const date = item.actualDate?.split("T")[0];
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(item);
      return result;
    }, {});

    return groupedAndSortedData;
  };
  const groupedData = combineAndSortData();
  return (
    <>
      {Object.keys(groupedData).map((date, index) => (
        <ContentsRow key={index}>
          <div className="date">{date}</div>
          <GridWrapper>
            {groupedData[date].map((v: fetchingDefaultDTO, i: number) => (
              <HoverBox
                img={v.photo}
                key={i}
                title={v.title}
                link={v.link}
                type="a"
              />
            ))}
          </GridWrapper>
        </ContentsRow>
      ))}
    </>
  );
};

export default DisplayArea;

const ContentsRow = styled.div`
  ${flex({ direction: "column", align: "flex-start", gap: "1rem" })}
  height: 100%;
`;

const GridWrapper = styled.div`
  ${flex({ align: "flex-start" })}
  display: grid;
  overflow: scroll;
  grid-template-columns: repeat(3, 200px);
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
