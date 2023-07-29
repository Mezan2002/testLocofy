import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ThemeDefaultHierarchySecon1Type = {
  placeholder?: string;

  /** Style props */
  themeDefaultHierarchySecoPosition?: Property.Position;
  themeDefaultHierarchySecoTransform?: Property.Transform;
  themeDefaultHierarchySecoTransformOrigin?: Property.TransformOrigin;
  placeholderIconOverflow?: Property.Overflow;
  placeholderIconFlexShrink?: Property.FlexShrink;
};

const ThemeDefaultHierarchySecon1: NextPage<
  ThemeDefaultHierarchySecon1Type
> = ({
  placeholder,
  themeDefaultHierarchySecoPosition,
  themeDefaultHierarchySecoTransform,
  themeDefaultHierarchySecoTransformOrigin,
  placeholderIconOverflow,
  placeholderIconFlexShrink,
}) => {
  const themeDefaultHierarchySecon1Style: CSS.Properties = useMemo(() => {
    return {
      position: themeDefaultHierarchySecoPosition,
      transform: themeDefaultHierarchySecoTransform,
      transformOrigin: themeDefaultHierarchySecoTransformOrigin,
    };
  }, [
    themeDefaultHierarchySecoPosition,
    themeDefaultHierarchySecoTransform,
    themeDefaultHierarchySecoTransformOrigin,
  ]);

  const placeholderIcon1Style: CSS.Properties = useMemo(() => {
    return {
      overflow: placeholderIconOverflow,
      flexShrink: placeholderIconFlexShrink,
    };
  }, [placeholderIconOverflow, placeholderIconFlexShrink]);

  return (
    <div
      className="relative rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row p-3 items-center justify-center border-[1px] border-solid border-neutral-700"
      style={themeDefaultHierarchySecon1Style}
    >
      <img
        className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
        alt=""
        src={placeholder}
        style={placeholderIcon1Style}
      />
    </div>
  );
};

export default ThemeDefaultHierarchySecon1;
