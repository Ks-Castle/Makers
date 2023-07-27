import flex from "@/assets/styles/flex.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Button, Input, SVG } from "@/context/Index.js";
import { Boss, dailyBosses, weeklyBosses } from "@/data/bossDatas.js";
import { FONT_SIZE, RESOLUTION } from "@/data/str.js";
import { useEffect, useState } from "react";
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

  const renderCheckboxSection = (
    bossArray: Boss[],
    index: number
  ): JSX.Element => {
    return (
      <div>
        {bossArray.map((boss, bossIndex) => (
          <div className="select-input-section" key={bossIndex}>
            <label htmlFor={`${boss.difficulty}-${boss.name}-${index}`}>
              <SVG iconName={boss.img} />
              <p>{`${boss.difficulty}-${boss.name}`}</p>
            </label>
            <input
              type="checkbox"
              id={`${boss.difficulty}-${boss.name}-${index}`}
              name={`${boss.name}-${index}`}
              value={boss.difficulty}
              checked={selectedBoss[index]?.[boss.name] === boss.difficulty}
              onChange={() =>
                handleBossChange(index, boss.name, boss.difficulty)
              }
            />
          </div>
        ))}
      </div>
    );
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
                {renderCheckboxSection(firstHalf, i)}
              </div>
              <div className="select-daily-boss-section">
                {renderCheckboxSection(secondHalf, i)}
              </div>
            </div>
          </div>
          <div className="select-column">
            <div className="select-title">Weekly</div>
            <div className="select-row">
              <div className="select-weekly-boss-section">
                {renderCheckboxSection(thirdHalf, i)}
              </div>
              <div className="select-weekly-boss-section">
                {renderCheckboxSection(fourthHalf, i)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return selectSections;
  };

  useEffect(() => {
    setSelectedBoss((prevSelectedBoss) => {
      const updatedBossArray = [...prevSelectedBoss];

      while (updatedBossArray.length < numCharacters) {
        updatedBossArray.push({});
      }

      while (updatedBossArray.length > numCharacters) {
        updatedBossArray.pop();
      }

      return updatedBossArray;
    });
  }, [numCharacters]);

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
      justify: "flex-start",
    })}
    width: 100%;
    font-size: ${FONT_SIZE[16]};
    margin-bottom: 0.5rem;
    label {
      ${flex({
        justify: "flex-start",
      })}
      width: 120px;
      .svgClass {
        min-width: 50px;
      }
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
      gap: 0rem;
    }
    .select-input-section {
      label {
        width: 150px;
      }
    }
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    .select-input-section {
      font-size: ${FONT_SIZE[12]};
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
      label {
        width: 50px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
      input {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
