import { bg } from "@/assets/styles/index";
import styled from "styled-components";

interface IPropsType {
  img: string;
}

const EventBox = ({ img }: IPropsType) => {
  return (
    <Wrapper>
      <BGImage img={img} />
    </Wrapper>
  );
};

export default EventBox;

const Wrapper = styled.div`
  height: 150px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const BGImage = styled.div<{ img: string }>`
  background-image: ${(props: IPropsType) => `url(${props.img})`};
  ${bg({})}
  height:100%
`;
