import type { NextPage } from "next";
import ThemeDefaultHierarchyPrima from "./theme-default-hierarchy-prima";

type ContainerCardFormFilterType = {
  dimensionCode?: string;
  dimensionLabel?: string;
  dimensionValue?: string;
  dimensionTextCode?: string;
  dimensionText?: string;
  starIcon?: boolean;
  placeholderIcon?: boolean;
  arrowrightIcon?: boolean;
};

const ContainerCardFormFilter: NextPage<ContainerCardFormFilterType> = ({
  dimensionCode,
  dimensionLabel,
  dimensionValue,
  dimensionTextCode,
  dimensionText,
  starIcon,
  placeholderIcon,
  arrowrightIcon,
}) => {
  return (
    <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start text-left text-xl text-base-black font-text-button-semibold-large border-[1px] border-solid border-neutral-700">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[285px] shrink-0 object-cover"
        alt=""
        src={dimensionCode}
      />
      <div className="self-stretch flex flex-col p-4 items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[28px] font-semibold">
                Hotel Assenzio
              </div>
              <ThemeDefaultHierarchyPrima
                placeholder="/star.svg"
                text="4.2"
                placeholder1="/star1.svg"
                rightIcon={false}
                leftIcon
                themeDefaultHierarchyPrimPosition="unset"
                themeDefaultHierarchyPrimGap="2px"
                textColor="#000"
              />
            </div>
            <div className="w-[264px] flex flex-row items-start justify-start gap-[4px] text-sm">
              <div className="relative tracking-[-0.1px] leading-[20px] font-medium">
                25 Apr 2022
              </div>
              <div className="relative tracking-[-0.1px] leading-[20px] font-medium">
                -
              </div>
              <div className="relative tracking-[-0.1px] leading-[20px] font-medium">
                28 Apr 2022
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-sm text-neutral-950">
            <div className="flex-1 relative tracking-[-0.1px] leading-[20px]">
              But happy to move in with more than that, I’m super easy going and
              tidy.
            </div>
          </div>
        </div>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini">
          {!placeholderIcon && (
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src={dimensionTextCode}
            />
          )}
          <div className="relative tracking-[-0.1px] leading-[22px] font-semibold">
            $32 / Day
          </div>
          {!arrowrightIcon && (
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src={dimensionText}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
