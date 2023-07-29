import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type TypePhotoSizexLargeStateType = {
  statusIcon1?: string;
  statusIcon: boolean;

  /** Style props */
  typePhotoSizexLargeStateWidth?: Property.Width;
  typePhotoSizexLargeStateHeight?: Property.Height;
  typePhotoSizexLargeStateBackgroundImage?: Property.BackgroundImage;
};

const TypePhotoSizexLargeState: NextPage<TypePhotoSizexLargeStateType> = ({
  statusIcon1,
  statusIcon = true,
  typePhotoSizexLargeStateWidth,
  typePhotoSizexLargeStateHeight,
  typePhotoSizexLargeStateBackgroundImage,
}) => {
  const typePhotoSizexLargeStateStyle: CSS.Properties = useMemo(() => {
    return {
      width: typePhotoSizexLargeStateWidth,
      height: typePhotoSizexLargeStateHeight,
      backgroundImage: typePhotoSizexLargeStateBackgroundImage,
    };
  }, [
    typePhotoSizexLargeStateWidth,
    typePhotoSizexLargeStateHeight,
    typePhotoSizexLargeStateBackgroundImage,
  ]);

  return (
    <div
      className="relative rounded-31xl w-20 h-20 flex flex-row items-center justify-center bg-[url(/typephoto-sizexlarge-statedefault@3x.png)] bg-cover bg-no-repeat bg-[top]"
      style={typePhotoSizexLargeStateStyle}
    >
      {statusIcon && (
        <img
          className="absolute my-0 mx-[!important] right-[0px] bottom-[0px] w-[20.02px] h-[20.06px] z-[0]"
          alt=""
          src={statusIcon1}
        />
      )}
    </div>
  );
};

export default TypePhotoSizexLargeState;
