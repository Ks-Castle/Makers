import flex from "@/assets/styles/flex.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Button, Input } from "@/context/Index.js";
import { FONT_SIZE, RESOLUTION } from "@/data/str.js";
import { useState } from "react";
import styled from "styled-components";

interface Boss {
  name: string;
  difficulty: string;
  price: number;
}

const dailyBosses: Boss[] = [
  { name: "Zakum", difficulty: "EZ", price: 1000000 },
  { name: "Zakum", difficulty: "NM", price: 3062500 },
  { name: "Hilla", difficulty: "NM", price: 4000000 },
  { name: "Von Bon", difficulty: "NM", price: 4840000 },
  { name: "Pierre", difficulty: "NM", price: 4840000 },
  { name: "Crimson Q", difficulty: "NM", price: 4840000 },
  { name: "Vellum", difficulty: "NM", price: 4840000 },
  { name: "OMNI-CLN", difficulty: "NM", price: 6250000 },
  { name: "Horntail", difficulty: "EZ", price: 4410000 },
  { name: "Horntail", difficulty: "NM", price: 5062500 },
  { name: "Horntail", difficulty: "CHS", price: 6760000 },
  { name: "Pink Bean", difficulty: "NM", price: 7022500 },
  { name: "Von Leon", difficulty: "EZ", price: 5290000 },
  { name: "Von Leon", difficulty: "NM", price: 7290000 },
  { name: "Von Leon", difficulty: "HD", price: 12250000 },
  { name: "Arkarium", difficulty: "EZ", price: 5760000 },
  { name: "Arkarium", difficulty: "NM", price: 12600000 },
  { name: "Magnus", difficulty: "EZ", price: 3610000 },
  { name: "Magnus", difficulty: "NM", price: 12960000 },
  { name: "Papulatus", difficulty: "EZ", price: 3422500 },
  { name: "Papulatus", difficulty: "NM", price: 13322500 },
  { name: "Ranmaru", difficulty: "NM", price: 4202500 },
  { name: "Ranmaru", difficulty: "HD", price: 13322500 },
];

const weeklyBosses: Boss[] = [
  { name: "Cygnus-", difficulty: "EZ", price: 45562500 },
  { name: "Cygnus-", difficulty: "NM", price: 72250000 },
  { name: "Hilla-", difficulty: "HD", price: 56250000 },
  { name: "Pink Bean-", difficulty: "CHS", price: 64000000 },
  { name: "Zakum-", difficulty: "CHS", price: 81000000 },
  { name: "Pierre-", difficulty: "CHS", price: 81000000 },
  { name: "Von Bon-", difficulty: "CHS", price: 81000000 },
  { name: "Crimson Q-", difficulty: "CHS", price: 81000000 },
  { name: "Princess-", difficulty: "NM", price: 81000000 },
  { name: "Magnus-", difficulty: "HD", price: 95062500 },
  { name: "Vellum-", difficulty: "CHS", price: 105062500 },
  { name: "Papulatus-", difficulty: "CHS", price: 132250000 },
  { name: "Akechi-", difficulty: "NM", price: 144000000 },
  { name: "Lotus-", difficulty: "NM", price: 162562500 },
  { name: "Lotus-", difficulty: "HD", price: 370562500 },
  { name: "Damien-", difficulty: "NM", price: 169000000 },
  { name: "Damien-", difficulty: "HD", price: 351562500 },
  { name: "Lucid-", difficulty: "EZ", price: 175562500 },
  { name: "Lucid-", difficulty: "NM", price: 203062500 },
  { name: "Lucid-", difficulty: "HD", price: 400000000 },
  { name: "Will-", difficulty: "EZ", price: 191275000 },
  { name: "Will-", difficulty: "NM", price: 232562500 },
  { name: "Will-", difficulty: "HD", price: 441000000 },
  { name: "Slime-", difficulty: "NM", price: 171610000 },
  { name: "Slime-", difficulty: "CHS", price: 451562500 },
  { name: "Gloom-", difficulty: "NM", price: 248062500 },
  { name: "Gloom-", difficulty: "CHS", price: 462250000 },
  { name: "Darknell-", difficulty: "NM", price: 264062500 },
  { name: "Darknell-", difficulty: "HD", price: 484000000 },
  { name: "V Hilla-", difficulty: "NM", price: 447600000 },
  { name: "V Hilla-", difficulty: "HD", price: 552250000 },
  { name: "Seren-", difficulty: "NM", price: 668437500 },
  { name: "Seren-", difficulty: "HD", price: 756250000 },
  { name: "Seren-", difficulty: "EX", price: 3025000000 },
  { name: "Kalos-", difficulty: "CHS", price: 1000000000 },
  { name: "B Mage-", difficulty: "HD", price: 2500000000 },
  { name: "B Mage-", difficulty: "EX", price: 10000000000 },
];

const Crystal = () => {
  const [numCharacters, setNumCharacters] = useState<number>(1);
  const [numCrystals, setNumCrystals] = useState<number>(180);
  const [selectedBoss, setSelectedBoss] = useState<{ [key: string]: string }[]>(
    []
  );

  const dayhalfLength = Math.ceil(dailyBosses.length / 2);
  const weekhalfLength = Math.ceil(weeklyBosses.length / 2);
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
      const updatedBoss = { ...prevSelectedBoss[index], [name]: difficulty };
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
`;
