import type { NextPage } from "next";

type AmenitiesCardType = {
  imageId?: string;
  roomImageUrl?: string;
  featureImageUrl?: string;
  amenities?: string;
  imageDimensions?: string;
  applianceDescription?: string;
  imageCode?: string;
  propertyFeatures?: string;
  imageDimensions2?: string;
  applianceDimensions?: string;
};

const AmenitiesCard: NextPage<AmenitiesCardType> = ({
  imageId,
  roomImageUrl,
  featureImageUrl,
  amenities,
  imageDimensions,
  applianceDescription,
  imageCode,
  propertyFeatures,
  imageDimensions2,
  applianceDimensions,
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] text-left text-base text-base-black font-text-button-semibold-large">
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src={imageId}
        />
        <div className="self-stretch relative tracking-[-0.1px] leading-[24px] flex items-center w-[350.5px] shrink-0">
          {roomImageUrl}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src={featureImageUrl}
        />
        <div className="self-stretch relative tracking-[-0.1px] leading-[24px] flex items-center w-[350.5px] shrink-0">
          {amenities}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src={imageDimensions}
        />
        <div className="self-stretch relative tracking-[-0.1px] leading-[24px] flex items-center w-[350.5px] shrink-0">
          {applianceDescription}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src={imageCode}
        />
        <div className="self-stretch relative tracking-[-0.1px] leading-[24px] flex items-center w-[350.5px] shrink-0">
          {propertyFeatures}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src={imageDimensions2}
        />
        <div className="self-stretch relative tracking-[-0.1px] leading-[24px] flex items-center w-[350.5px] shrink-0">
          {applianceDimensions}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesCard;
