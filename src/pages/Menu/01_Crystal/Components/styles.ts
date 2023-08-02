import { flex, font } from "@/assets/styles/index";
import { RESOLUTION } from "@/data/str";
import styled from "styled-components";

export const Wrapper = styled.div`
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

export const InputArea = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-start",
    gap: "1rem",
  })}
  width: 100%;
  ${font({ size: 20 })}
  .input-container {
    ${flex({ gap: "1rem" })}
    width: 100%;
    p {
      width: 350px;
    }
  }

  @media (max-width: ${RESOLUTION.TABLET}px) {
    ${font({})}
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    ${font({ size: 12 })}
  }
`;

export const ButtonArea = styled.div`
  ${flex({ justify: "space-between" })}
  width: 100%;
  .introduce-text {
    ${font({})}
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .introduce-text {
      ${font({ size: 12 })}
    }
  }
`;

export const SelectArea = styled.div`
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
    ${font({ size: 20, weight: 900 })}
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
    ${font({})}
  }

  .select-input-section {
    ${flex({
      justify: "flex-start",
    })}
    width: 100%;
    ${font({})}
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
      ${font({ size: 12 })}
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
        width: 30px;
        height: 30px;
      }
      .svgClass {
        width: 30px;
        height: 30px;
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
