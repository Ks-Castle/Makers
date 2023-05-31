import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { tierListArrayState } from "@/data/recoil";
import { RESOLUTION } from "@/data/str";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";

type BoxList = string[];

const TierMaking = () => {
  const tierListArray = useRecoilValue(tierListArrayState);
  const param = decodeURIComponent(
    document.location.href.split("/").pop() || ""
  );
  const data = tierListArray.find((item) => item.title === param);

  const [tierDataBox, setTierDataBox] = useState<BoxList>(data?.imgs || []);
  const [tier2Boxes, setTier2Boxes] = useState<BoxList>([]);
  const [tier3Boxes, setTier3Boxes] = useState<BoxList>([]);
  const [tier4Boxes, setTier4Boxes] = useState<BoxList>([]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    let sourceBoxes: BoxList = [];
    let setSourceBoxes:
      | React.Dispatch<React.SetStateAction<BoxList>>
      | undefined;

    switch (sourceId) {
      case "tierContainers":
        sourceBoxes = tierDataBox;
        setSourceBoxes = setTierDataBox;
        break;
      case "tierContainers2":
        sourceBoxes = tier2Boxes;
        setSourceBoxes = setTier2Boxes;
        break;
      case "tierContainers3":
        sourceBoxes = tier3Boxes;
        setSourceBoxes = setTier3Boxes;
        break;
      case "tierContainers4":
        sourceBoxes = tier4Boxes;
        setSourceBoxes = setTier4Boxes;
        break;
      default:
        break;
    }

    let destinationBoxes: BoxList = sourceBoxes;
    let setDestinationBoxes:
      | React.Dispatch<React.SetStateAction<BoxList>>
      | undefined;

    if (sourceId !== destinationId || sourceIndex !== destinationIndex) {
      switch (destinationId) {
        case "tierContainers":
          destinationBoxes = tierDataBox;
          setDestinationBoxes = setTierDataBox;
          break;
        case "tierContainers2":
          destinationBoxes = tier2Boxes;
          setDestinationBoxes = setTier2Boxes;
          break;
        case "tierContainers3":
          destinationBoxes = tier3Boxes;
          setDestinationBoxes = setTier3Boxes;
          break;
        case "tierContainers4":
          destinationBoxes = tier4Boxes;
          setDestinationBoxes = setTier4Boxes;
          break;
        default:
          break;
      }

      const sourceClone = Array.from(sourceBoxes);
      const [removed] = sourceClone.splice(sourceIndex, 1);

      if (sourceId === destinationId) {
        sourceClone.splice(destinationIndex, 0, removed);
      } else {
        const destClone = Array.from(destinationBoxes);
        destClone.splice(destinationIndex, 0, removed);
        setDestinationBoxes && setDestinationBoxes(destClone);
      }

      if (setSourceBoxes) {
        setSourceBoxes(sourceClone);
      }
    }
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Layout>
        <Head link="Tier Maker" />
        <Wrapper>
          <Droppable droppableId="tierContainers2" direction="horizontal">
            {(provided) => (
              <TierContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tier2Boxes.map((url, index) => (
                  <Draggable
                    key={`${url}-${index}`}
                    draggableId={`${url}-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        url={url}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TierContainer>
            )}
          </Droppable>

          <Droppable droppableId="tierContainers3" direction="horizontal">
            {(provided) => (
              <TierContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tier3Boxes.map((url, index) => (
                  <Draggable
                    key={`${url}-${index}`}
                    draggableId={`${url}-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        url={url}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TierContainer>
            )}
          </Droppable>

          <Droppable droppableId="tierContainers4" direction="horizontal">
            {(provided) => (
              <TierContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tier4Boxes.map((url, index) => (
                  <Draggable
                    key={`${url}-${index}`}
                    draggableId={`${url}-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        url={url}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TierContainer>
            )}
          </Droppable>

          <Droppable droppableId="tierContainers" direction="horizontal">
            {(provided) => (
              <ImageBoxContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tierDataBox.map((url, index) => (
                  <Draggable
                    key={`${url}-${index}`}
                    draggableId={`${url}-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        url={url}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ImageBoxContainer>
            )}
          </Droppable>
        </Wrapper>
      </Layout>
    </DragDropContext>
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
  ${flex({ justify: "flex-start" })}
  max-width: ${RESOLUTION.PC}px;
  flex-wrap: wrap;
  width: 90%;
  min-height: 100px;
  border: 1px solid black;
  padding: 1rem;
`;

const ImageBoxContainer = styled.div`
  ${flex({})}
  flex-wrap: wrap;
  max-width: ${RESOLUTION.PC}px;
  width: 90%;
  min-height: 100px;
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
