import { SVG } from "@/context/Index";
import { LOCALSTORAGE, RESOLUTION, SHADOW, STR, Z_INDEX } from "@/data/str";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import main from "@/data/navigation/main.json";
import { flex, font } from "@/assets/styles/index";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const theme = localStorage.getItem(LOCALSTORAGE.THEME);
  const param = document.location.href.split("/");
  const navigate = useNavigate();
  const logoNavigation = () => {
    navigate(main.Home.path);
  };

  const backNavigation = () => {
    navigate(-1);
  };

  return (
    <HeaderWrap className="headerBG" theme={theme}>
      <HeaderCenter>
        {param[param.length - 1] !== main.Home.name && (
          <div className="header-left">
            <SVG
              iconName="back"
              width="40px"
              height="30px"
              pointer
              onClick={backNavigation}
            />
          </div>
        )}
        <div onClick={logoNavigation} className="logo">
          Makers
        </div>
        <div className="header-right">
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
  z-index: ${Z_INDEX.HEADER};
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
  ${font({ weight: 900 })}
  .header-right {
    ${flex({ gap: "2rem" })}
  }
  .header-left {
    ${flex({ gap: "0.5rem" })}
    margin-left: 1.5rem;
  }
`;
