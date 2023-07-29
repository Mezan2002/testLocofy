import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SizeSmallIconLeftType = {
  maximize?: string;
  text?: string;

  /** Style props */
  sizeSmallIconLeftPosition?: Property.Position;
  sizeSmallIconLeftJustifyContent?: Property.JustifyContent;
  sizeSmallIconLeftGap?: Property.Gap;
  sizeSmallIconLeftWidth?: Property.Width;
  textColor?: Property.Color;
  textTextDecoration?: Property.TextDecoration;
};

const SizeSmallIconLeft: NextPage<SizeSmallIconLeftType> = ({
  maximize,
  text,
  sizeSmallIconLeftPosition,
  sizeSmallIconLeftJustifyContent,
  sizeSmallIconLeftGap,
  sizeSmallIconLeftWidth,
  textColor,
  textTextDecoration,
}) => {
  const sizeSmallIconLeftStyle: CSS.Properties = useMemo(() => {
    return {
      position: sizeSmallIconLeftPosition,
      justifyContent: sizeSmallIconLeftJustifyContent,
      gap: sizeSmallIconLeftGap,
      width: sizeSmallIconLeftWidth,
    };
  }, [
    sizeSmallIconLeftPosition,
    sizeSmallIconLeftJustifyContent,
    sizeSmallIconLeftGap,
    sizeSmallIconLeftWidth,
  ]);

  const text1Style: CSS.Properties = useMemo(() => {
    return {
      color: textColor,
      textDecoration: textTextDecoration,
    };
  }, [textColor, textTextDecoration]);

  return (
    <div
      className="relative flex flex-row items-center justify-start gap-[4px] text-left text-sm text-gray-7001 font-text-button-semibold-large"
      style={sizeSmallIconLeftStyle}
    >
      <img
        className="relative w-4 h-4 overflow-hidden shrink-0"
        alt=""
        src={maximize}
      />
      <div className="relative leading-[20px]" style={text1Style}>
        {text}
      </div>
    </div>
  );
};

export default SizeSmallIconLeft;
