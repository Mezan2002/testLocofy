import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SizeLargeType = {
  statusIcon?: string;
  daveJones?: string;
  cEO?: string;
  showDescription: boolean;
  showAvatar: boolean;
  statusIcon1?: boolean;

  /** Style props */
  sizeLargePosition?: Property.Position;
  sizeLargeFlex?: Property.Flex;
  avatarBackgroundImage?: Property.BackgroundImage;
};

const SizeLarge: NextPage<SizeLargeType> = ({
  statusIcon,
  daveJones,
  cEO,
  showDescription = true,
  showAvatar = true,
  statusIcon1,
  sizeLargePosition,
  sizeLargeFlex,
  avatarBackgroundImage,
}) => {
  const sizeLargeStyle: CSS.Properties = useMemo(() => {
    return {
      position: sizeLargePosition,
      flex: sizeLargeFlex,
    };
  }, [sizeLargePosition, sizeLargeFlex]);

  const avatarStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: avatarBackgroundImage,
    };
  }, [avatarBackgroundImage]);

  return (
    <div
      className="relative flex flex-row items-center justify-start gap-[10px] text-left text-mini text-gray-700 font-text-button-semibold-large"
      style={sizeLargeStyle}
    >
      {showAvatar && (
        <div
          className="rounded-31xl w-10 h-10 flex flex-row items-center justify-center relative bg-[url(/avatar@3x.png)] bg-cover bg-no-repeat bg-[top]"
          style={avatarStyle}
        >
          {!statusIcon1 && (
            <img
              className="absolute my-0 mx-[!important] top-[28px] left-[28px] w-3.5 h-3.5 hidden z-[0]"
              alt=""
              src={statusIcon}
            />
          )}
        </div>
      )}
      <div className="flex flex-col items-start justify-start">
        <div className="relative tracking-[-0.1px] leading-[22px] font-medium">
          {daveJones}
        </div>
        {showDescription && (
          <div className="relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50">
            {cEO}
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeLarge;
