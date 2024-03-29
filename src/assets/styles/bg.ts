import { css } from "styled-components";

type SizeType = "cover" | "contain";

type PositionType = "center" | string;
type RepeatType = "no-repeat" | "repeat";

export default function bg({
  size = "cover",
  position = "center",
  repeat = "no-repeat",
}: {
  url?: string;
  size?: SizeType;
  position?: PositionType;
  repeat?: RepeatType;
}) {
  return css`
    background-size: ${size};
    background-position: ${position};
    background-repeat: ${repeat};
  `;
}
