import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ThemeLightTypeFillStateType = {
  tabText?: string;
  showBadge: boolean;

  /** Style props */
  themeLightTypeFillStatePosition?: Property.Position;
  themeLightTypeFillStateBorderRadius?: Property.BorderRadius;
  themeLightTypeFillStateBackgroundColor?: Property.BackgroundColor;
  tabTextColor?: Property.Color;
  notificationCounterBackgroundColor?: Property.BackgroundColor;
  textColor?: Property.Color;
};

const ThemeLightTypeFillState: NextPage<ThemeLightTypeFillStateType> = ({
  tabText,
  showBadge = false,
  themeLightTypeFillStatePosition,
  themeLightTypeFillStateBorderRadius,
  themeLightTypeFillStateBackgroundColor,
  tabTextColor,
  notificationCounterBackgroundColor,
  textColor,
}) => {
  const themeLightTypeFillStateStyle: CSS.Properties = useMemo(() => {
    return {
      position: themeLightTypeFillStatePosition,
      borderRadius: themeLightTypeFillStateBorderRadius,
      backgroundColor: themeLightTypeFillStateBackgroundColor,
    };
  }, [
    themeLightTypeFillStatePosition,
    themeLightTypeFillStateBorderRadius,
    themeLightTypeFillStateBackgroundColor,
  ]);

  const tabTextStyle: CSS.Properties = useMemo(() => {
    return {
      color: tabTextColor,
    };
  }, [tabTextColor]);

  const notificationCounterStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: notificationCounterBackgroundColor,
    };
  }, [notificationCounterBackgroundColor]);

  const text3Style: CSS.Properties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className="relative overflow-hidden flex flex-row py-[9px] px-4 items-center justify-center gap-[8px] text-left text-mini text-gray-50 font-text-button-semibold-large"
      style={themeLightTypeFillStateStyle}
    >
      <div
        className="relative tracking-[-0.1px] leading-[22px] font-semibold"
        style={tabTextStyle}
      >
        {tabText}
      </div>
      {showBadge && (
        <div
          className="rounded-xl bg-neutral-500 h-[18px] hidden flex-col py-0 px-1.5 box-border items-center justify-center text-smi text-gray-700"
          style={notificationCounterStyle}
        >
          <div
            className="relative tracking-[-0.1px] leading-[18px] font-medium"
            style={text3Style}
          >
            9
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeLightTypeFillState;
