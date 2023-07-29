import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type IconButtonBaseType = {
  icon?: string;

  /** Style props */
  iconButtonBasePosition?: Property.Position;
  iconButtonBaseBorderRadius?: Property.BorderRadius;
  iconButtonBaseBackgroundColor?: Property.BackgroundColor;
  iconButtonBaseBorder?: Property.Border;
  iconButtonBaseTop?: Property.Top;
  iconButtonBaseRight?: Property.Right;
  iconButtonBaseBoxSizing?: Property.BoxSizing;
  iconButtonBaseWidth?: Property.Width;
  iconButtonBaseHeight?: Property.Height;
  iconButtonBaseAlignSelf?: Property.AlignSelf;
  iconButtonBaseFlex?: Property.Flex;
  iconButtonBaseBoxShadow?: Property.BoxShadow;
};

const IconButtonBase: NextPage<IconButtonBaseType> = ({
  icon,
  iconButtonBasePosition,
  iconButtonBaseBorderRadius,
  iconButtonBaseBackgroundColor,
  iconButtonBaseBorder,
  iconButtonBaseTop,
  iconButtonBaseRight,
  iconButtonBaseBoxSizing,
  iconButtonBaseWidth,
  iconButtonBaseHeight,
  iconButtonBaseAlignSelf,
  iconButtonBaseFlex,
  iconButtonBaseBoxShadow,
}) => {
  const iconButtonBaseStyle: CSS.Properties = useMemo(() => {
    return {
      position: iconButtonBasePosition,
      borderRadius: iconButtonBaseBorderRadius,
      backgroundColor: iconButtonBaseBackgroundColor,
      border: iconButtonBaseBorder,
      top: iconButtonBaseTop,
      right: iconButtonBaseRight,
      boxSizing: iconButtonBaseBoxSizing,
      width: iconButtonBaseWidth,
      height: iconButtonBaseHeight,
      alignSelf: iconButtonBaseAlignSelf,
      flex: iconButtonBaseFlex,
      boxShadow: iconButtonBaseBoxShadow,
    };
  }, [
    iconButtonBasePosition,
    iconButtonBaseBorderRadius,
    iconButtonBaseBackgroundColor,
    iconButtonBaseBorder,
    iconButtonBaseTop,
    iconButtonBaseRight,
    iconButtonBaseBoxSizing,
    iconButtonBaseWidth,
    iconButtonBaseHeight,
    iconButtonBaseAlignSelf,
    iconButtonBaseFlex,
    iconButtonBaseBoxShadow,
  ]);

  return (
    <div
      className="relative rounded bg-brand-600 shadow-[0px_1px_2px_rgba(31,_41,_55,_0.08)] flex flex-row p-2 items-center justify-center"
      style={iconButtonBaseStyle}
    >
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0"
        alt=""
        src={icon}
      />
    </div>
  );
};

export default IconButtonBase;
