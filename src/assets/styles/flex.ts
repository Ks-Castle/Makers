import { css } from "styled-components";

type FlexType =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type DirectionType = "row" | "column";

export default function flex({
  justify = "center",
  align = "center",
  direction = "row",
  gap = "",
}: {
  justify?: FlexType;
  align?: FlexType;
  direction?: DirectionType;
  gap?: string;
}) {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    gap: ${gap};
  `;
}
