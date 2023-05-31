import flex from "@/assets/styles/flex";
import { SVG } from "@/context/Index";
import { FONT_SIZE, RESOLUTION, SHADOW, STR, UI } from "@/data/str";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import navigation from "@/data/navigation.json";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
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
        <button onClick={toggleDarkMode}>
          {darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
        </button>
        <div>Login</div>
      </HeaderCenter>
    </HeaderWrap>
  );
};

export default Header;
const HeaderWrap = styled.header`
  ${flex({})}
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: var(--dark-000);
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
  @media (max-width: ${RESOLUTION.TABLET}px) {
    .svgClass {
      width: 80px;
      background-size: contain;
      margin: 0;
    }
  }
  @media (min-width: ${RESOLUTION.PC}px) {
    .svgClass {
      width: 150px;
      background-size: contain;
      margin: 0;
    }
  }
`;
