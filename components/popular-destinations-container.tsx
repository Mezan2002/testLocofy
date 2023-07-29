import type { NextPage } from "next";
import TravelContainer from "./travel-container";

const PopularDestinationsContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[17.94px] text-left text-[13.46px] text-cornflowerblue-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px] sm:flex-[unset] sm:self-stretch">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <b className="self-stretch relative text-[22.43px] tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
            Most Popular Destinations
          </b>
        </div>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-base-white w-[172.97px] flex flex-row items-start justify-start gap-[7.48px] text-right text-[inherit] md:hidden"
          href="#"
        >
          <div className="relative tracking-[0.04em] font-medium inline-block w-[147.51px] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright3.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
        <TravelContainer
          destinationPrice="/unsplashnnzkznywhau@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <TravelContainer
          destinationPrice="/unsplashyc8qqp50bda@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="74.7px"
          propWidth1="74.01px"
          propLeft="35.43px"
        />
        <TravelContainer
          destinationPrice="/unsplashltnpejwdsay@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="67.97px"
          propWidth1="67.97px"
          propLeft="28.7px"
        />
        <TravelContainer
          destinationPrice="/unsplashm0oiyn5u8zm@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="75.22px"
          propWidth1="75.22px"
          propLeft="35.95px"
        />
      </div>
      <div className="rounded-[23.17px] bg-base-white w-[172.97px] hidden flex-row items-start justify-start gap-[7.48px] text-right md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[147.51px] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
          alt=""
          src="/arrowright4.svg"
        />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
