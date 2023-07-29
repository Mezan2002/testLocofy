import type { NextPage } from "next";
import { TextField } from "@mui/material";
import SearchContainer from "../components/search-container";
import PopularDestinationsContainer from "../components/popular-destinations-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStaysForm from "../components/popular-stays-form";
import VariantContainedSizeLarge from "../components/variant-contained-size-large";
import FooterLinks from "../components/footer-links";

const CoverFrame: NextPage = () => {
  return (
    <div className="relative bg-base-white w-full h-[960px] overflow-hidden text-left text-xl text-skyblue font-components-button-large">
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1920px] h-[960px]" />
      <img
        className="absolute top-[0px] left-[297.9px] w-[1302.1px] h-[960px] object-cover"
        alt=""
        src="/group-16@2x.png"
      />
      <img
        className="absolute h-[7.2%] w-[22.92%] top-[44.34%] right-[3.36%] bottom-[48.46%] left-[73.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/weblogo-1.svg"
      />
      <div className="absolute top-[875.25px] left-[1173.29px]">
        Made by Team Locofy
      </div>
      <div className="absolute top-[827.38px] left-[1173.29px] text-[34px] font-medium text-base-white">
        Travel Website
      </div>
      <div className="absolute top-[53.25px] left-[56px] rounded-2xl bg-base-white w-[1076.45px] h-[850.71px] overflow-hidden flex flex-col items-center justify-start gap-[51.58px] text-[13.46px] text-darkslategray-300 hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
        <div className="self-stretch flex flex-col items-center justify-start">
          <header className="self-stretch bg-base-white h-[57.56px] flex flex-row py-[16.445871353149414px] px-[59.803165435791016px] box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-[10.47px] text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <img
                className="relative w-[130.07px] h-[24.67px] overflow-hidden shrink-0"
                alt=""
                src="/fickleflight-logo.svg"
              />
              <div className="flex flex-row items-center justify-end gap-[26.91px] sm:flex">
                <div className="flex flex-row items-center justify-end gap-[22.43px] md:hidden">
                  <div className="relative text-cornflowerblue-200 inline-block w-[35.13px] h-[11.96px] shrink-0">
                    Explore
                  </div>
                  <div className="relative inline-block w-[32.14px] h-[11.96px] shrink-0">
                    Search
                  </div>
                  <div className="relative inline-block w-[30.65px] h-[11.96px] shrink-0">
                    Hotels
                  </div>
                  <div className="relative inline-block w-[29.15px] h-[11.96px] shrink-0">
                    Offers
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8.97px]">
                  <img
                    className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden md:flex"
                    alt=""
                    src="/notification.svg"
                  />
                  <img
                    className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                    alt=""
                    src="/notification1.svg"
                  />
                  <img
                    className="rounded-[28.41px] w-[26.91px] h-[26.91px] object-cover"
                    alt=""
                    src="/top_avatar@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <SearchContainer />
        </div>
        <div className="w-full flex flex-col py-0 px-[59.803165435791016px] box-border items-center justify-start gap-[59.8px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14.95px] md:block">
            <b className="relative tracking-[0.04em] uppercase inline-block w-[947.92px]">
              Upcoming Flight
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[26.91px] text-[17.94px] text-cornflowerblue-300 md:flex-col">
              <div className="rounded-[5.98px] flex flex-col p-[14.950791358947754px] items-start justify-start gap-[15.7px] border-[0.7px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative w-[53.82px] h-[34.39px]">
                    <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[33.44px] h-[20.93px]">
                      SIN
                    </b>
                    <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[53.82px] h-[11.96px]">
                      Singapore
                    </div>
                  </div>
                  <div className="relative w-[87.72px] h-[32.96px] text-[10.47px] text-gray-100">
                    <b className="absolute top-[20.99px] left-[17.71px] tracking-[0.02em] capitalize inline-block w-[49.08px] h-[11.96px]">
                      15H 55M
                    </b>
                    <img
                      className="absolute top-[0px] left-[0px] w-[87.72px] h-[17.94px]"
                      alt=""
                      src="/group-17.svg"
                    />
                  </div>
                  <div className="relative w-[65.24px] h-[34.39px] text-right">
                    <b className="absolute top-[0px] left-[26.91px] tracking-[0.04em] capitalize inline-block w-[38.33px] h-[20.93px]">
                      LAX
                    </b>
                    <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[65.24px] h-[11.96px]">
                      Los Angeles
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative box-border h-[0.75px] border-t-[0.7px] border-solid border-whitesmoke md:w-full" />
                <div className="self-stretch flex flex-row items-center justify-between text-[10.47px] text-gray-100">
                  <div className="relative tracking-[0.02em] capitalize inline-block w-[152.42px] shrink-0">
                    Departs on: 1 May, 08:00 AM
                  </div>
                  <div className="relative tracking-[0.02em] text-right inline-block w-[65.21px] shrink-0">
                    <b>4 days</b>
                    <span> to go</span>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-[0.75px] h-[109.13px] border-r-[0.7px] border-solid border-whitesmoke md:hidden" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[14.95px] text-[13.46px] text-lightgray md:w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch relative tracking-[0.04em] uppercase">
                  Prepare for your trip
                </div>
                <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative w-[48.88px] h-[48.88px]"
                      alt=""
                      src="/group-21.svg"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-left inline-block w-[29.15px] h-[13.46px] shrink-0">
                      Hotel
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[48.88px] h-[48.88px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-sandybrown w-[48.88px] h-[48.88px]" />
                      <img
                        className="absolute h-[47.93%] w-[48.38%] top-[26.04%] right-[25.81%] bottom-[26.03%] left-[25.81%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[59.8px] h-[13.46px] shrink-0">
                      Attractions
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative w-[48.88px] h-[48.88px]"
                      alt=""
                      src="/group-211.svg"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[23.92px] h-[13.46px] shrink-0">
                      Eats
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[48.88px] h-[48.88px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-gold w-[48.88px] h-[48.88px]" />
                      <img
                        className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[52.33px] h-[13.46px] shrink-0">
                      Commute
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[52.33px] h-[48.88px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-cornflowerblue-100 w-[52.33px] h-[48.88px]" />
                      <img
                        className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[24.01px]">
                      Taxi
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[48.88px] h-[48.88px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-yellowgreen w-[48.88px] h-[48.88px]" />
                      <img
                        className="absolute h-[35.6%] w-[39.93%] top-[32.2%] right-[30.04%] bottom-[32.2%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector3.svg"
                      />
                    </div>
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[38.87px] h-[13.46px] shrink-0">
                      Movies
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <PopularDestinationsContainer />
          <RecommendedHolidaysContainer />
          <PopularStaysForm />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-cornflowerblue-300">
          <div className="self-stretch relative bg-aliceblue h-[395.45px] overflow-hidden shrink-0">
            <img
              className="absolute w-[calc(100%_+_0.01px)] top-[0px] right-[-0.01px] left-[0px] max-w-full overflow-hidden h-[396.2px] object-cover"
              alt=""
              src="/rectangle-186@2x.png"
            />
            <div className="[position:relative!important] top-[38.87px] left-[auto!important] w-[410.4px] flex flex-col p-[14.950791358947754px] box-border items-center justify-start gap-[22.43px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[5.23px]">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  subscribe to our newsletter
                </b>
                <b className="self-stretch relative text-[22.43px] text-darkslategray-100">
                  Get weekly updates
                </b>
              </div>
              <div className="self-stretch rounded-[8.97px] bg-base-white shadow-[0px_0px_17.94px_rgba(0,_0,_0,_0.03)] flex flex-col py-[20.931108474731445px] px-[22.426189422607422px] items-start justify-start gap-[12.71px] text-left text-slategray border-[0.7px] border-solid border-whitesmoke">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[25.42px]">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[7.48px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-orange rounded-[2.99px] w-[122.6px] h-[41.86px] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru">
                  <VariantContainedSizeLarge
                    button="submit"
                    variantContainedSizeLargePosition="unset"
                    variantContainedSizeLargeBoxSizing="border-box"
                    buttonFontSize="11.21px"
                    buttonLineHeight="19.44px"
                    buttonColor="#fff"
                    buttonDisplay="inline-block"
                  />
                </button>
              </div>
            </div>
          </div>
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};

export default CoverFrame;
