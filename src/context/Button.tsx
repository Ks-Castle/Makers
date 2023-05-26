import flex from "@/assets/styles/flex";
import styled from "styled-components";

type FiveWay = "top" | "bottom" | "left" | "right" | "all";

interface ButtonProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  contain?: boolean;
  bg?: string;
  round?: string;
  border?: string;
  borderType?: FiveWay;
  margin?: string;
  marginType?: FiveWay;
  padding?: string;
  paddingType?: FiveWay;
  color?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  image?: boolean;
  imageURL?: string;
  imageSize?: string;
}

const Button = ({
  children,
  height = "50",
  bg = "var(--blue)",
  round = "10px",
  color = "var(--white)",
  disabled = false,
  size = "1.6",
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton
      {...props}
      height={height}
      bg={bg}
      round={round}
      color={color}
      size={size}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  ${flex({})};
  cursor: pointer;
  width: 100%;
  max-width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}rem;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.round};
  background-image: ${(props) => props.image && `url(${props.imageURL})`};
  background-position: center;
  background-size: ${(props) => props.image && props.imageSize};
  background-repeat: no-repeat;
  ${(props) => props.borderType === "top" && `border-top: ${props.border};`}
  ${(props) =>
    props.borderType === "bottom" && `border-bottom: ${props.border};`}
  ${(props) => props.borderType === "left" && `border-left: ${props.border};`}
  ${(props) => props.borderType === "right" && `border-right: ${props.border};`}
  ${(props) => props.borderType === "all" && `border: ${props.border};`}

  ${(props) => props.marginType === "top" && `margin-top: ${props.margin}rem;`}
  ${(props) =>
    props.marginType === "bottom" && `margin-bottom: ${props.margin}rem; `}
  ${(props) =>
    props.marginType === "left" && `margin-left: ${props.margin}rem;`}
  ${(props) =>
    props.marginType === "right" && `margin-right: ${props.margin}rem;`}
  ${(props) => props.marginType === "all" && `margin: ${props.margin}rem;`}
  ${(props) =>
    props.paddingType === "top" && `padding-top: ${props.padding}rem;`}
  ${(props) =>
    props.paddingType === "bottom" && `padding-bottom: ${props.padding}rem; `}
  ${(props) =>
    props.paddingType === "left" && `padding-left: ${props.padding}rem;`}
  ${(props) =>
    props.paddingType === "right" && `padding-right: ${props.padding}rem;`}
  ${(props) => props.paddingType === "all" && `padding: ${props.padding}rem;`}
`;
