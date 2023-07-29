import type { NextPage } from "next";

type RecommendedHolidayCardType = {
  packageId?: string;
  packageDestination?: string;
  packageDuration?: string;
  packagePrice?: string;
};

const RecommendedHolidayCard: NextPage<RecommendedHolidayCardType> = ({
  packageId,
  packageDestination,
  packageDuration,
  packagePrice,
}) => {
  return (
    <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
      <img
        className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[180.9px] shrink-0 object-cover"
        alt=""
        src={packageId}
      />
      <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-base-white flex flex-col py-[14.950791358947754px] px-[11.960633277893066px] items-center justify-center border-[0.7px] border-solid border-whitesmoke">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.24px]">
            <div className="self-stretch relative text-[14.95px] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
              {packageDestination}
            </div>
            <div className="self-stretch relative text-[11.96px] tracking-[0.02em] font-components-button-large text-darkgray text-left">
              {packageDuration}
            </div>
          </div>
          <div className="relative text-[23.92px] leading-[25.42px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[53.82px] h-[25.42px] shrink-0">
            {packagePrice}
          </div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCard;
