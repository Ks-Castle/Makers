import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Input, SVG } from "@/context/Index";
import Modal from "@/pages/Menu/01_Crystal/Components/CrystalModal.js";
import * as BOSSDATA from "@/data/mockup_maple_const/bossDatas.js";
import { useState } from "react";
import { InputArea, SelectArea, Wrapper } from "./Components/styles.js";
import { Boss, BossCalculateResult, FinalType } from "./DTO/index.js";
import ButtonAreaComponent from "./Components/ButtonArea.js";

const Crystal = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [numCharacters, setNumCharacters] = useState<number>(1);
  const [numCrystals, setNumCrystals] = useState<number>(180);

  const initialFinalData: FinalType[] = Array.from({ length: 9 }, () => ({
    daily: [],
    weekly: [],
  }));

  const [finalData, setFinalData] = useState<FinalType[]>(initialFinalData);

  const [bossResultsState, setBossResultsState] = useState<
    BossCalculateResult[]
  >(
    finalData.map(() => ({
      index: 0,
      data: [],
    }))
  );
  const [finalRemainingCrystals, setFinalRemainingCrystals] =
    useState<number>(0);

  const dayhalfLength = Math.ceil(BOSSDATA.dailyBosses.length / 2);
  const weekhalfLength = Math.ceil(BOSSDATA.weeklyBosses.length / 2 + 1);
  const firstHalf = BOSSDATA.dailyBosses.slice(0, dayhalfLength);
  const secondHalf = BOSSDATA.dailyBosses.slice(dayhalfLength);
  const thirdHalf = BOSSDATA.weeklyBosses.slice(0, weekhalfLength);
  const fourthHalf = BOSSDATA.weeklyBosses.slice(weekhalfLength);

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
    img: string,
    drops: string[]
  ): void => {
    setFinalData((prevFinalData) => {
      const newFinalData = [...prevFinalData];
      while (newFinalData.length <= index) {
        newFinalData.push({ daily: [], weekly: [] });
      }

      const bossToAdd: Boss = { name, difficulty, price, img, drops };
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
            <label
              htmlFor={
                boss.name.includes("-")
                  ? `weekly-${boss.difficulty}-${boss.name}-${index}`
                  : `daily-${boss.difficulty}-${boss.name}-${index}`
              }
            >
              <SVG iconName={`${boss.img}`} type="boss" />
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
                    boss.img,
                    boss.drops
                  )
                }
              />
            ) : (
              <input
                type="checkbox"
                id={`daily-${boss.difficulty}-${boss.name}-${index}`}
                name={`daily-${boss.name}-${index}`}
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
                    boss.img,
                    boss.drops
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
                    finalData[i]?.daily?.length ===
                    BOSSDATA.dailyBossesToCheck.length
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
                  <input
                    type="checkbox"
                    id={`noob-${i}`}
                    onChange={() =>
                      handleCheckAllWeekly(i, BOSSDATA.noobWeeklyBosses)
                    }
                    checked={
                      finalData[i]?.weekly?.length ===
                      BOSSDATA.noobWeeklyBosses.length
                    }
                  />
                  <label htmlFor={`noob-${i}`}>Noob</label>
                </div>
                <div className="select-all-box">
                  <input
                    type="checkbox"
                    id={`pro-${i}`}
                    onChange={() =>
                      handleCheckAllWeekly(i, BOSSDATA.proWeeklyBosses)
                    }
                    checked={
                      finalData[i]?.weekly?.length ===
                      BOSSDATA.proWeeklyBosses.length
                    }
                  />
                  <label htmlFor={`pro-${i}`}>Pro</label>
                </div>
                <div className="select-all-box">
                  <input
                    type="checkbox"
                    id={`hacker-${i}`}
                    onChange={() =>
                      handleCheckAllWeekly(i, BOSSDATA.hackerWeeklyBosses)
                    }
                    checked={
                      finalData[i]?.weekly?.length ===
                      BOSSDATA.hackerWeeklyBosses.length
                    }
                  />
                  <label htmlFor={`hacker-${i}`}>Hacker</label>
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
        prevData[characterIndex]?.daily?.length ===
        BOSSDATA.dailyBossesToCheck.length;

      if (allDailyBossesChecked) {
        updatedFinalData[characterIndex].daily = [];
      } else {
        updatedFinalData[characterIndex].daily = BOSSDATA.dailyBossesToCheck;
      }

      return updatedFinalData;
    });
  };

  const handleCheckAllWeekly = (
    characterIndex: number,
    weeklyBossesArray: Boss[]
  ) => {
    setFinalData((prevData) => {
      const updatedFinalData = [...prevData];
      const allWeeklyBossesChecked =
        prevData[characterIndex]?.weekly?.length === weeklyBossesArray.length;

      if (allWeeklyBossesChecked) {
        updatedFinalData[characterIndex].weekly = [];
      } else {
        updatedFinalData[characterIndex].weekly = weeklyBossesArray;
      }

      return updatedFinalData;
    });
  };

  return (
    <Layout>
      {toggleModal && (
        <Modal
          setToggle={setToggleModal}
          bossResultsState={bossResultsState}
          finalRemainingCrystals={finalRemainingCrystals}
        />
      )}
      <Head
        link="Maplestory Boss Crystal Calculator"
        desc="For making your maple life easier."
      />
      <Wrapper>
        <ButtonAreaComponent
          numCrystals={numCrystals}
          finalData={finalData}
          setBossResultsState={setBossResultsState}
          setFinalRemainingCrystals={setFinalRemainingCrystals}
          setToggleModal={setToggleModal}
        />
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
