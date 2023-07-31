import { css } from "styled-components";

type FontType = 12 | 16 | 20 | 25 | 30 | 50;
type WeightType = 500 | 900;

export default function font({
  family = "Roboto",
  size = 16,
  weight = 500,
}: {
  family?: string;
  size?: FontType;
  weight?: WeightType;
}) {
  const fontSizeInRem = `${size / 10}rem`;

  return css`
    font-family: ${family};
    font-size: ${fontSizeInRem};
    font-weight: ${weight};
  `;
}
