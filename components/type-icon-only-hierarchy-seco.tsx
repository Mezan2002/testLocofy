import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type TypeIconOnlyHierarchySecoType = {
  placeholder?: string;
  showLeadIcon?: boolean;

  /** Style props */
  typeIconOnlyHierarchySecoPosition?: Property.Position;
  typeIconOnlyHierarchySecoBoxShadow?: Property.BoxShadow;
};

const TypeIconOnlyHierarchySeco: NextPage<TypeIconOnlyHierarchySecoType> = ({
  placeholder,
  showLeadIcon = true,
  typeIconOnlyHierarchySecoPosition,
  typeIconOnlyHierarchySecoBoxShadow,
}) => {
  const typeIconOnlyHierarchySecoStyle: CSS.Properties = useMemo(() => {
    return {
      position: typeIconOnlyHierarchySecoPosition,
      boxShadow: typeIconOnlyHierarchySecoBoxShadow,
    };
  }, [typeIconOnlyHierarchySecoPosition, typeIconOnlyHierarchySecoBoxShadow]);

  return (
    <div
      className="relative rounded-81xl bg-base-white box-border w-12 h-12 flex flex-row items-center justify-center border-[1px] border-solid border-neutral-700"
      style={typeIconOnlyHierarchySecoStyle}
    >
      {showLeadIcon && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={placeholder}
        />
      )}
    </div>
  );
};

export default TypeIconOnlyHierarchySeco;
