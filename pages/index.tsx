import type { NextPage } from "next";
import ThemeDefaultHierarchySecon1 from "../components/theme-default-hierarchy-secon1";
import ThemeDefaultHierarchySecon from "../components/theme-default-hierarchy-secon";
import TypePhotoSizexLargeState from "../components/type-photo-sizex-large-state";
import ThemeLightLabelOffProgre from "../components/theme-light-label-off-progre";
import DescriptionCard from "../components/description-card";
import AmenitiesCard from "../components/amenities-card";
import ThemeLightTypeFillState from "../components/theme-light-type-fill-state";
import ThemeLightTypeDefaultSiz from "../components/theme-light-type-default-siz";
import DateInputContainer from "../components/date-input-container";
import SizeSmallIconLeft from "../components/size-small-icon-left";
import SearchOffZoomOn from "../components/search-off-zoom-on";
import SizeRegularShapeRoundTyp from "../components/size-regular-shape-round-typ";
import TypeOver from "../components/type-over";
import TestimonialContainer from "../components/testimonial-container";
import SizeMediumColorSecondaryC from "../components/size-medium-color-secondary-c";
import SizeLarge from "../components/size-large";
import NearbyHotelsContainer from "../components/nearby-hotels-container";
import ContainerCardFormFilter from "../components/container-card-form-filter";
import ProductFooter from "../components/product-footer";
import AcademyContainer from "../components/academy-container";

