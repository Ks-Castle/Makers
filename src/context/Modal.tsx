import { Setter } from "@/data/DTO.js";
import { RESOLUTION, Z_INDEX } from "@/data/str.js";
import styled from "styled-components";
import { Button, SVG } from "./Index.js";
import { BossCalculateResult, CalResult } from "@/data/bossDatas.js";
import { useEffect, useState } from "react";
import { flex, font } from "@/assets/styles/index.js";

interface PropsType {
  setToggle: Setter<boolean>;
  finalRemainingCrystals: number;
  bossResultsState: BossCalculateResult[];
}

interface MinMaxType {
  min: number;
  max: number;
}

const Modal = ({ ...props }: PropsType) => {
  const [minMax, setMinMax] = useState<MinMaxType>({ min: 0, max: 0 });
  const [isWeekly, setIsWeekly] = useState(false);
  const [isDaily, setIsDaily] = useState(false);
  const onCloseHandler = () => {
    props.setToggle((v) => !v);
  };

  const calculateMinMaxPrice = (data: CalResult[]) => {
    let minPrice = 0;
    let maxPrice = 0;
    let oneCountPriceSum = 0;

    for (const item of data) {
      if (item.count === 1) {
        oneCountPriceSum += item.price;
      } else {
        minPrice += item.price * item.count;
      }
      maxPrice += item.price * item.count;
    }
    minPrice += oneCountPriceSum / 6;
    return { min: minPrice, max: maxPrice };
  };

  useEffect(() => {
    props.bossResultsState.forEach((v) => {
      if (v.data.some((vv) => vv.count === 1)) {
        setIsWeekly(true);
      }
      if (v.data.some((vv) => vv.count === 7)) {
        setIsDaily(true);
      }
    });
  }, []);

  useEffect(() => {
    const calculateMinMax = () => {
      let totalMinPrice = 0;
      let totalMaxPrice = 0;
      for (const bossResult of props.bossResultsState) {
        const { data } = bossResult;
        const { min, max } = calculateMinMaxPrice(data);
        totalMinPrice += min;
        totalMaxPrice += max;
      }
      setMinMax({ min: totalMinPrice, max: totalMaxPrice });
    };
    calculateMinMax();
  }, [props.bossResultsState, props.finalRemainingCrystals]);

  return (
    <Wrapper>
      <ModalContainer>
        <ContentnArea>
          <div className="content-total">
            <div className="content-total-price">
              <div className="modal-title">Expected Total Meso</div>
              <div>
                {minMax.min
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                (Solo Daily + 6P Weekly)
              </div>
              <div>
                {minMax.max
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                (Solo Daily + Solo Weekly)
              </div>
            </div>
            <div className="content-total-remainCrystal">
              <div className="modal-title">Remaining Crystals</div>
              {props.finalRemainingCrystals}
            </div>
          </div>

          {props.bossResultsState.map((v, i) => {
            if (v.data.length !== 0) {
              return (
                <div className="content-recommend" key={i}>
                  <div className="modal-title">Character No.{i + 1}</div>
                  {isWeekly && (
                    <div className="content-recommend-boss">
                      <div className="modal-title">Weekly Bosses</div>
                      <div className="boss-imgs-container">
                        {v.data.map((vv, ii) => {
                          if (vv.count === 1) {
                            return (
                              <SVG iconName={vv.img} type="boss" key={ii} />
                            );
                          }
                        })}
                      </div>
                    </div>
                  )}

                  {isDaily && (
                    <div className="content-recommend-boss">
                      <div className="modal-title">
                        Daily Bosses Recommendation
                      </div>
                      <div className="boss-imgs-container">
                        {v.data.map((vv, ii) => {
                          if (vv.count === 7) {
                            return (
                              <SVG iconName={vv.img} type="boss" key={ii} />
                            );
                          }
                        })}
                      </div>
                    </div>
                  )}
                  <div className="content-recommend-drops">
                    <div className="modal-title">Expected Drops</div>
                    <div className="boss-imgs-container">
                      {[...new Set(v.data.flatMap((v) => v.drops))].map(
                        (vv) => (
                          <SVG iconName={vv} type="drop" key={vv} contain />
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </ContentnArea>
        <ButtonArea>
          <Button
            width="100"
            height="30px"
            padding="1"
            paddingType="all"
            onClick={onCloseHandler}
          >
            Close
          </Button>
        </ButtonArea>
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  ${flex({})}
  ${font({})}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.MODAL};
  background: #00000050;
  .modal-title {
    ${font({ size: 20, weight: 900 })}
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    ${font({ size: 12 })}
    .modal-title {
      ${font({ size: 16, weight: 900 })}
    }
  }
`;

const ModalContainer = styled.div`
  ${flex({ gap: "1rem", direction: "column" })}
  background: var(--dark-010);
  color: var(--dark-100);
  width: 95%;
  max-width: 551px;
  min-height: 283px;
  border-radius: 10px;
  padding: 2rem;
  -webkit-box-shadow: 18px 18px 34px -11px rgba(0, 0, 0, 0.16);
  box-shadow: 18px 18px 34px -11px rgba(0, 0, 0, 0.16);
`;

const ContentnArea = styled.div`
  ${flex({
    justify: "flex-start",
    align: "flex-start",
    direction: "column",
    gap: "2rem",
  })}
  width: 100%;
  min-height: 190px;
  max-height: 600px;
  overflow: scroll;
  .content-total,
  .content-total-remainCrystal,
  .content-total-price,
  .content-recommend,
  .content-recommend-boss,
  .content-recommend-drops {
    ${flex({
      gap: "1rem",
      direction: "column",
      justify: "flex-start",
      align: "flex-start",
    })}
    width: 100%;
  }
  .boss-imgs-container {
    ${flex({
      justify: "flex-start",
      align: "flex-start",
    })}
    flex-wrap: wrap;
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    max-height: 400px;
    .svgClass {
      width: 35px;
      height: 35px;
    }
  }
`;

const ButtonArea = styled.div`
  ${flex({ justify: "flex-end" })}
  width: 100%;
`;
