import { Button } from "@/context/Index";
import { RESOLUTION, SHADOW, UI } from "@/data/str";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeMenu = ({ url, link }: { url: string; link: string }) => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate(link);
  };
  return (
    <StyledButton
      width={`${UI._200}`}
      height={`${UI._200}`}
      image
      imageURL={url}
      imageSize="cover"
      shadow={SHADOW.X_1_Y_4}
      onClick={navigationHandler}
    />
  );
};

export default HomeMenu;

const StyledButton = styled(Button)`
  @media (max-width: ${RESOLUTION.TABLET}px) {
    width: ${UI._150}px;
    height: ${UI._150}px;
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    width: ${UI._100}px;
    height: ${UI._100}px;
  }
`;
