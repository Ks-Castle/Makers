import flex from "@/assets/styles/flex.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Button, Input } from "@/context/Index.js";
import { FONT_SIZE, RESOLUTION } from "@/data/str.js";
import { useState } from "react";
import styled from "styled-components";

const Crystal = () => {
  const [numCharacters, setNumCharacters] = useState<number>(1);
  const [numCrystals, setNumCrystals] = useState<number>(180);

  const onCharacterInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 9;
    const enteredValue = parseInt(e.target.value, 10);
    const valueToSet =
      isNaN(enteredValue) || enteredValue > maxValue ? maxValue : enteredValue;
    setNumCharacters(valueToSet);
  };

  const onCrstalInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 180;
    const enteredValue = parseInt(e.target.value, 10);
    const valueToSet =
      isNaN(enteredValue) || enteredValue > maxValue ? maxValue : enteredValue;
    setNumCrystals(valueToSet);
  };

  const renderSelectSection = (): JSX.Element[] => {
    const selectSections: JSX.Element[] = [];
    for (let i = 0; i < numCharacters; i++) {
      selectSections.push(<div key={i} className="select-section"></div>);
    }
    return selectSections;
  };

  return (
    <Layout>
      <Head
        link="Maplestory Boss Crystal Calculator"
        desc="For making your maple life easier."
      />
      <Wrapper>
        <ButtonArea>
          <Button width="100" height="30px" padding="1" paddingType="all">
            SUBMIT
          </Button>
        </ButtonArea>
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
              defaultValue="180"
            />
          </div>
        </InputArea>
        <SelectArea>{renderSelectSection()}</SelectArea>
      </Wrapper>
    </Layout>
  );
};

export default Crystal;

const Wrapper = styled.div`
  ${flex({ direction: "column", justify: "flex-start", gap: "1rem" })}
  max-width: ${RESOLUTION.PC}px;
  width: 90%;
  height: 100%;
  overflow: scroll;
`;

const InputArea = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-start",
    gap: "1rem",
  })}
  width: 100%;
  font-size: ${FONT_SIZE[20]};
  .input-container {
    ${flex({ gap: "1rem" })}
    width: 100%;
    p {
      width: 350px;
    }
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    font-size: ${FONT_SIZE[16]};
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    font-size: ${FONT_SIZE[12]};
  }
`;

const ButtonArea = styled.div`
  ${flex({ justify: "flex-end" })}
  width: 100%;
`;

const SelectArea = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-start",
    gap: "1rem",
  })}
  width: 100%;
  .select-section {
    width: 100%;
    height: 300px;
    background-color: #eee;
  }
`;
