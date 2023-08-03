import { Button } from "@/context";
import { LOCALSTORAGE, RESOLUTION, SHADOW, Z_INDEX } from "@/data/str";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import flex from "@/assets/styles/flex";
import menu from "@/data/navigation/menu.json";
import { TierListDTO } from "../DTO/index";

const Tier = ({ data }: { data: TierListDTO }) => {
  const theme = localStorage.getItem(LOCALSTORAGE.THEME);
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(`${menu.TierMaking}/${data.id}`);
  };
  return (
    <Wrapper theme={theme}>
      <StyledButton
        width={`200`}
        height={`300`}
        onClick={navigationHandler}
        image
        shadow={theme === "true" ? SHADOW.LIGHT_X_1_Y_4 : SHADOW.DARK_X_1_Y_4}
        imageSize="cover"
        imageURL={data.titleImg}
        label="tier_button"
      />
      <div className="title-container">
        <p className="title-bg">{data.title}</p>
        <p className="title">{data.title}</p>
      </div>
      <div className="title-container">
        <div className="title-container-desc">
          <p className="desc">{data.gameTitle}</p>
          <p className="desc"> Tier</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tier;

const Wrapper = styled.div<{ theme: string }>`
  ${flex({ direction: "column", align: "flex-start", justify: "flex-start" })}
  border-radius: 10px;
  position: relative;
  background-color: var(--dark-000);
  border: ${(props) =>
    props.theme === "true"
      ? `1px solid var(--dark-000)`
      : `1px solid var(--dark-010)`};
  box-shadow: ${SHADOW.DARK_X_1_Y_4};
  .title-container {
    ${flex({ direction: "column" })}
    position: relative;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    width: 100%;
    text-shadow: ${(props) =>
      props.theme === "true" ? SHADOW.LIGHT_X_1_Y_4 : SHADOW.DARK_X_1_Y_4};
    z-index: ${Z_INDEX.TIER};
  }
  .title-container-desc {
    margin-top: 2rem;
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
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    .title-container {
      font-size: 1.5rem;
    }
    .title-bg {
      font-size: 1.8rem;
    }
  }
`;

const StyledButton = styled(Button)`
  z-index: ${Z_INDEX.TIER};
  @media (max-width: ${RESOLUTION.TABLET}px) {
    height: 200px;
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    height: 250px;
  }
`;
