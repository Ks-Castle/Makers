import { Button } from "@/context/Index";
import { RESOLUTION, SHADOW, UI } from "@/data/str";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import flex from "@/assets/styles/flex";
import { TierListDTO } from "@/data/DTO";

const Tier = ({ data }: { data: TierListDTO }) => {
  const theme = localStorage.getItem("theme");
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(`/TierGenerate/${data.title}`);
  };
  return (
    <Wrapper theme={theme}>
      <StyledButton
        width={`${UI._200}`}
        height={`${UI._300}`}
        onClick={navigationHandler}
        image
        shadow={SHADOW.LIGHT_X_1_Y_4}
        imageSize="cover"
        imageURL={data.titleImg}
      />
      <div className="title-container">
        <p className="title-bg">{data.title}</p>
        <p className="title">{data.title}</p>
      </div>
      <div className="title-container">
        <span className="desc">{data.gameTitle} Tier List</span>
      </div>
    </Wrapper>
  );
};

export default Tier;

const Wrapper = styled.div<{ theme: string }>`
  ${flex({ direction: "column" })}
  border-radius: 10px;
  position: relative;
  margin-top: 4rem;
  background-color: var(--dark-000);
  box-shadow: ${SHADOW.LIGHT_X_1_Y_4};
  border: ${(props) => props.theme === "true" && `1px solid var(--dark-000)`};

  .title-container {
    ${flex({ direction: "column" })}
    position: relative;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    width: 100%;
    text-shadow: ${SHADOW.LIGHT_X_1_Y_4};
    z-index: 5;
  }
  .title-bg {
    position: absolute;
    font-size: 2.2rem;
    -webkit-text-stroke-width: 10px;
    -webkit-text-stroke-color: var(--dark-100);
    -webkit-text-fill-color: var(--dark-000);
    font-family: Impact, Charcoal, sans-serif;
  }
  .title {
    position: absolute;
    color: var(--dark-000);
  }
  .desc {
    font-size: 1.5rem;
    color: var(--dark-100);
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
`;

const StyledButton = styled(Button)`
  z-index: 5;
  @media (max-width: ${RESOLUTION.TABLET}px) {
    height: ${UI._200}px;
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    height: ${UI._250}px;
  }
`;
