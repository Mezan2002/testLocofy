import type { NextPage } from "next";
import ThemeDefaultHierarchySecon from "./theme-default-hierarchy-secon";

type DescriptionCardType = {
  textContent?: string;
  descriptionId?: string;
  itemDimensions?: string;
  placeholderIcon?: boolean;
  placeholderIcon1?: boolean;
};

const DescriptionCard: NextPage<DescriptionCardType> = ({
  textContent,
  descriptionId,
  itemDimensions,
  placeholderIcon,
  placeholderIcon1,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-base-black font-text-button-semibold-large">
      <div className="self-stretch relative tracking-[-0.1px] leading-[24px]">
        {textContent}
      </div>
      <ThemeDefaultHierarchySecon
        placeholder="/placeholder6.svg"
        text="Show more"
        placeholder1="/placeholder6.svg"
        rightIcon={false}
        leftIcon={false}
        themeDefaultHierarchySecoPosition="unset"
        themeDefaultHierarchySecoZIndex="unset"
        themeDefaultHierarchySecoWidth="unset"
        placeholderIconOverflow="hidden"
        placeholderIconFlexShrink="0"
      />
    </div>
  );
};

export default DescriptionCard;
