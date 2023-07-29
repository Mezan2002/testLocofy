import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ThemeDefaultHierarchySeconType = {
  placeholder?: string;
  text: string;
  placeholder1?: string;
  rightIcon: boolean;
  leftIcon: boolean;

  /** Style props */
  themeDefaultHierarchySecoPosition?: Property.Position;
  themeDefaultHierarchySecoZIndex?: Property.ZIndex;
  themeDefaultHierarchySecoWidth?: Property.Width;
  placeholderIconOverflow?: Property.Overflow;
  placeholderIconFlexShrink?: Property.FlexShrink;
};

const ThemeDefaultHierarchySecon: NextPage<ThemeDefaultHierarchySeconType> = ({
  placeholder,
  text = "Button",
  placeholder1,
  rightIcon = true,
  leftIcon = true,
  themeDefaultHierarchySecoPosition,
  themeDefaultHierarchySecoZIndex,
  themeDefaultHierarchySecoWidth,
  placeholderIconOverflow,
  placeholderIconFlexShrink,
}) => {
  const themeDefaultHierarchySeconStyle: CSS.Properties = useMemo(() => {
    return {
      position: themeDefaultHierarchySecoPosition,
      zIndex: themeDefaultHierarchySecoZIndex,
      width: themeDefaultHierarchySecoWidth,
    };
  }, [
    themeDefaultHierarchySecoPosition,
    themeDefaultHierarchySecoZIndex,
    themeDefaultHierarchySecoWidth,
  ]);

  const placeholderIconStyle: CSS.Properties = useMemo(() => {
    return {
      overflow: placeholderIconOverflow,
      flexShrink: placeholderIconFlexShrink,
    };
  }, [placeholderIconOverflow, placeholderIconFlexShrink]);

  return (
    <div
      className="relative rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center gap-[6px] text-left text-mini text-gray-700 font-text-button-semibold-large border-[1px] border-solid border-neutral-700"
      style={themeDefaultHierarchySeconStyle}
    >
      {leftIcon && (
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src={placeholder}
          style={placeholderIconStyle}
        />
      )}
      <div className="relative leading-[22px] font-semibold">{text}</div>
      {rightIcon && (
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src={placeholder1}
        />
      )}
    </div>
  );
};

export default ThemeDefaultHierarchySecon;
