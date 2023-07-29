import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SizeMediumColorSecondaryCType = {
  ratingStar?: string;
  ratingStar1?: string;
  ratingStar2?: string;
  ratingStar3?: string;
  ratingStar4?: string;

  /** Style props */
  sizeMediumColorSecondaryCPosition?: Property.Position;
};

const SizeMediumColorSecondaryC: NextPage<SizeMediumColorSecondaryCType> = ({
  ratingStar,
  ratingStar1,
  ratingStar2,
  ratingStar3,
  ratingStar4,
  sizeMediumColorSecondaryCPosition,
}) => {
  const sizeMediumColorSecondaryCStyle: CSS.Properties = useMemo(() => {
    return {
      position: sizeMediumColorSecondaryCPosition,
    };
  }, [sizeMediumColorSecondaryCPosition]);

  return (
    <div
      className="relative flex flex-row items-center justify-start"
      style={sizeMediumColorSecondaryCStyle}
    >
      <img className="relative w-6 h-6" alt="" src={ratingStar} />
      <img className="relative w-6 h-6" alt="" src={ratingStar1} />
      <img className="relative w-6 h-6" alt="" src={ratingStar2} />
      <img className="relative w-6 h-6" alt="" src={ratingStar3} />
      <img className="relative w-6 h-6" alt="" src={ratingStar4} />
    </div>
  );
};

export default SizeMediumColorSecondaryC;
