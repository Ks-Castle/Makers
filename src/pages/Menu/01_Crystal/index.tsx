import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import Modal from "@/pages/Menu/01_Crystal/Components/CrystalModal";
import { useState } from "react";
import { Wrapper } from "./Components/styles";
import { BossCalculateResult, FinalType } from "./DTO/index";
import {
  ButtonAreaComponent,
  InputAreaComponent,
  RenderAreaCompoent,
} from "./Components/Index";

const Crystal = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [numCharacters, setNumCharacters] = useState<number>(1);
  const [numCrystals, setNumCrystals] = useState<number>(180);
  const initialFinalData: FinalType[] = Array.from({ length: 9 }, () => ({
    daily: [],
    weekly: [],
  }));
  const [finalData, setFinalData] = useState<FinalType[]>(initialFinalData);
  const [finalRemainingCrystals, setFinalRemainingCrystals] =
    useState<number>(0);
  const [bossResultsState, setBossResultsState] = useState<
    BossCalculateResult[]
  >(
    finalData.map(() => ({
      index: 0,
      data: [],
    }))
  );

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
        <InputAreaComponent
          setNumCharacters={setNumCharacters}
          setNumCrystals={setNumCrystals}
        />
        <RenderAreaCompoent
          setFinalData={setFinalData}
          finalData={finalData}
          numCharacters={numCharacters}
        />
      </Wrapper>
    </Layout>
  );
};

export default Crystal;
