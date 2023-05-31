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
  const theme = localStorage.getItem("theme");
  const navigate = useNavigate();
  const logoNavigation = () => {
    navigate(navigation.Home.path);
  };

  return (
    <HeaderWrap className="headerBG" theme={theme}>
      <HeaderCenter>
        <div onClick={logoNavigation} className="logo">
          Makers
        </div>
        <div className="header-functions">
          {darkMode ? (
            <SVG
              iconName="Light"
              onClick={toggleDarkMode}
              width="20px"
              height="20px"
              pointer
            />
          ) : (
            <SVG
              iconName="Dark"
              onClick={toggleDarkMode}
              width="20px"
              height="20px"
              pointer
            />
          )}
          <div>Login</div>
        </div>
      </HeaderCenter>
    </HeaderWrap>
  );
};

export default Header;
const HeaderWrap = styled.header<{ theme: string }>`
  ${flex({})}
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: ${STR.LAYOUT_HEADER_HEIGHT};
  box-shadow: ${SHADOW.DARK_BOTTOM_4};
  box-shadow: ${(props) =>
    props.theme === "true" ? SHADOW.LIGHT_BOTTOM_10 : SHADOW.DARK_BOTTOM_4};
`;

const HeaderCenter = styled.div`
  ${flex({ justify: "space-between" })}
  max-width: ${RESOLUTION.PC}px;
  width: 90%;
  font-size: ${FONT_SIZE[16]};
  font-weight: 900;
  .header-functions {
    ${flex({ gap: "2rem" })}
  }
`;
