import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import SizeRegularShapeRoundTyp from "./size-regular-shape-round-typ";
import IconButtonBase from "./icon-button-base";

type SearchOffZoomOnType = {
  map?: string;
  icon?: string;
  icon1?: string;
  icon2?: string;

  /** Style props */
  searchOffZoomOnPosition?: Property.Position;
  searchOffZoomOnWidth?: Property.Width;
  searchOffZoomOnHeight?: Property.Height;
  searchOffZoomOnTop?: Property.Top;
  searchOffZoomOnRight?: Property.Right;
  searchOffZoomOnBottom?: Property.Bottom;
  searchOffZoomOnLeft?: Property.Left;
  searchOffZoomOnBoxShadow?: Property.BoxShadow;
  searchOffZoomOnOverflow?: Property.Overflow;
  mapIconBorderRadius?: Property.BorderRadius;
  iconButtonBoxShadow?: Property.BoxShadow;
  iconButtonBaseBorder?: Property.Border;
  iconButtonBoxShadow1?: Property.BoxShadow;
  iconButtonBaseBorder1?: Property.Border;
  iconButtonBaseBoxShadow?: Property.BoxShadow;
  iconButtonBaseBorder2?: Property.Border;
};

const SearchOffZoomOn: NextPage<SearchOffZoomOnType> = ({
  map,
  icon,
  icon1,
  icon2,
  searchOffZoomOnPosition,
  searchOffZoomOnWidth,
  searchOffZoomOnHeight,
  searchOffZoomOnTop,
  searchOffZoomOnRight,
  searchOffZoomOnBottom,
  searchOffZoomOnLeft,
  searchOffZoomOnBoxShadow,
  searchOffZoomOnOverflow,
  mapIconBorderRadius,
  iconButtonBoxShadow,
  iconButtonBaseBorder,
  iconButtonBoxShadow1,
  iconButtonBaseBorder1,
  iconButtonBaseBoxShadow,
  iconButtonBaseBorder2,
}) => {
  const searchOffZoomOnStyle: CSS.Properties = useMemo(() => {
    return {
      position: searchOffZoomOnPosition,
      width: searchOffZoomOnWidth,
      height: searchOffZoomOnHeight,
      top: searchOffZoomOnTop,
      right: searchOffZoomOnRight,
      bottom: searchOffZoomOnBottom,
      left: searchOffZoomOnLeft,
      boxShadow: searchOffZoomOnBoxShadow,
      overflow: searchOffZoomOnOverflow,
    };
  }, [
    searchOffZoomOnPosition,
    searchOffZoomOnWidth,
    searchOffZoomOnHeight,
    searchOffZoomOnTop,
    searchOffZoomOnRight,
    searchOffZoomOnBottom,
    searchOffZoomOnLeft,
    searchOffZoomOnBoxShadow,
    searchOffZoomOnOverflow,
  ]);

  const mapIconStyle: CSS.Properties = useMemo(() => {
    return {
      borderRadius: mapIconBorderRadius,
    };
  }, [mapIconBorderRadius]);

  const sizeRegularShapeRoundTypStyle: CSS.Properties = useMemo(() => {
    return {
      boxShadow: iconButtonBoxShadow,
    };
  }, [iconButtonBoxShadow]);

  const iconButtonBaseStyle: CSS.Properties = useMemo(() => {
    return {
      border: iconButtonBaseBorder,
    };
  }, [iconButtonBaseBorder]);

  const sizeRegularShapeRoundTypStyle1: CSS.Properties = useMemo(() => {
    return {
      boxShadow: iconButtonBoxShadow1,
    };
  }, [iconButtonBoxShadow1]);

  const iconButtonBaseStyle1: CSS.Properties = useMemo(() => {
    return {
      border: iconButtonBaseBorder1,
    };
  }, [iconButtonBaseBorder1]);

  const iconButtonBaseStyle2: CSS.Properties = useMemo(() => {
    return {
      boxShadow: iconButtonBaseBoxShadow,
      border: iconButtonBaseBorder2,
    };
  }, [iconButtonBaseBoxShadow, iconButtonBaseBorder2]);

  return (
    <div className="relative w-[400px] h-60" style={searchOffZoomOnStyle}>
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={map}
        style={mapIconStyle}
      />
      <div className="absolute right-[16px] bottom-[16px] flex flex-row items-start justify-start gap-[8px]">
        <SizeRegularShapeRoundTyp
          icon="/icon3.svg"
          sizeRegularShapeRoundTypPosition="unset"
          sizeRegularShapeRoundTypWidth="32px"
          sizeRegularShapeRoundTypHeight="32px"
          sizeRegularShapeRoundTypTop="unset"
          sizeRegularShapeRoundTypLeft="unset"
          sizeRegularShapeRoundTypBoxShadow="unset"
          iconButtonBaseBackgroundColor="#fff"
          iconButtonBaseAlignSelf="stretch"
          iconButtonBaseFlex="1"
          iconButtonBaseBorder="1px solid #e5e7eb"
        />
        <SizeRegularShapeRoundTyp
          icon="/icon4.svg"
          sizeRegularShapeRoundTypPosition="unset"
          sizeRegularShapeRoundTypWidth="32px"
          sizeRegularShapeRoundTypHeight="32px"
          sizeRegularShapeRoundTypTop="unset"
          sizeRegularShapeRoundTypLeft="unset"
          sizeRegularShapeRoundTypBoxShadow="unset"
          iconButtonBaseBackgroundColor="#fff"
          iconButtonBaseAlignSelf="stretch"
          iconButtonBaseFlex="1"
          iconButtonBaseBorder="1px solid #e5e7eb"
        />
      </div>
      <IconButtonBase
        icon="/icon5.svg"
        iconButtonBasePosition="absolute"
        iconButtonBaseBorderRadius="100px"
        iconButtonBaseBackgroundColor="#fff"
        iconButtonBaseBorder="1px solid #e5e7eb"
        iconButtonBaseTop="16px"
        iconButtonBaseRight="16px"
        iconButtonBaseBoxSizing="border-box"
        iconButtonBaseWidth="32px"
        iconButtonBaseHeight="32px"
        iconButtonBaseAlignSelf="unset"
        iconButtonBaseFlex="unset"
        iconButtonBaseBoxShadow="0px 1px 2px rgba(31, 41, 55, 0.08)"
      />
    </div>
  );
};

export default SearchOffZoomOn;