const FindStays: NextPage = () => {
  return (
    <div className="relative bg-base-white w-full h-[982px] text-left text-sm text-primary-600 font-text-button-semibold-large">
      <div className="absolute top-[142px] left-[0px] w-[1512px] h-[902px] overflow-y-auto flex flex-col items-start justify-start">
        <div className="self-stretch bg-base-white flex flex-col pt-8 px-[120px] pb-16 items-center justify-center gap-[64px] border-b-[1px] border-solid border-neutral-700">
          <div className="self-stretch relative tracking-[-0.1px] leading-[20px] font-semibold hidden h-5 shrink-0">
            1% OF THE INDUSTRY
          </div>
          <div className="flex flex-col items-center justify-start gap-[32px] text-5xl text-base-black">
            <div className="self-stretch overflow-hidden flex flex-row items-end justify-between text-13xl text-gray-700">
              <div className="flex flex-col items-start justify-center">
                <b className="relative tracking-[-0.02em] leading-[40px]">
                  Cerulean Tower Tokyu Hotel
                </b>
                <div className="relative text-lg tracking-[-0.1px] leading-[28px] font-medium text-gray-25">
                  26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <ThemeDefaultHierarchySecon1
                  placeholder="/like.svg"
                  themeDefaultHierarchySecoPosition="unset"
                  themeDefaultHierarchySecoTransform="unset"
                  themeDefaultHierarchySecoTransformOrigin="unset"
                  placeholderIconOverflow="unset"
                  placeholderIconFlexShrink="unset"
                />
                <ThemeDefaultHierarchySecon1
                  placeholder="/sharedouble.svg"
                  themeDefaultHierarchySecoPosition="unset"
                  themeDefaultHierarchySecoTransform=" rotate(180deg)"
                  themeDefaultHierarchySecoTransformOrigin="0 0"
                  placeholderIconOverflow="hidden"
                  placeholderIconFlexShrink="0"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[16px]">
              <img
                className="relative rounded-3xl w-[632px] h-[536px] object-cover"
                alt=""
                src="/rectangle-7@2x.png"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="self-stretch flex-1 relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-8@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-10@2x.png"
                  />
                </div>
                <div className="self-stretch flex-1 relative rounded-3xl bg-[url(/frame-1171274939@3x.png)] bg-cover bg-no-repeat bg-[top]">
                  <div className="absolute top-[182.58px] left-[429.89px] w-[202.11px] h-[77.42px] flex flex-col p-4 box-border items-center justify-center">
                    <ThemeDefaultHierarchySecon
                      placeholder="/placeholder4.svg"
                      text="Show more photos"
                      placeholder1="/placeholder4.svg"
                      rightIcon={false}
                      leftIcon={false}
                      themeDefaultHierarchySecoPosition="unset"
                      themeDefaultHierarchySecoZIndex="unset"
                      themeDefaultHierarchySecoWidth="unset"
                      placeholderIconOverflow="hidden"
                      placeholderIconFlexShrink="0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                    <TypePhotoSizexLargeState
                      statusIcon1="/status-icon2.svg"
                      statusIcon={false}
                      typePhotoSizexLargeStateWidth="57px"
                      typePhotoSizexLargeStateHeight="56px"
                      typePhotoSizexLargeStateBackgroundImage={`url("/avatar1@3x.png")`}
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/status-icon3.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[20px]">
                          Identity verified
                        </div>
                      </div>
                      <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-medium">
                        Hosted by Ghazal
                      </div>
                    </div>
                    <ThemeDefaultHierarchySecon
                      placeholder="/placeholder5.svg"
                      text="View Profile"
                      placeholder1="/placeholder5.svg"
                      rightIcon={false}
                      leftIcon={false}
                      themeDefaultHierarchySecoPosition="unset"
                      themeDefaultHierarchySecoZIndex="unset"
                      themeDefaultHierarchySecoWidth="unset"
                      placeholderIconOverflow="hidden"
                      placeholderIconFlexShrink="0"
                    />
                  </div>
                  <div className="w-[574px] flex flex-row items-start justify-start gap-[16px] text-smi">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/frame.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.1px] leading-[18px]">
                      To protect your payment, never transfer money or
                      communicate outside of the Airbnb website or app.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
                  <div className="relative tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[261px] h-[29px] shrink-0">
                    Available rooms
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-mini">
                    <div className="self-stretch relative tracking-[-0.1px] leading-[22px] font-medium">
                      2 of 4 Rooms Available
                    </div>
                    <ThemeLightLabelOffProgre
                      themeLightLabelOffProgreWidth="unset"
                      themeLightLabelOffProgreAlignSelf="stretch"
                      progressLineWidth="47.1%"
                      progressLineRight="52.9%"
                      lineBackgroundColor="#5d55f6"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
                  <div className="relative tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[261px] h-[29px] shrink-0">
                    Description
                  </div>
                  <DescriptionCard
                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    descriptionId="/placeholder6.svg"
                    itemDimensions="/placeholder6.svg"
                    placeholderIcon={false}
                    placeholderIcon1={false}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
                  <div className="relative tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[261px] h-[29px] shrink-0">
                    <p className="m-0">Offered Amenities</p>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="w-[821px] flex flex-row items-start justify-start gap-[24px]">
                      <AmenitiesCard
                        imageId="/icon6.svg"
                        roomImageUrl="Garden View"
                        featureImageUrl="/icon7.svg"
                        amenities="Free Wifi"
                        imageDimensions="/icon8.svg"
                        applianceDescription="Free Washer"
                        imageCode="/icon9.svg"
                        propertyFeatures="Air Conditioning"
                        imageDimensions2="/icon10.svg"
                        applianceDimensions="Refrigerator"
                      />
                      <AmenitiesCard
                        imageId="/icon11.svg"
                        roomImageUrl="Kitchen"
                        featureImageUrl="/icon12.svg"
                        amenities="Pets Allowed"
                        imageDimensions="/icon13.svg"
                        applianceDescription="Dryer"
                        imageCode="/icon14.svg"
                        propertyFeatures="Security cameras on property"
                        imageDimensions2="/icon15.svg"
                        applianceDimensions="Bicycle"
                      />
                    </div>
                    <ThemeDefaultHierarchySecon
                      placeholder="/placeholder7.svg"
                      text="Show more amenities"
                      placeholder1="/placeholder7.svg"
                      rightIcon={false}
                      leftIcon={false}
                      themeDefaultHierarchySecoPosition="unset"
                      themeDefaultHierarchySecoZIndex="unset"
                      themeDefaultHierarchySecoWidth="unset"
                      placeholderIconOverflow="hidden"
                      placeholderIconFlexShrink="0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[24px] text-base">
                <div className="self-stretch rounded-3xl bg-base-white shadow-[0px_8px_10px_-6px_rgba(16,_24,_40,_0.1),_0px_20px_25px_-5px_rgba(16,_24,_40,_0.1)] overflow-hidden flex flex-col p-6 items-start justify-start gap-[16px] border-[1px] border-solid border-neutral-700">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative text-3xl tracking-[-0.01em] leading-[30px] font-semibold">
                      $75
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[24px]">
                      /
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[24px]">
                      night
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] text-sm text-gray-50">
                    <div className="rounded-81xl bg-neutral-100 flex flex-row p-0.5 items-start justify-start text-mini border-[1px] border-solid border-neutral-700">
                      <ThemeLightTypeFillState
                        tabText="Hour"
                        showBadge={false}
                        themeLightTypeFillStatePosition="unset"
                        themeLightTypeFillStateBorderRadius="100px"
                        themeLightTypeFillStateBackgroundColor="unset"
                        tabTextColor="#49556d"
                        notificationCounterBackgroundColor="#437ef7"
                        textColor="#fff"
                      />
                      <ThemeLightTypeFillState
                        tabText="Day"
                        showBadge={false}
                        themeLightTypeFillStatePosition="unset"
                        themeLightTypeFillStateBorderRadius="100px"
                        themeLightTypeFillStateBackgroundColor="#574efa"
                        tabTextColor="#fff"
                        notificationCounterBackgroundColor="#efeff1"
                        textColor="#272d37"
                      />
                      <div className="overflow-hidden hidden flex-row py-[9px] px-0 items-center justify-center gap-[8px]">
                        <div className="relative tracking-[-0.1px] leading-[22px] font-semibold">
                          Tab 3
                        </div>
                        <div className="rounded-xl bg-neutral-500 h-[18px] hidden flex-col py-0 px-1.5 box-border items-center justify-center text-smi text-gray-700">
                          <div className="relative tracking-[-0.1px] leading-[18px] font-medium">
                            9
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden hidden flex-row py-[9px] px-0 items-center justify-center gap-[8px]">
                        <div className="relative tracking-[-0.1px] leading-[22px] font-semibold">
                          Tab 4
                        </div>
                        <div className="rounded-xl bg-neutral-500 h-[18px] hidden flex-col py-0 px-1.5 box-border items-center justify-center text-smi text-gray-700">
                          <div className="relative tracking-[-0.1px] leading-[18px] font-medium">
                            9
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden hidden flex-row py-[9px] px-0 items-center justify-center gap-[8px]">
                        <div className="relative tracking-[-0.1px] leading-[22px] font-semibold">
                          Tab 5
                        </div>
                        <div className="rounded-xl bg-neutral-500 h-[18px] hidden flex-col py-0 px-1.5 box-border items-center justify-center text-smi text-gray-700">
                          <div className="relative tracking-[-0.1px] leading-[18px] font-medium">
                            9
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden hidden flex-row py-[9px] px-0 items-center justify-center gap-[8px]">
                        <div className="relative tracking-[-0.1px] leading-[22px] font-semibold">
                          Tab 6
                        </div>
                        <div className="rounded-xl bg-neutral-500 h-[18px] hidden flex-col py-0 px-1.5 box-border items-center justify-center text-smi text-gray-700">
                          <div className="relative tracking-[-0.1px] leading-[18px] font-medium">
                            9
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden hidden flex-row py-[9px] px-0 items-center justify-center gap-[8px]">
                        <div className="relative tracking-[-0.1px] leading-[22px] font-semibold">
                          Tab 7
                        </div>
                        <div className="rounded-xl bg-neutral-500 h-[18px] hidden flex-col py-0 px-1.5 box-border items-center justify-center text-smi text-gray-700">
                          <div className="relative tracking-[-0.1px] leading-[18px] font-medium">
                            9
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-gray-700">
                      <div className="overflow-hidden flex flex-col items-start justify-center gap-[8px]">
                        <div className="self-stretch relative tracking-[-0.1px] leading-[20px] font-medium">
                          Check-In
                        </div>
                        <ThemeLightTypeDefaultSiz
                          placeholder="/placeholder8.svg"
                          text="04/12/2023"
                          placeholder1="/calendar.svg"
                          showHintText={false}
                          showLeadIcon={false}
                          showTrailingIcon
                          showLabel={false}
                          themeLightTypeDefaultSizPosition="unset"
                          themeLightTypeDefaultSizBorderRadius="100px"
                          themeLightTypeDefaultSizWidth="178px"
                          themeLightTypeDefaultSizGap="12px"
                          themeLightTypeDefaultSizAlignSelf="unset"
                          themeLightTypeDefaultSizBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.04)"
                          inputAlignSelf="unset"
                          inputBorderRadius="100px"
                          inputGap="24px"
                          textFlex="unset"
                        />
                      </div>
                      <DateInputContainer
                        reservationDetails="Check-Out"
                        reservationSubtitle="04/21/2023"
                        iconImageUrl="/calendar.svg"
                        hintText={false}
                        label={false}
                        placeholderIcon={false}
                        hintText1={false}
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between text-base-black">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/keyboard.svg"
                      />
                      <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                        Clear dates
                      </div>
                    </div>
                    <DateInputContainer
                      reservationDetails="Guests"
                      reservationSubtitle="3 guests, 1 infant, 1 pet"
                      iconImageUrl="/chevrondown.svg"
                      hintText={false}
                      label={false}
                      placeholderIcon={false}
                      hintText1={false}
                      propAlignSelf="stretch"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[12px]">
                    <ThemeDefaultHierarchySecon
                      placeholder="/send.svg"
                      text="Submit Review"
                      placeholder1="/placeholder5.svg"
                      rightIcon={false}
                      leftIcon={false}
                      themeDefaultHierarchySecoPosition="unset"
                      themeDefaultHierarchySecoZIndex="unset"
                      themeDefaultHierarchySecoWidth="372px"
                      placeholderIconOverflow="unset"
                      placeholderIconFlexShrink="unset"
                    />
                    <ThemeDefaultHierarchySecon
                      placeholder="/send1.svg"
                      text="Claim Cleaning Fees"
                      placeholder1="/placeholder9.svg"
                      rightIcon={false}
                      leftIcon={false}
                      themeDefaultHierarchySecoPosition="unset"
                      themeDefaultHierarchySecoZIndex="unset"
                      themeDefaultHierarchySecoWidth="372px"
                      placeholderIconOverflow="unset"
                      placeholderIconFlexShrink="unset"
                    />
                  </div>
                  <div className="self-stretch relative text-sm leading-[20px] text-gray-500 text-center">
                    You won’t be charged yet
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex-1 relative leading-[24px]">
                        $75 x 7 nights
                      </div>
                      <div className="relative leading-[24px] text-right">
                        $525
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex-1 relative leading-[24px]">
                        Cleaning fees
                      </div>
                      <div className="relative leading-[24px] text-right">
                        $20
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex-1 relative leading-[24px]">
                        Weekly discount
                      </div>
                      <div className="relative leading-[24px] text-emerald-500 text-right">
                        -$28
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gray-200" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      Total
                    </div>
                    <div className="relative leading-[150%] font-medium text-right">
                      $513
                    </div>
                  </div>
                </div>
                <SizeSmallIconLeft
                  maximize="/flagpriority2.svg"
                  text="Report this listing"
                  sizeSmallIconLeftPosition="unset"
                  sizeSmallIconLeftJustifyContent="center"
                  sizeSmallIconLeftGap="8px"
                  sizeSmallIconLeftWidth="370px"
                  textColor="#6b7280"
                  textTextDecoration="underline"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
              <div className="relative tracking-[-0.02em] leading-[32px] font-semibold inline-block w-[261px] h-[29px] shrink-0">
                Where you’ll be
              </div>
              <div className="self-stretch relative rounded-3xl box-border h-[480px] overflow-hidden shrink-0 border-[1px] border-solid border-neutral-700">
                <SearchOffZoomOn
                  map="/map1@2x.png"
                  icon="/icon16.svg"
                  icon1="/icon17.svg"
                  icon2="/icon18.svg"
                  searchOffZoomOnPosition="absolute"
                  searchOffZoomOnWidth="100%"
                  searchOffZoomOnHeight="100%"
                  searchOffZoomOnTop="0px"
                  searchOffZoomOnRight="0px"
                  searchOffZoomOnBottom="0px"
                  searchOffZoomOnLeft="0px"
                  searchOffZoomOnBoxShadow="0px 25px 50px -12px rgba(16, 24, 40, 0.25)"
                  searchOffZoomOnOverflow="hidden"
                  mapIconBorderRadius="unset"
                  iconButtonBoxShadow="0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1)"
                  iconButtonBaseBorder="1px solid #f9f9f9"
                  iconButtonBoxShadow1="0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1)"
                  iconButtonBaseBorder1="1px solid #f9f9f9"
                  iconButtonBaseBoxShadow="0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1)"
                  iconButtonBaseBorder2="1px solid #f9f9f9"
                />
                <SizeRegularShapeRoundTyp
                  icon="/icon19.svg"
                  sizeRegularShapeRoundTypPosition="absolute"
                  sizeRegularShapeRoundTypWidth="unset"
                  sizeRegularShapeRoundTypHeight="unset"
                  sizeRegularShapeRoundTypTop="262px"
                  sizeRegularShapeRoundTypLeft="543px"
                  sizeRegularShapeRoundTypBoxShadow="0px 2px 4px -2px rgba(16, 24, 40, 0.1), 0px 4px 6px -1px rgba(16, 24, 40, 0.1)"
                  iconButtonBaseBackgroundColor="#574efa"
                  iconButtonBaseAlignSelf="unset"
                  iconButtonBaseFlex="unset"
                  iconButtonBaseBorder="unset"
                />
                <TypeOver
                  title="Exact location provided after booking"
                  tip="/tip1.svg"
                  showSubtitle={false}
                  showAction={false}
                  typeOverPosition="absolute"
                  typeOverBoxShadow="0px 2px 4px -2px rgba(16, 24, 40, 0.1), 0px 4px 6px -1px rgba(16, 24, 40, 0.1)"
                  typeOverWidth="unset"
                  typeOverTop="182px"
                  typeOverLeft="403px"
                  bodyAlignSelf="unset"
                  frameDivAlignSelf="unset"
                  titleSubtitleAlignSelf="unset"
                  titleAlignSelf="unset"
                  titleLineHeight="24px"
                  titleColor="#272d37"
                  titleTextAlign="center"
                  titleLetterSpacing="-0.1px"
                />
              </div>
              <DescriptionCard
                textContent="Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailhau, and cultural sites such as the Aquitaine Museum."
                descriptionId="/placeholder10.svg"
                itemDimensions="/placeholder10.svg"
                placeholderIcon={false}
                placeholderIcon1={false}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[32px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/rating-star2.svg"
                  />
                  <b className="relative tracking-[-0.02em] leading-[32px]">
                    5.0
                  </b>
                </div>
                <div className="relative rounded-[50%] bg-base-black w-1 h-1" />
                <div className="relative tracking-[-0.02em] leading-[32px] font-medium flex items-center w-52 shrink-0">
                  12 Reviews
                </div>
              </div>
              <div className="w-[1280px] flex flex-row items-start justify-start gap-[48px] text-base text-gray-700">
                <TestimonialContainer
                  imageSize="/rating-star3.svg"
                  imageCode="/rating-star3.svg"
                  imageCodeAlt="/rating-star3.svg"
                  imageCodeText="/rating-star3.svg"
                  imageCodeDimensions="/rating-star4.svg"
                  imageCodeTextAlt="/status-icon4.svg"
                  personImageCode="Dave Jones"
                  statusIcon1={false}
                  february09th2020={false}
                />
                <TestimonialContainer
                  imageSize="/rating-star5.svg"
                  imageCode="/rating-star5.svg"
                  imageCodeAlt="/rating-star5.svg"
                  imageCodeText="/rating-star5.svg"
                  imageCodeDimensions="/rating-star6.svg"
                  imageCodeTextAlt="/status-icon5.svg"
                  personImageCode="Morgan John"
                  statusIcon1={false}
                  february09th2020={false}
                  propBackgroundImage={`url("/avatar3@3x.png")`}
                />
                <TestimonialContainer
                  imageSize="/rating-star7.svg"
                  imageCode="/rating-star7.svg"
                  imageCodeAlt="/rating-star7.svg"
                  imageCodeText="/rating-star7.svg"
                  imageCodeDimensions="/rating-star8.svg"
                  imageCodeTextAlt="/status-icon6.svg"
                  personImageCode="Olivia Manson"
                  statusIcon1={false}
                  february09th2020={false}
                  propBackgroundImage={`url("/avatar4@3x.png")`}
                />
                <div className="flex-1 rounded-8xs overflow-hidden hidden flex-col items-start justify-start gap-[24px]">
                  <SizeMediumColorSecondaryC
                    ratingStar="/rating-star9.svg"
                    ratingStar1="/rating-star9.svg"
                    ratingStar2="/rating-star9.svg"
                    ratingStar3="/rating-star9.svg"
                    ratingStar4="/rating-star10.svg"
                    sizeMediumColorSecondaryCPosition="unset"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[-0.1px] leading-[24px] font-medium">
                      LookScout has got everything I need. Man, this thing is
                      getting better as I learn more about it. LookScout is the
                      real deal!
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-sm text-gray-50">
                    <SizeLarge
                      statusIcon="/status-icon4.svg"
                      daveJones="Richard Lopez"
                      cEO="Manager"
                      showDescription
                      showAvatar
                      statusIcon1={false}
                      sizeLargePosition="unset"
                      sizeLargeFlex="1"
                      avatarBackgroundImage={`url("/avatar5@3x.png")`}
                    />
                    <div className="relative tracking-[-0.1px] leading-[20px] hidden">
                      February 09th, 2020
                    </div>
                  </div>
                </div>
              </div>
              <ThemeDefaultHierarchySecon
                placeholder="/placeholder11.svg"
                text="Show more amenities"
                placeholder1="/placeholder11.svg"
                rightIcon={false}
                leftIcon={false}
                themeDefaultHierarchySecoPosition="unset"
                themeDefaultHierarchySecoZIndex="unset"
                themeDefaultHierarchySecoWidth="unset"
                placeholderIconOverflow="hidden"
                placeholderIconFlexShrink="0"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch bg-neutral-200 flex flex-col py-16 px-0 items-center justify-center gap-[64px]">
          <NearbyHotelsContainer />
          <div className="w-[1280px] flex flex-row items-center justify-center gap-[32px]">
            <ContainerCardFormFilter
              dimensionCode="/rectangle-2@2x.png"
              dimensionLabel="/star.svg"
              dimensionValue="/star1.svg"
              dimensionTextCode="/placeholder7.svg"
              dimensionText="/arrowright.svg"
              starIcon={false}
              placeholderIcon={false}
              arrowrightIcon={false}
            />
            <ContainerCardFormFilter
              dimensionCode="/rectangle-21@2x.png"
              dimensionLabel="/star2.svg"
              dimensionValue="/star3.svg"
              dimensionTextCode="/placeholder13.svg"
              dimensionText="/arrowright1.svg"
              starIcon={false}
              placeholderIcon={false}
              arrowrightIcon={false}
            />
            <ContainerCardFormFilter
              dimensionCode="/rectangle-22@2x.png"
              dimensionLabel="/star4.svg"
              dimensionValue="/star5.svg"
              dimensionTextCode="/placeholder14.svg"
              dimensionText="/arrowright2.svg"
              starIcon={false}
              placeholderIcon={false}
              arrowrightIcon={false}
            />
          </div>
        </div>
        <ProductFooter />
      </div>
      <AcademyContainer />
    </div>
  );
};

export default FindStays;
