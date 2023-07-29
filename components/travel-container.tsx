import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type TravelContainerType = {
  destinationPrice?: string;
  destinationName?: string;
  destinationPriceRange?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propLeft?: Property.Left;
};

const TravelContainer: NextPage<TravelContainerType> = ({
  destinationPrice,
  destinationName,
  destinationPriceRange,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const fromStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
      <div className="self-stretch relative rounded-[7.48px] h-[136.05px] overflow-hidden shrink-0">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={destinationPrice}
        />
        <div className="absolute w-[calc(100%_-_0.44px)] top-[0px] right-[0.22px] left-[0.22px] flex flex-row py-[5.980316638946533px] px-[8.970474243164062px] box-border items-start justify-start">
          <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-base-white text-left">
            {destinationName}
          </b>
          <div
            className="relative w-[67.97px] h-[44.1px]"
            style={groupDivStyle}
          >
            <div
              className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-base-white text-right inline-block w-[67.97px] h-[28.41px]"
              style={divStyle}
            >
              {destinationPriceRange}
            </div>
            <div
              className="absolute top-[0px] left-[28.7px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-base-white text-right inline-block w-[39.27px] h-[14.2px]"
              style={fromStyle}
            >
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TravelContainer;
