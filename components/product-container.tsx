import type { NextPage } from "next";

type ProductContainerType = {
  productCode?: string;
  productCodes?: string;
  productCodeImageUrl?: string;
  productIcon?: string;
  featureDimensions?: string;
  productImageId?: string;
  productIconDimensions?: string;
  integrationIcon?: string;
  productImageName?: string;
  productIconDimensions2?: string;
  enterpriseIcon?: string;
  productCodeImageUrl2?: string;
  productIconName?: string;
  solutionCode?: string;
  productImageName2?: string;
  placeholderIcon?: boolean;
  placeholderIcon1?: boolean;
  placeholderIcon2?: boolean;
  placeholderIcon3?: boolean;
  placeholderIcon4?: boolean;
  placeholderIcon5?: boolean;
  placeholderIcon6?: boolean;
  placeholderIcon7?: boolean;
  placeholderIcon8?: boolean;
  placeholderIcon9?: boolean;
};

const ProductContainer: NextPage<ProductContainerType> = ({
  productCode,
  productCodes,
  productCodeImageUrl,
  productIcon,
  featureDimensions,
  productImageId,
  productIconDimensions,
  integrationIcon,
  productImageName,
  productIconDimensions2,
  enterpriseIcon,
  productCodeImageUrl2,
  productIconName,
  solutionCode,
  productImageName2,
  placeholderIcon,
  placeholderIcon1,
  placeholderIcon2,
  placeholderIcon3,
  placeholderIcon4,
  placeholderIcon5,
  placeholderIcon6,
  placeholderIcon7,
  placeholderIcon8,
  placeholderIcon9,
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] text-left text-base text-gray-700 font-text-button-semibold-large">
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
        {!placeholderIcon && (
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src={productCode}
          />
        )}
        <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
          {productCodes}
        </div>
        {!placeholderIcon1 && (
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src={productCodeImageUrl}
          />
        )}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-gray-50">
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
          {!placeholderIcon2 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productIcon}
            />
          )}
          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
            {featureDimensions}
          </div>
          {!placeholderIcon3 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productImageId}
            />
          )}
        </div>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
          {!placeholderIcon4 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productIconDimensions}
            />
          )}
          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
            {integrationIcon}
          </div>
          {!placeholderIcon5 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productImageName}
            />
          )}
        </div>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
          {!placeholderIcon6 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productIconDimensions2}
            />
          )}
          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
            {enterpriseIcon}
          </div>
          {!placeholderIcon7 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productCodeImageUrl2}
            />
          )}
        </div>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[4px]">
          {!placeholderIcon8 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productIconName}
            />
          )}
          <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
            {solutionCode}
          </div>
          {!placeholderIcon9 && (
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src={productImageName2}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
