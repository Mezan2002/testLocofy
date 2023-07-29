import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import IconButtonBase from "./icon-button-base";

type SizeRegularShapeRoundTypType = {
  icon?: string;

  /** Style props */
  sizeRegularShapeRoundTypPosition?: Property.Position;
  sizeRegularShapeRoundTypWidth?: Property.Width;
  sizeRegularShapeRoundTypHeight?: Property.Height;
  sizeRegularShapeRoundTypTop?: Property.Top;
  sizeRegularShapeRoundTypLeft?: Property.Left;
  sizeRegularShapeRoundTypBoxShadow?: Property.BoxShadow;
  iconButtonBaseBackgroundColor?: Property.BackgroundColor;
  iconButtonBaseAlignSelf?: Property.AlignSelf;
  iconButtonBaseFlex?: Property.Flex;
  iconButtonBaseBorder?: Property.Border;
};

const SizeRegularShapeRoundTyp: NextPage<SizeRegularShapeRoundTypType> = ({
  icon,
  sizeRegularShapeRoundTypPosition,
  sizeRegularShapeRoundTypWidth,
  sizeRegularShapeRoundTypHeight,
  sizeRegularShapeRoundTypTop,
  sizeRegularShapeRoundTypLeft,
  sizeRegularShapeRoundTypBoxShadow,
  iconButtonBaseBackgroundColor,
  iconButtonBaseAlignSelf,
  iconButtonBaseFlex,
  iconButtonBaseBorder,
}) => {
  const sizeRegularShapeRoundTypStyle: CSS.Properties = useMemo(() => {
    return {
      position: sizeRegularShapeRoundTypPosition,
      width: sizeRegularShapeRoundTypWidth,
      height: sizeRegularShapeRoundTypHeight,
      top: sizeRegularShapeRoundTypTop,
      left: sizeRegularShapeRoundTypLeft,
      boxShadow: sizeRegularShapeRoundTypBoxShadow,
    };
  }, [
    sizeRegularShapeRoundTypPosition,
    sizeRegularShapeRoundTypWidth,
    sizeRegularShapeRoundTypHeight,
    sizeRegularShapeRoundTypTop,
    sizeRegularShapeRoundTypLeft,
    sizeRegularShapeRoundTypBoxShadow,
  ]);

  const iconButtonBaseStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: iconButtonBaseBackgroundColor,
      alignSelf: iconButtonBaseAlignSelf,
      flex: iconButtonBaseFlex,
      border: iconButtonBaseBorder,
    };
  }, [
    iconButtonBaseBackgroundColor,
    iconButtonBaseAlignSelf,
    iconButtonBaseFlex,
    iconButtonBaseBorder,
  ]);

  return (
    <div
      className="relative flex flex-row items-start justify-start"
      style={sizeRegularShapeRoundTypStyle}
    >
      <IconButtonBase
        icon="/icon.svg"
        iconButtonBasePosition="unset"
        iconButtonBaseBorderRadius="100px"
        iconButtonBaseBackgroundColor="#5048e5"
        iconButtonBaseBorder="unset"
        iconButtonBaseTop="unset"
        iconButtonBaseRight="unset"
        iconButtonBaseBoxSizing="border-box"
        iconButtonBaseWidth="unset"
        iconButtonBaseHeight="unset"
        iconButtonBaseAlignSelf="unset"
        iconButtonBaseFlex="unset"
        iconButtonBaseBoxShadow="0px 1px 2px rgba(31, 41, 55, 0.08)"
      />
    </div>
  );
};

export default SizeRegularShapeRoundTyp;
