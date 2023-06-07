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
import { useCallback, useRef, useState } from "react";
import SVG from "@/context/SVG";
import { toPng } from "html-to-image";
import format from "date-fns/format";

type BoxList = string[];

const TierMaking = () => {
  const tierListArray = useRecoilValue(tierListArrayState);
  const param = decodeURIComponent(
    document.location.href.split("/").pop() || ""
  );
  const data = tierListArray.find((item) => item.title === param);

  const ref = useRef<HTMLDivElement>(null);
  const getFileName = (fileType: string) =>
    `${format(new Date(), `"'Makers-${param}-'HH-mm-ss"`)}.${fileType}`;

  const [tierDataBox, setTierDataBox] = useState<BoxList>(data?.imgs || []);
  const [tier1Boxes, setTier1Boxes] = useState<BoxList>([]);
  const [tier2Boxes, setTier2Boxes] = useState<BoxList>([]);
  const [tier3Boxes, setTier3Boxes] = useState<BoxList>([]);
  const [tier4Boxes, setTier4Boxes] = useState<BoxList>([]);
  const [tier5Boxes, setTier5Boxes] = useState<BoxList>([]);

  const [tierContainers, setTierContainers] = useState<
    { id: string; boxes: BoxList }[]
  >([
    { id: "tierContainers1", boxes: tier1Boxes },
    { id: "tierContainers2", boxes: tier2Boxes },
    { id: "tierContainers3", boxes: tier3Boxes },
    { id: "tierContainers4", boxes: tier4Boxes },
    { id: "tierContainers5", boxes: tier5Boxes },
  ]);

  const [text, setText] = useState<string[]>(["S", "A", "B", "C", "D"]);
  const [color, setColor] = useState<string[]>([
    "#F96B6B",
    "#FFEE93",
    "#96FFB3",
    "#90A2FF",
    "#8A2BE2",
  ]);

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
      { id: "tierContainers5", boxes: tier5Boxes, setBoxes: setTier5Boxes },
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
      const destClone = Array.from(destinationBoxes);

      if (sourceId === destinationId) {
        // Same container, different index
        sourceClone.splice(destinationIndex, 0, removed);
        setSourceBoxes(sourceClone);
      } else {
        // Different container
        destClone.splice(destinationIndex, 0, removed);
        setDestinationBoxes(destClone);
        setSourceBoxes(sourceClone);
        setDestinationBoxes(destClone);
      }

      // Update tierContainers state
      setTierContainers((prevContainers) => {
        const updatedContainers = prevContainers.map((container) => {
          if (container.id === sourceId) {
            return { ...container, boxes: sourceClone };
          } else if (container.id === destinationId) {
            return { ...container, boxes: destClone };
          } else {
            return container;
          }
        });

        return updatedContainers;
      });
    }
  };

  const handleChangeText = (index: number, value: string) => {
    const newText = [...text];
    newText[index] = value.substring(0, 10);
    setText(newText);
  };
  const handleChangeColor = (index: number, value: string) => {
    const newColor = [...color];
    newColor[index] = value;
    setColor(newColor);
  };

  const handleAddContainer = () => {
    if (tierContainers.length >= 5) {
      return;
    }

    const newContainerId = `tierContainers${tierContainers.length + 1}`;
    const newContainerBoxes: BoxList = [];

    setTierContainers((prevContainers) => [
      ...prevContainers,
      { id: newContainerId, boxes: newContainerBoxes },
    ]);
  };

  const handleRemoveContainer = () => {
    if (tierContainers.length <= 2) {
      return;
    }

    const lastContainerIndex = tierContainers.length - 1;
    const lastContainer = tierContainers[lastContainerIndex];
    const removedBoxes = lastContainer.boxes;

    setTierDataBox((prevData) => {
      return [...removedBoxes, ...prevData];
    });

    setTierContainers((prevContainers) => {
      const updatedContainers = prevContainers.slice(0, lastContainerIndex);
      return updatedContainers;
    });

    // 컨테이너를 삭제할 때 해당 컨테이너 내의 박스 초기화
    if (lastContainer.id === "tierContainers1") {
      setTier1Boxes([]);
    } else if (lastContainer.id === "tierContainers2") {
      setTier2Boxes([]);
    } else if (lastContainer.id === "tierContainers3") {
      setTier3Boxes([]);
    } else if (lastContainer.id === "tierContainers4") {
      setTier4Boxes([]);
    } else if (lastContainer.id === "tierContainers5") {
      setTier5Boxes([]);
    }
  };

  const downloadPng = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${getFileName("png")}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <Layout>
      <Head
        link="Tier Maker"
        desc="Please create the desired tier table for Makers and download it as a PNG file to share and discuss with people."
      />
      <Wrapper>
        <AddMinusContainer>
          <SVG
            iconName="PNG"
            contain
            width="40px"
            height="40px"
            pointer
            onClick={downloadPng}
          />
          {tierContainers.length > 2 && (
            <SVG
              iconName="Delete"
              contain
              width="25px"
              height="25px"
              pointer
              onClick={handleRemoveContainer}
            />
          )}
          {tierContainers.length < 5 && (
            <SVG
              iconName="Plus"
              contain
              width="25px"
              height="25px"
              pointer
              onClick={handleAddContainer}
            />
          )}
        </AddMinusContainer>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div ref={ref}>
            {tierContainers.map((container, i) => (
              <div key={i} className="containers">
                <ContainerTitle color={color[i]}>
                  <input
                    type="text"
                    value={text[i]}
                    onChange={(e) => handleChangeText(i, e.target.value)}
                  />
                  <input
                    type="color"
                    value={color[i]}
                    onChange={(e) => handleChangeColor(i, e.target.value)}
                    className="input-color"
                  />
                </ContainerTitle>
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
          </div>
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

const AddMinusContainer = styled.div`
  ${flex({ gap: "1rem", justify: "flex-end" })}
  padding-right: 3px;
`;

const ContainerTitle = styled.div<{ color: string }>`
  ${flex({ direction: "column" })}
  font-size: ${FONT_SIZE[20]};
  height: 100%;
  border: 3px solid black;
  background-color: ${(props) => props.color};
  position: relative;
  input {
    text-align: center;
    background-color: transparent;
  }
  .input-color {
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 25px;
  }
  input[type="color"]::-webkit-color-swatch {
    border-radius: 100%;
    box-shadow: 1px 1px 3px 0px grey;
    cursor: pointer;
  }
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
    min-height: 50px;
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
    width: 40px;
    height: 40px;
    margin: 0.1rem;
  }
`;
