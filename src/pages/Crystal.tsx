import flex from "@/assets/styles/flex.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Button, Input } from "@/context/Index.js";
import { dailyBosses, weeklyBosses } from "@/data/bossDatas.js";
import { FONT_SIZE, RESOLUTION } from "@/data/str.js";
import { useState } from "react";
import styled from "styled-components";

const Crystal = () => {
  const [numCharacters, setNumCharacters] = useState<number>(1);
  const [numCrystals, setNumCrystals] = useState<number>(180);
  const [selectedBoss, setSelectedBoss] = useState<{ [key: string]: string }[]>(
    []
  );

  const dayhalfLength = Math.ceil(dailyBosses.length / 2);
  const weekhalfLength = Math.ceil(weeklyBosses.length / 2 + 1);
  const firstHalf = dailyBosses.slice(0, dayhalfLength);
  const secondHalf = dailyBosses.slice(dayhalfLength);
  const thirdHalf = weeklyBosses.slice(0, weekhalfLength);
  const fourthHalf = weeklyBosses.slice(weekhalfLength);

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

  const handleBossChange = (
    index: number,
    name: string,
    difficulty: string
  ): void => {
    setSelectedBoss((prevSelectedBoss) => {
      const currentBoss = prevSelectedBoss[index]?.[name];
      const updatedBoss = { ...prevSelectedBoss[index], [name]: difficulty };

      if (currentBoss === difficulty) {
        delete updatedBoss[name];
      }

      const newSelectedBoss = [...prevSelectedBoss];
      newSelectedBoss[index] = updatedBoss;
      return newSelectedBoss;
    });
  };

  const renderSelectSection = (): JSX.Element[] => {
    const selectSections: JSX.Element[] = [];
    for (let i = 0; i < numCharacters; i++) {
      selectSections.push(
        <div key={i} className="select-section">
          <div className="select-column">
            <div className="select-title">Daily</div>
            <div className="select-row">
              <div className="select-daily-boss-section">
                {firstHalf.map((boss, index) => (
                  <div className="select-input-section" key={index}>
                    <label htmlFor={`${boss.difficulty}-${boss.name}-${i}`}>
                      {`${boss.difficulty}-${boss.name}`}
                    </label>
                    <input
                      type="checkbox"
                      id={`${boss.difficulty}-${boss.name}-${i}`}
                      name={`${boss.name}-${i}`}
                      value={boss.difficulty}
                      checked={selectedBoss[i]?.[boss.name] === boss.difficulty}
                      onChange={() =>
                        handleBossChange(i, boss.name, boss.difficulty)
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="select-daily-boss-section">
                {secondHalf.map((boss, index) => (
                  <div className="select-input-section" key={index}>
                    <label htmlFor={`${boss.difficulty}-${boss.name}-${i}`}>
                      {`${boss.difficulty}-${boss.name}`}
                    </label>
                    <input
                      type="checkbox"
                      id={`${boss.difficulty}-${boss.name}-${i}`}
                      name={`${boss.name}-${i}`}
                      value={boss.difficulty}
                      checked={selectedBoss[i]?.[boss.name] === boss.difficulty}
                      onChange={() =>
                        handleBossChange(i, boss.name, boss.difficulty)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="select-column">
            <div className="select-title">Weekly</div>
            <div className="select-row">
              <div className="select-weekly-boss-section">
                {thirdHalf.map((boss, index) => (
                  <div className="select-input-section" key={index}>
                    <label htmlFor={`${boss.difficulty}-${boss.name}-${i}`}>
                      {`${boss.difficulty}-${boss.name}`}
                    </label>
                    <input
                      type="checkbox"
                      id={`${boss.difficulty}-${boss.name}-${i}`}
                      name={`${boss.name}-${i}`}
                      value={boss.difficulty}
                      checked={selectedBoss[i]?.[boss.name] === boss.difficulty}
                      onChange={() =>
                        handleBossChange(i, boss.name, boss.difficulty)
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="select-weekly-boss-section">
                {fourthHalf.map((boss, index) => (
                  <div className="select-input-section" key={index}>
                    <label htmlFor={`${boss.difficulty}-${boss.name}-${i}`}>
                      {`${boss.difficulty}-${boss.name}`}
                    </label>
                    <input
                      type="checkbox"
                      id={`${boss.difficulty}-${boss.name}-${i}`}
                      name={`${boss.name}-${i}`}
                      value={boss.difficulty}
                      checked={selectedBoss[i]?.[boss.name] === boss.difficulty}
                      onChange={() =>
                        handleBossChange(i, boss.name, boss.difficulty)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
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
            CALCULATE
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

  /* Add the CSS property to create two rows */
  .select-section {
    ${flex({
      align: "flex-start",
      gap: "1rem",
    })}
    width: 100%;
    background-color: var(--dark-010);
    color: var(--dark-100);
    padding: 1rem;
  }

  .select-daily-boss-section,
  .select-weekly-boss-section {
    ${flex({
      direction: "column",
      justify: "flex-start",
      gap: "1rem",
    })}
    width: 50%; /* Set the width to 50% to create two columns */
  }

  .select-column {
    ${flex({
      direction: "column",
      gap: "2rem",
    })}
    width: 100%;
  }
  .select-row {
    ${flex({
      gap: "3rem",
      align: "flex-start",
    })}
  }

  .select-title {
    font-size: ${FONT_SIZE[20]};
    font-weight: 900;
  }

  .select-input-section {
    ${flex({
      gap: "1rem",
      justify: "flex-start",
    })}
    width: 100%;
    font-size: ${FONT_SIZE[16]};
    label {
      width: 120px;
    }
    input {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: ${RESOLUTION.PC}px) {
    .select-row {
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 1rem;
    }
    .select-input-section {
      label {
        width: 150px;
      }
      input {
        width: 15px;
        height: 15px;
      }
    }
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    .select-input-section {
      font-size: ${FONT_SIZE[12]};
      width: 100%;
      label {
        width: 40px;
      }
    }
  }
`;
