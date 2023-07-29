import type { NextPage } from "next";
import ThemeDefaultHierarchySecon from "./theme-default-hierarchy-secon";

const NearbyHotelsContainer: NextPage = () => {
  return (
    <div className="w-[1280px] flex flex-row items-center justify-between text-left text-sm text-primary-600 font-text-button-semibold-large">
      <div className="w-[800px] flex flex-col items-start justify-center gap-[8px]">
        <div className="relative tracking-[-0.1px] leading-[20px] font-semibold hidden">
          1% OF THE INDUSTRY
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-13xl text-gray-700">
          <div className="self-stretch relative tracking-[-0.02em] leading-[40px]">
            <b>Nearby hotels</b>
          </div>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
            You can find places and stay with hotels and home-stays ranked by
            travellers. What fun could we have more than having roommate with
            similar interest.
          </div>
        </div>
      </div>
      <ThemeDefaultHierarchySecon
        placeholder="/placeholder12.svg"
        text="Show more"
        placeholder1="/placeholder12.svg"
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

export default NearbyHotelsContainer;
