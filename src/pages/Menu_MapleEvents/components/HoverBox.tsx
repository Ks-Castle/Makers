import { font } from "@/assets/styles/index";
import { Button } from "@/context/Index";
import { LOCALSTORAGE, SHADOW } from "@/data/str";
import styled from "styled-components";

interface IPropsType {
  img: string;
  title: string;
  link: any; // SVGAnimatedString type??? string type?
}

const HoverBox = ({ img, title, link }: IPropsType) => {
  const theme = localStorage.getItem(LOCALSTORAGE.THEME);

  return (
    <Wrapper href={link} target="_blank">
      <Title fontC={theme}>{title}</Title>
      <StyledButton
        image
        imageURL={img}
        imageSize="cover"
        shadow={theme === "true" ? SHADOW.LIGHT_X_1_Y_4 : SHADOW.DARK_X_1_Y_4}
        label="home_button"
      ></StyledButton>
    </Wrapper>
  );
};

export default HoverBox;

const Wrapper = styled.a`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  :hover {
    p {
      display: block;
    }
  }
`;

const StyledButton = styled(Button)`
  :hover {
    opacity: 0.2;
  }
`;

const Title = styled.p<{ fontC: string | null }>`
  text-align: center;
  ${font({ weight: 900 })}
  display: none;
  position: absolute;
  width: 90%;
  top: 50%;
  transform: translate(0, -50%);
  margin: 0 1rem;
  color: ${(props) => (props.fontC === "true" ? "#fff" : "#000")};
`;
