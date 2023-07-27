import flex from "@/assets/styles/flex.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Button, Input, SVG } from "@/context/Index.js";
import Modal from "@/context/Modal.js";
import {
  Boss,
  dailyBosses,
  dailyBossesToCheck,
  weeklyBosses,
} from "@/data/bossDatas.js";
import { FONT_SIZE, RESOLUTION } from "@/data/str.js";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface FinalType {
  daily: Boss[];
  weekly: Boss[];
}

const Crystal = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [numCharacters, setNumCharacters] = useState<number>(1);
  const [numCrystals, setNumCrystals] = useState<number>(180);

  const initialFinalData: FinalType[] = Array.from({ length: 9 }, () => ({
    daily: [],
    weekly: [],
  }));

  const [finalData, setFinalData] = useState<FinalType[]>(initialFinalData);
  console.log(finalData);

  const [checkAllDaily, setCheckAllDaily] = useState(false);
  const [checkNoob, setCheckNoob] = useState(false);
  const [checkPro, setCheckPro] = useState(false);
  const [checkHacker, setCheckHacker] = useState(false);

  const dayhalfLength = Math.ceil(dailyBosses.length / 2);
  const weekhalfLength = Math.ceil(weeklyBosses.length / 2 + 1);
  const firstHalf = dailyBosses.slice(0, dayhalfLength);
  const secondHalf = dailyBosses.slice(dayhalfLength);
  const thirdHalf = weeklyBosses.slice(0, weekhalfLength);
  const fourthHalf = weeklyBosses.slice(weekhalfLength);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  const onCharacterInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 9;

    if (e.target.value.length > e.target.maxLength)
      e.target.value = String(maxValue);
    if (Number(e.target.value) > maxValue) e.target.value = String(maxValue);
    const enteredValue = parseInt(e.target.value, 10);

    const valueToSet =
      isNaN(enteredValue) || enteredValue > maxValue ? maxValue : enteredValue;

    setNumCharacters(valueToSet);
  };

  const onCrstalInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 180;

    if (e.target.value.length > e.target.maxLength)
      e.target.value = String(maxValue);
    if (Number(e.target.value) > maxValue) e.target.value = String(maxValue);
    const enteredValue = parseInt(e.target.value, 10);
    const valueToSet =
      isNaN(enteredValue) || enteredValue > maxValue ? maxValue : enteredValue;
    setNumCrystals(valueToSet);
  };

  const handleBossChange = (
    index: number,
    name: string,
    difficulty: string,
    price: number,
    img: string
  ): void => {
    setFinalData((prevFinalData) => {
      const newFinalData = [...prevFinalData];
      while (newFinalData.length <= index) {
        newFinalData.push({ daily: [], weekly: [] });
      }

      const bossToAdd: Boss = { name, difficulty, price, img };
      const isAlreadyChecked = name.includes("-")
        ? newFinalData[index]?.weekly.some(
            (boss) => boss.name === name && boss.difficulty === difficulty
          )
        : newFinalData[index]?.daily.some(
            (boss) => boss.name === name && boss.difficulty === difficulty
          );

      if (isAlreadyChecked) {
        // If the boss is already checked, uncheck it by removing it from the list.
        if (name.includes("-")) {
          newFinalData[index].weekly = newFinalData[index].weekly.filter(
            (boss) => boss.name !== name || boss.difficulty !== difficulty
          );
        } else {
          newFinalData[index].daily = newFinalData[index].daily.filter(
            (boss) => boss.name !== name || boss.difficulty !== difficulty
          );
        }
      } else {
        // If the boss is not checked, add it to the list.
        if (name.includes("-")) {
          newFinalData[index].weekly = [
            ...newFinalData[index].weekly.filter((boss) => boss.name !== name),
            bossToAdd,
          ];
        } else {
          newFinalData[index].daily = [
            ...newFinalData[index].daily.filter((boss) => boss.name !== name),
            bossToAdd,
          ];
        }
      }
      return newFinalData;
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

            {boss.name.includes("-") ? (
              <input
                type="checkbox"
                id={`weekly-${boss.difficulty}-${boss.name}-${index}`}
                name={`weekly-${boss.name}-${index}`}
                value={boss.difficulty}
                checked={finalData[index]?.weekly.some(
                  (bossData) =>
                    bossData.name === boss.name &&
                    bossData.difficulty === boss.difficulty
                )}
                onChange={() =>
                  handleBossChange(
                    index,
                    boss.name,
                    boss.difficulty,
                    boss.price,
                    boss.img
                  )
                }
              />
            ) : (
              <input
                type="checkbox"
                id={`${boss.difficulty}-${boss.name}-${index}`}
                name={`${boss.name}-${index}`}
                value={boss.difficulty}
                checked={finalData[index]?.daily.some(
                  (bossData) =>
                    bossData.name === boss.name &&
                    bossData.difficulty === boss.difficulty
                )}
                onChange={() =>
                  handleBossChange(
                    index,
                    boss.name,
                    boss.difficulty,
                    boss.price,
                    boss.img
                  )
                }
              />
            )}
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
            <div className="select-title">
              <span>Daily</span>
              <div className="select-all-box">
                <input
                  type="checkbox"
                  id={`all-${i}`}
                  onChange={() => handleCheckAllDaily(i)}
                  checked={
                    finalData[i]?.daily?.length === dailyBossesToCheck.length
                  }
                />
                <label htmlFor={`all-${i}`}>All</label>
              </div>
            </div>
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
            <div className="select-title">
              <span>Weekly</span>
              <div className="select-weekly-input-boxes">
                <div className="select-all-box">
                  <input type="checkbox" id="Noob" />
                  <label htmlFor="Noob">Noob</label>
                </div>
                <div className="select-all-box">
                  <input type="checkbox" id="Pro" />
                  <label htmlFor="Pro">Pro</label>
                </div>
                <div className="select-all-box">
                  <input type="checkbox" id="Hacker" />
                  <label htmlFor="Hacker">Hacker</label>
                </div>
              </div>
            </div>
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

  const handleCheckAllDaily = (characterIndex: number) => {
    setFinalData((prevData) => {
      const updatedFinalData = [...prevData];
      const allDailyBossesChecked =
        prevData[characterIndex]?.daily?.length === dailyBossesToCheck.length;

      if (allDailyBossesChecked) {
        updatedFinalData[characterIndex].daily = [];
      } else {
        updatedFinalData[characterIndex].daily = dailyBossesToCheck;
      }

      return updatedFinalData;
    });
  };

  return (
    <Layout>
      {toggleModal && <Modal setToggle={setToggleModal} />}
      <Head
        link="Maplestory Boss Crystal Calculator"
        desc="For making your maple life easier."
      />
      <Wrapper>
        <ButtonArea>
          <div style={{ width: "100px" }}></div>
          <div className="introduce-text">
            *Check the maximum difficulty level of bosses can defeat
          </div>
          <Button
            width="100"
            height="30px"
            padding="1"
            paddingType="all"
            onClick={toggleModalHandler}
          >
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
              border="1px solid var(--dark-020)"
              borderType="all"
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
              border="1px solid var(--dark-020)"
              borderType="all"
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
  ::-webkit-scrollbar {
    display: block !important;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: var(--blue);
    border-radius: 10px;
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    width: 95%;
    ::-webkit-scrollbar {
      display: none !important;
    }
  }
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
  ${flex({ justify: "space-between" })}
  width: 100%;
  .introduce-text {
    font-size: ${FONT_SIZE[16]};
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .introduce-text {
      font-size: ${FONT_SIZE[12]};
    }
  }
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
    ${flex({
      gap: "1rem",
    })}
    width: 50%;
    font-size: ${FONT_SIZE[20]};
    font-weight: 900;
  }
  .select-weekly-input-boxes {
    ${flex({
      gap: "1rem",
    })}
  }
  .select-all-box {
    ${flex({
      gap: "1rem",
    })}
    font-size: ${FONT_SIZE[16]};
    font-weight: 500;
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
    .select-weekly-input-boxes {
      flex-direction: column;
    }
    .select-all-box {
      label {
        width: 50px;
      }
    }
    .select-title {
      height: 50px;
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
    .select-title {
      flex-direction: column;
      gap: 0.5rem;
      justify-content: flex-start;
    }
    .select-title {
      height: 80px;
    }
  }
`;
