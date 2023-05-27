import { Button } from "@/context/Index";
import { RESOLUTION, SHADOW, UI } from "@/data/str";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import flex from "@/assets/styles/flex";
import { TierListDTO } from "@/data/DTO";

const Tier = ({ data }: { data: TierListDTO }) => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(`/TierGenerate/${data.title}`);
  };
  return (
    <Wrapper>
      <StyledButton
        width={`${UI._200}`}
        height={`${UI._250}`}
        onClick={navigationHandler}
        image
        shadow={SHADOW.X_1_Y_4}
        imageSize="cover"
        imageURL={data.titleImg}
      />
      <span className="desc">Click to make your tier list</span>
      <div className="title-container">
        <p className="title-bg">{data.title}</p>
        <p className="title">{data.title}</p>
      </div>
    </Wrapper>
  );
};

export default Tier;
const Wrapper = styled.div`
  ${flex({ direction: "column" })}
  box-shadow: ${SHADOW.X_1_Y_4};
  border-radius: 10px;
  position: relative;
  margin-top: 4rem;
  .title-container {
    ${flex({ direction: "column" })}
    position: relative;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    width: 100%;
    text-shadow: ${SHADOW.X_1_Y_4};
  }
  .title-bg {
    position: absolute;
    top: 10px;
    font-size: 2.2rem;
    -webkit-text-stroke-width: 10px;
    -webkit-text-stroke-color: var(--black);
    -webkit-text-fill-color: var(--white);
    font-family: Impact, Charcoal, sans-serif;
  }
  .title {
    position: absolute;
    top: 10px;
    color: var(--white);
  }
  .desc {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--black);
    width: 100%;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  z-index: 5;
  @media (max-width: ${RESOLUTION.PC}px) {
    height: ${UI._200}px;
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    height: ${UI._200}px;
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    height: ${UI._250}px;
  }
`;
