import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import ThemeLightTypeDefaultSiz from "./theme-light-type-default-siz";

type DateInputContainerType = {
  reservationDetails?: string;
  reservationSubtitle?: string;
  iconImageUrl?: string;
  hintText?: boolean;
  label?: boolean;
  placeholderIcon?: boolean;
  hintText1?: boolean;

  /** Style props */
  propAlignSelf?: Property.AlignSelf;
};

const DateInputContainer: NextPage<DateInputContainerType> = ({
  reservationDetails,
  reservationSubtitle,
  iconImageUrl,
  hintText,
  label,
  placeholderIcon,
  hintText1,
  propAlignSelf,
}) => {
  const themeLightTypeDefaultSizStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="overflow-hidden flex flex-col items-start justify-center gap-[8px] text-left text-sm text-gray-700 font-text-button-semibold-large">
      <div className="self-stretch relative tracking-[-0.1px] leading-[20px] font-medium">
        {reservationDetails}
      </div>
      {!hintText && (
        <div className="self-stretch relative tracking-[-0.1px] leading-[20px] font-medium text-gray-50 hidden items-center h-5 shrink-0">
          Hint text
        </div>
      )}
      <ThemeLightTypeDefaultSiz
        placeholder="/placeholder8.svg"
        text="04/21/2023"
        placeholder1="/calendar.svg"
        showHintText={false}
        showLeadIcon={false}
        showTrailingIcon
        showLabel={false}
        themeLightTypeDefaultSizPosition="unset"
        themeLightTypeDefaultSizBorderRadius="100px"
        themeLightTypeDefaultSizWidth="unset"
        themeLightTypeDefaultSizGap="12px"
        themeLightTypeDefaultSizAlignSelf="unset"
        themeLightTypeDefaultSizBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.04)"
        inputAlignSelf="unset"
        inputBorderRadius="100px"
        inputGap="24px"
        textFlex="unset"
      />
    </div>
  );
};

export default DateInputContainer;
