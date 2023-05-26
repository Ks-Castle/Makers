import { useState, useEffect, forwardRef, ForwardedRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type IconProps = {
  iconName: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  contain?: boolean;
  pointer?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const SVG = forwardRef(
  (
    {
      iconName,
      width = "50px",
      height = "50px",
      children,
      contain,
      pointer,
      onClick,
      disabled,
    }: IconProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [svg, setSvg] = useState<string | null>(null);

    const svgHandler = async (str: string) => {
      try {
        const Svg = await import(`../assets/images/${str}.svg`);
        return Svg.default || null;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const nothing = {};

    useEffect(() => {
      const loadSvg = async () => {
        const svgContent = await svgHandler(iconName);
        setSvg(svgContent);
      };
      loadSvg();
    }, [iconName]);

    return svg ? (
      <SvgWrapper
        name={svg}
        width={width}
        height={height}
        contain={contain}
        pointer={pointer}
        ref={ref}
        onClick={disabled ? () => nothing : onClick}
        className="svgClass"
      >
        {children}
      </SvgWrapper>
    ) : (
      <Loading width={width} height={height} contain={contain}>
        {children}
      </Loading>
    );
  }
);

export default SVG;

const SvgWrapper = styled.div<{
  width?: string;
  height?: string;
  name?: string;
  contain?: boolean;
  pointer?: boolean;
}>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.name});
  background-position: center;
  background-size: ${(props) => (props.contain ? "contain" : "cover")};
  background-repeat: no-repeat;
  ${(props) => props.pointer && `cursor: pointer;`}
`;

const Loading = styled.div<{
  width?: string;
  height?: string;
  name?: string;
  contain?: boolean;
  pointer?: boolean;
}>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
