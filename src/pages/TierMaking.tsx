import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { tierListArrayState } from "@/data/recoil";
import { FONT_SIZE, RESOLUTION } from "@/data/str";
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
  const [tier1Boxes, setTier1Boxes] = useState<BoxList>([]);
  const [tier2Boxes, setTier2Boxes] = useState<BoxList>([]);
  const [tier3Boxes, setTier3Boxes] = useState<BoxList>([]);
  const [tier4Boxes, setTier4Boxes] = useState<BoxList>([]);

  const tierContainers = [
    { id: "tierContainers1", boxes: tier1Boxes },
    { id: "tierContainers2", boxes: tier2Boxes },
    { id: "tierContainers3", boxes: tier3Boxes },
    { id: "tierContainers4", boxes: tier4Boxes },
  ];

  const color = ["#F96B6B", "#FFEE93", "#96FFB3", "#90A2FF"];
  const text = ["S", "A", "B", "C"];

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const containers = [
      { id: "tierContainers", boxes: tierDataBox, setBoxes: setTierDataBox },
      { id: "tierContainers1", boxes: tier1Boxes, setBoxes: setTier1Boxes },
      { id: "tierContainers2", boxes: tier2Boxes, setBoxes: setTier2Boxes },
      { id: "tierContainers3", boxes: tier3Boxes, setBoxes: setTier3Boxes },
      { id: "tierContainers4", boxes: tier4Boxes, setBoxes: setTier4Boxes },
    ];

    const sourceContainer = containers.find(
      (container) => container.id === sourceId
    );
    const destinationContainer = containers.find(
      (container) => container.id === destinationId
    );

    if (sourceContainer && destinationContainer) {
      const sourceBoxes = sourceContainer.boxes;
      const setSourceBoxes = sourceContainer.setBoxes;
      const destinationBoxes = destinationContainer.boxes;
      const setDestinationBoxes = destinationContainer.setBoxes;

      if (sourceId === destinationId && sourceIndex === destinationIndex) {
        // Same container, same index, no change
        return;
      }

      const sourceClone = Array.from(sourceBoxes);
      const [removed] = sourceClone.splice(sourceIndex, 1);

      if (sourceId === destinationId) {
        // Same container, different index
        sourceClone.splice(destinationIndex, 0, removed);
      } else {
        // Different container
        const destClone = Array.from(destinationBoxes);
        destClone.splice(destinationIndex, 0, removed);
        setDestinationBoxes(destClone);
      }

      setSourceBoxes(sourceClone);
    }
  };

  return (
    <Layout>
      <Head link="Tier Maker" />
      <Wrapper>
        <DragDropContext onDragEnd={handleDragEnd}>
          {tierContainers.map((container, i) => (
            <div key={i} className="containers">
              <ContainerTitle color={color[i]}>{text[i]}</ContainerTitle>
              <Droppable
                key={container.id}
                droppableId={container.id}
                direction="horizontal"
              >
                {(provided) => (
                  <TierContainer
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {container.boxes.map((url, index) => (
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
            </div>
          ))}
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
        </DragDropContext>
      </Wrapper>
    </Layout>
  );
};

export default TierMaking;

const Wrapper = styled.div`
  max-width: ${RESOLUTION.PC}px;
  width: 90%;
  height: 100%;
  overflow: scroll;
  .containers {
    ${flex({})}
    height: 100px;
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    .containers {
      ${flex({ direction: "column" })}
      height: auto;
    }
  }
`;

const ContainerTitle = styled.div<{ color: string }>`
  ${flex({})}
  font-size: ${FONT_SIZE[20]};
  width: 100px;
  height: 100%;
  border: 3px solid black;
  background-color: ${(props) => props.color};
  @media (max-width: ${RESOLUTION.TABLET}px) {
    width: 100%;
    height: 30px;
  }
`;

const TierContainer = styled.div`
  ${flex({ justify: "flex-start" })}
  flex-wrap: wrap;
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  background-color: var(--dark-010);
  border: solid black;
  border-width: 3px 3px 3px 0;
  @media (max-width: ${RESOLUTION.TABLET}px) {
    border-width: 3px 3px 3px 3px;
  }
`;

const ImageBoxContainer = styled.div`
  ${flex({})}
  flex-wrap: wrap;
  width: 100%;
  border: 3px solid black;
  overflow: scroll;
  padding: 1rem;
  background-color: var(--dark-010);
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
