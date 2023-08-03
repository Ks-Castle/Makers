import { SelectArea } from "./styles";
import * as BOSSDATA from "@/data/mockup_maple_const/bossDatas";
import { SVG } from "@/context/index.js";
import { Boss, FinalType } from "../DTO/index";
import { Setter } from "@/data/globalDTO";

interface IPropsType {
  setFinalData: Setter<FinalType[]>;
  finalData: FinalType[];
  numCharacters: number;
}

const RenderAreaCompoent = (props: IPropsType) => {
  const dayhalfLength = Math.ceil(BOSSDATA.dailyBosses.length / 2);
  const weekhalfLength = Math.ceil(BOSSDATA.weeklyBosses.length / 2 + 1);
  const firstHalf = BOSSDATA.dailyBosses.slice(0, dayhalfLength);
  const secondHalf = BOSSDATA.dailyBosses.slice(dayhalfLength);
  const thirdHalf = BOSSDATA.weeklyBosses.slice(0, weekhalfLength);
  const fourthHalf = BOSSDATA.weeklyBosses.slice(weekhalfLength);

  const handleBossChange = (
    index: number,
    name: string,
    difficulty: string,
    price: number,
    img: string,
    drops: string[]
  ): void => {
    props.setFinalData((prevFinalData) => {
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
                checked={props.finalData[index]?.weekly.some(
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
                checked={props.finalData[index]?.daily.some(
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
    for (let i = 0; i < props.numCharacters; i++) {
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
                    props.finalData[i]?.daily?.length ===
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
                      props.finalData[i]?.weekly?.length ===
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
                      props.finalData[i]?.weekly?.length ===
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
                      props.finalData[i]?.weekly?.length ===
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
    props.setFinalData((prevData) => {
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
    props.setFinalData((prevData) => {
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
  return <SelectArea>{renderSelectSection()}</SelectArea>;
};

export default RenderAreaCompoent;
