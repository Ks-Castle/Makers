import { FONT_SIZE } from "@/data/str";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type FiveWay = "top" | "bottom" | "left" | "right" | "all";

interface InputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  width?: string;
  height?: string;
  border?: string;
  borderType?: FiveWay;
  margin?: string;
  marginType?: FiveWay;
  padding?: string;
  paddingType?: FiveWay;
  focus?: boolean;
  defaultValue?: string;
  center?: boolean | undefined;
  readOnly?: boolean;
}

const Input = ({ focus, defaultValue, readOnly, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focus && inputRef.current?.focus();
  }, [focus]);

  return (
    <StyledInput
      {...props}
      ref={inputRef}
      value={defaultValue}
      readOnly={readOnly}
    />
  );
};

const StyledInput = styled.input<InputProps>`
  width: 100%;
  max-width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  font-size: ${FONT_SIZE[12]};
  border-radius: 10px;
  text-align: ${(props) => props.center && "center"};

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
  &::placeholder {
    opacity: 70%;
    font-size: 1.4rem;
    color: ${(props) =>
      props.readOnly ? `var(--dark-100)` : `var(--dark-060)`};
  }
`;

export default Input;
