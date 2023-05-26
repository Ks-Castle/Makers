import flex from "@/assets/styles/flex";
import { SHADOW, STR } from "@/data/Enum";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <div className="login">Login</div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  ${flex({ justify: "flex-end" })}
  width: 100%;
  height: ${STR.LAYOUT_HEADER_HEIGHT};
  box-shadow: ${SHADOW.BOTTOM_4};
  .login {
    margin-right: 3rem;
  }
`;
