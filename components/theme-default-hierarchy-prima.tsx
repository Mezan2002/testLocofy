import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ThemeDefaultHierarchyPrimaType = {
  placeholder?: string;
  text: string;
  placeholder1?: string;
  rightIcon: boolean;
  leftIcon: boolean;

  /** Style props */
  themeDefaultHierarchyPrimPosition?: Property.Position;
  themeDefaultHierarchyPrimGap?: Property.Gap;
  textColor?: Property.Color;
};

const ThemeDefaultHierarchyPrima: NextPage<ThemeDefaultHierarchyPrimaType> = ({
  placeholder,
  text = "Button",
  placeholder1,
  rightIcon = true,
  leftIcon = true,
  themeDefaultHierarchyPrimPosition,
  themeDefaultHierarchyPrimGap,
  textColor,
}) => {
  const themeDefaultHierarchyPrimaStyle: CSS.Properties = useMemo(() => {
    return {
      position: themeDefaultHierarchyPrimPosition,
      gap: themeDefaultHierarchyPrimGap,
    };
  }, [themeDefaultHierarchyPrimPosition, themeDefaultHierarchyPrimGap]);

  const textStyle: CSS.Properties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className="relative rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-left text-mini text-purple-secondary-600 font-text-button-semibold-large"
      style={themeDefaultHierarchyPrimaStyle}
    >
      {leftIcon && (
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src={placeholder}
        />
      )}
      <div className="relative leading-[22px] font-semibold" style={textStyle}>
        {text}
      </div>
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

export default ThemeDefaultHierarchyPrima;
