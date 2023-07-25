import flex from "@/assets/styles/flex.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Input } from "@/context/Index.js";
import { FONT_SIZE } from "@/data/str.js";
import styled from "styled-components";

const Crystal = () => {
  const onCharacterInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 9;
    const enteredValue = parseInt(e.target.value, 10);

    if (isNaN(enteredValue) || enteredValue > maxValue) {
      e.target.value = String(maxValue);
    }
  };

  const onCrstalInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 9;
    const enteredValue = parseInt(e.target.value, 10);

    if (isNaN(enteredValue) || enteredValue > maxValue) {
      e.target.value = String(maxValue);
    }
  };

  return (
    <Layout>
      <Head
        link="Maplestory Boss Crystal Calculator"
        desc="For making your maple life easier."
      />
      <Wrapper>
        <InputArea>
          <div className="input-container">
            <p> How many Characters? (maximum 9)</p>
            <Input
              width="50px"
              height="30"
              center
              type="number"
              maxlength={1}
              onChange={onCharacterInput}
              defaultValue="1"
            />
          </div>
          <div className="input-container">
            <p> How many Crystals? (maximum 180)</p>
            <Input
              width="50px"
              height="30"
              center
              type="number"
              maxlength={3}
              onChange={onCrstalInput}
              defaultValue="1"
            />
          </div>
        </InputArea>
      </Wrapper>
    </Layout>
  );
};

export default Crystal;

const Wrapper = styled.div`
  ${flex({ direction: "column" })}
  width: 100%;
  height: 100%;
`;

const InputArea = styled.div`
  ${flex({ direction: "column", justify: "flex-start", gap: "1rem" })}
  width: 50%;
  height: 100%;
  font-size: ${FONT_SIZE[20]};
  margin-top: 2rem;
  .input-container {
    ${flex({ gap: "1rem" })}
    width: 100%;
    p {
      width: 350px;
    }
  }
`;
