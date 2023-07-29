import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ThemeLightTypeDefaultSizType = {
  placeholder?: string;
  text?: string;
  placeholder1?: string;
  showHintText: boolean;
  showLeadIcon: boolean;
  showTrailingIcon: boolean;
  showLabel: boolean;

  /** Style props */
  themeLightTypeDefaultSizPosition?: Property.Position;
  themeLightTypeDefaultSizBorderRadius?: Property.BorderRadius;
  themeLightTypeDefaultSizWidth?: Property.Width;
  themeLightTypeDefaultSizGap?: Property.Gap;
  themeLightTypeDefaultSizAlignSelf?: Property.AlignSelf;
  themeLightTypeDefaultSizBoxShadow?: Property.BoxShadow;
  inputAlignSelf?: Property.AlignSelf;
  inputBorderRadius?: Property.BorderRadius;
  inputGap?: Property.Gap;
  textFlex?: Property.Flex;
};

const ThemeLightTypeDefaultSiz: NextPage<ThemeLightTypeDefaultSizType> = ({
  placeholder,
  text,
  placeholder1,
  showHintText = true,
  showLeadIcon = true,
  showTrailingIcon = true,
  showLabel = true,
  themeLightTypeDefaultSizPosition,
  themeLightTypeDefaultSizBorderRadius,
  themeLightTypeDefaultSizWidth,
  themeLightTypeDefaultSizGap,
  themeLightTypeDefaultSizAlignSelf,
  themeLightTypeDefaultSizBoxShadow,
  inputAlignSelf,
  inputBorderRadius,
  inputGap,
  textFlex,
}) => {
  const themeLightTypeDefaultSizStyle: CSS.Properties = useMemo(() => {
    return {
      position: themeLightTypeDefaultSizPosition,
      borderRadius: themeLightTypeDefaultSizBorderRadius,
      width: themeLightTypeDefaultSizWidth,
      gap: themeLightTypeDefaultSizGap,
      alignSelf: themeLightTypeDefaultSizAlignSelf,
      boxShadow: themeLightTypeDefaultSizBoxShadow,
    };
  }, [
    themeLightTypeDefaultSizPosition,
    themeLightTypeDefaultSizBorderRadius,
    themeLightTypeDefaultSizWidth,
    themeLightTypeDefaultSizGap,
    themeLightTypeDefaultSizAlignSelf,
    themeLightTypeDefaultSizBoxShadow,
  ]);

  const inputStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: inputAlignSelf,
      borderRadius: inputBorderRadius,
      gap: inputGap,
    };
  }, [inputAlignSelf, inputBorderRadius, inputGap]);

  const text2Style: CSS.Properties = useMemo(() => {
    return {
      flex: textFlex,
    };
  }, [textFlex]);

  return (
    <div
      className="relative rounded-3xs w-[327px] flex flex-col items-start justify-center gap-[4px] text-left text-sm text-gray-700 font-text-button-semibold-large"
      style={themeLightTypeDefaultSizStyle}
    >
      {showLabel && (
        <div className="relative tracking-[-0.1px] leading-[20px] font-medium">
          Label
        </div>
      )}
      <div
        className="self-stretch rounded-3xs bg-base-white flex flex-row py-3 px-5 items-center justify-start gap-[12px] text-base border-[1px] border-solid border-neutral-700"
        style={inputStyle}
      >
        {showLeadIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src={placeholder}
          />
        )}
        <div
          className="flex-1 relative tracking-[-0.1px] leading-[24px] font-medium"
          style={text2Style}
        >
          {text}
        </div>
        {showTrailingIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src={placeholder1}
          />
        )}
      </div>
      {showHintText && (
        <div className="relative tracking-[-0.1px] leading-[20px] font-medium text-gray-50">
          Hint text
        </div>
      )}
    </div>
  );
};

export default ThemeLightTypeDefaultSiz;
