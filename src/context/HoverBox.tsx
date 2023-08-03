import { font } from "@/assets/styles/index";
import { LOCALSTORAGE, SHADOW, Z_INDEX } from "@/data/str";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./index.js";

interface IPropsType {
  img: string;
  title: string;
  link: any; // SVGAnimatedString type??? string type?
  type: BoxType;
  width?: string;
  height?: string;
}

type BoxType = "a" | "b";

const HoverBox = ({ img, title, link, width, height, type }: IPropsType) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = localStorage.getItem(LOCALSTORAGE.THEME);

  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(link);
  };

  return (
    <>
      {type === "a" ? (
        <Wrapper
          href={link}
          target="_blank"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Title fontC={theme} isHovered={isHovered}>
            {title}
          </Title>
          <StyledButton
            image
            imageURL={img}
            imageSize="cover"
            shadow={
              theme === "true" ? SHADOW.LIGHT_X_1_Y_4 : SHADOW.DARK_X_1_Y_4
            }
            label="home_button"
          />
        </Wrapper>
      ) : (
        <Wrapper
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Title fontC={theme} isHovered={isHovered}>
            {title}
          </Title>
          <StyledButton
            image
            width={width}
            height={height}
            imageURL={img}
            imageSize="cover"
            shadow={
              theme === "true" ? SHADOW.LIGHT_X_1_Y_4 : SHADOW.DARK_X_1_Y_4
            }
            onClick={navigationHandler}
            label="home_button"
          />
        </Wrapper>
      )}
    </>
  );
};

export default HoverBox;

const Wrapper = styled.a`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const Title = styled.p<{ fontC: string | null; isHovered: boolean }>`
  text-align: center;
  ${font({ weight: 900 })}
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  position: absolute;
  width: 90%;
  top: 50%;
  transform: translate(0, -50%);
  margin: 0 1rem;
  z-index: ${Z_INDEX.TIER};
  color: ${(props) => (props.fontC === "true" ? "#fff" : "#000")};
`;

const StyledButton = styled(Button)``;
