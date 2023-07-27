import flex from "@/assets/styles/flex.js";
import { Setter } from "@/data/DTO.js";
import { Z_INDEX } from "@/data/str.js";
import styled from "styled-components";
import { Button } from "./Index.js";

interface PropsType {
  setToggle: Setter<boolean>;
}

const Modal = ({ ...props }: PropsType) => {
  const onCloseHandler = () => {
    props.setToggle((v) => !v);
  };
  return (
    <Wrapper>
      <ModalContainer>
        <ContentnArea>dd</ContentnArea>
        <ButtonArea>
          <Button
            width="100"
            height="30px"
            padding="1"
            paddingType="all"
            onClick={onCloseHandler}
          >
            Close
          </Button>
        </ButtonArea>
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  ${flex({})}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.MODAL};
  background: #00000050;
`;

const ModalContainer = styled.div`
  ${flex({ gap: "1rem", direction: "column" })}
  background: var(--dark-010);
  color: var(--dark-100);
  width: 95%;
  max-width: 551px;
  min-height: 283px;
  border-radius: 10px;
  padding: 2rem;
  -webkit-box-shadow: 18px 18px 34px -11px rgba(0, 0, 0, 0.16);
  box-shadow: 18px 18px 34px -11px rgba(0, 0, 0, 0.16);
`;

const ContentnArea = styled.div`
  ${flex({})}
  min-height: 190px;
`;

const ButtonArea = styled.div`
  ${flex({ justify: "flex-end" })}
  width: 100%;
`;
