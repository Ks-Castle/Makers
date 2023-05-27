import flex from "@/assets/styles/flex";
import { SVG } from "@/context/Index";
import { FONT_SIZE, RESOLUTION, SHADOW, STR, UI } from "@/data/str";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import navigation from "@/data/navigation.json";

const Header = () => {
  const navigate = useNavigate();

  const logoNavigation = () => {
    navigate(navigation.Home.path);
  };

  return (
    <HeaderWrap>
      <HeaderCenter>
        <SVG
          iconName="Logo"
          width={`${UI._200}px`}
          pointer
          onClick={logoNavigation}
          contain
        />
        <div>Login</div>
      </HeaderCenter>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  ${flex({})}
  width: 100%;
  height: ${STR.LAYOUT_HEADER_HEIGHT};
  box-shadow: ${SHADOW.BOTTOM_4};
`;

const HeaderCenter = styled.div`
  ${flex({ justify: "space-between" })}
  max-width: ${RESOLUTION.PC}px;
  width: 90%;
  div {
    font-size: ${FONT_SIZE[16]};
    font-weight: 900;
    margin: 0 2rem;
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    .mobile-hidden {
      display: none;
    }
  }
`;
