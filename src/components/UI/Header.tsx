import flex from "@/assets/styles/flex";
import { ENUM, FONT_SIZE, SHADOW, STR } from "@/data/Enum";
import { uppercaseReg } from "@/data/Reg";
import styled from "styled-components";

const Header = () => {
  const param = document.location.href.split("/");

  return (
    <HeaderWrap>
      <HeaderCenter>
        <div>{uppercaseReg(param[param.length - 1])}</div>
        <div>LOGO</div>
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
  max-width: ${ENUM.RESOLUTION_PC}px;
  width: 90%;
  div {
    font-size: ${FONT_SIZE[16]};
    font-weight: 900;
    margin: 0 2rem;
  }
`;
