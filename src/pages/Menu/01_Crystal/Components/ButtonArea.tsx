import { Setter } from "@/data/globalDTO.js";
import { BossCalculateResult, FinalType } from "../DTO/index.js";
import { ButtonArea } from "./styles.js";
import { Button } from "@/context/Index.js";

interface IPropsType {
  numCrystals: number;
  finalData: FinalType[];
  setBossResultsState: Setter<BossCalculateResult[]>;
  setFinalRemainingCrystals: Setter<number>;
  setToggleModal: Setter<boolean>;
}

const ButtonAreaComponent = (props: IPropsType) => {
  const calculateCrystalsRemaining = () => {
    let remainingCrystals = props.numCrystals;
    const bossResults: BossCalculateResult[] = props.finalData.map(() => ({
      index: 0,
      data: [],
    }));

    props.finalData.forEach((v, i) => {
      remainingCrystals -= v.weekly.length;
      if (v.daily.length > 0 || v.weekly.length > 0) {
        v.daily.sort((a, b) => b.price - a.price);
        let bossIndex = 0;
        while (bossIndex < v.daily.length) {
          const boss = v.daily[bossIndex];
          bossResults[i].data.push({
            name: boss.name,
            difficulty: boss.difficulty,
            price: boss.price,
            count: 7,
            img: boss.img,
            drops: boss.drops,
          });
          bossIndex++;
        }
      }
    });

    let totalCounts = 0;
    bossResults.forEach((bossResult) => {
      bossResult.data.forEach((bossData) => {
        totalCounts += bossData.count;
      });
    });

    while (remainingCrystals < totalCounts) {
      bossResults.forEach((bossResult) => {
        let minPriceBossIndex = 0;
        let minPrice = bossResult.data[0]?.price || 0;
        bossResult.data.forEach((bossData, index) => {
          if (bossData.price && bossData.price < minPrice) {
            minPrice = bossData.price;
            minPriceBossIndex = index;
          }
        });
        if (remainingCrystals >= totalCounts) {
          return;
        }
        if (bossResult.data[minPriceBossIndex]?.count) {
          totalCounts -= bossResult.data[minPriceBossIndex].count;
        }
        bossResult.data.splice(minPriceBossIndex, 1);
      });
    }

    props.finalData.forEach((v, i) => {
      if (v.daily.length > 0 || v.weekly.length > 0) {
        let bossIndex = 0;
        while (bossIndex < v.weekly.length) {
          const boss = v.weekly[bossIndex];
          bossResults[i].data.push({
            name: boss.name,
            difficulty: boss.difficulty,
            price: boss.price,
            count: 1,
            img: boss.img,
            drops: boss.drops,
          });
          bossIndex++;
        }
      }
      bossResults[i].data.sort((a, b) => b.price - a.price);
    });

    props.setBossResultsState(bossResults);
    props.setFinalRemainingCrystals(remainingCrystals - totalCounts);
    props.setToggleModal((v) => !v);
  };
  return (
    <ButtonArea>
      <div style={{ width: "100px" }}></div>
      <div className="introduce-text">
        <p>* Check the maximum difficulty level of bosses can defeat *</p>
        <p>* This is only for GMS Reboot *</p>
      </div>
      <Button
        width="100"
        height="30px"
        padding="1"
        paddingType="all"
        onClick={calculateCrystalsRemaining}
      >
        CALCULATE
      </Button>
    </ButtonArea>
  );
};

export default ButtonAreaComponent;
