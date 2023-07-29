import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import SizeMediumColorSecondaryC from "./size-medium-color-secondary-c";
import SizeLarge from "./size-large";

type TestimonialContainerType = {
  imageSize?: string;
  imageCode?: string;
  imageCodeAlt?: string;
  imageCodeText?: string;
  imageCodeDimensions?: string;
  imageCodeTextAlt?: string;
  personImageCode?: string;
  statusIcon1?: boolean;
  february09th2020?: boolean;

  /** Style props */
  propBackgroundImage?: Property.BackgroundImage;
};

const TestimonialContainer: NextPage<TestimonialContainerType> = ({
  imageSize,
  imageCode,
  imageCodeAlt,
  imageCodeText,
  imageCodeDimensions,
  imageCodeTextAlt,
  personImageCode,
  statusIcon1,
  february09th2020,
  propBackgroundImage,
}) => {
  const avatarStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="flex-1 rounded-8xs overflow-hidden flex flex-col items-start justify-start gap-[24px] text-left text-base text-gray-700 font-text-button-semibold-large">
      <SizeMediumColorSecondaryC
        ratingStar="/rating-star3.svg"
        ratingStar1="/rating-star3.svg"
        ratingStar2="/rating-star3.svg"
        ratingStar3="/rating-star3.svg"
        ratingStar4="/rating-star4.svg"
        sizeMediumColorSecondaryCPosition="unset"
      />
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 relative tracking-[-0.1px] leading-[24px]">
          “Absolutely incredible. This place was definitely a dream! From the
          entryway, to each floor... stunning”
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-sm text-gray-50">
        <SizeLarge
          statusIcon="/status-icon4.svg"
          daveJones="Dave Jones"
          cEO="Student"
          showDescription
          showAvatar
          statusIcon1={false}
          sizeLargePosition="unset"
          sizeLargeFlex="1"
          avatarBackgroundImage={`url("/avatar2@3x.png")`}
        />
        {!february09th2020 && (
          <div className="relative tracking-[-0.1px] leading-[20px] hidden">
            February 09th, 2020
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialContainer;
