import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ThemeLightLabelOffProgreType = {
  /** Style props */
  themeLightLabelOffProgreWidth?: Property.Width;
  themeLightLabelOffProgreAlignSelf?: Property.AlignSelf;
  progressLineWidth?: Property.Width;
  progressLineRight?: Property.Right;
  lineBackgroundColor?: Property.BackgroundColor;
};

const ThemeLightLabelOffProgre: NextPage<ThemeLightLabelOffProgreType> = ({
  themeLightLabelOffProgreWidth,
  themeLightLabelOffProgreAlignSelf,
  progressLineWidth,
  progressLineRight,
  lineBackgroundColor,
}) => {
  const themeLightLabelOffProgreStyle: CSS.Properties = useMemo(() => {
    return {
      width: themeLightLabelOffProgreWidth,
      alignSelf: themeLightLabelOffProgreAlignSelf,
    };
  }, [themeLightLabelOffProgreWidth, themeLightLabelOffProgreAlignSelf]);

  const progressLineStyle: CSS.Properties = useMemo(() => {
    return {
      width: progressLineWidth,
      right: progressLineRight,
    };
  }, [progressLineWidth, progressLineRight]);

  const lineStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: lineBackgroundColor,
    };
  }, [lineBackgroundColor]);

  return (
    <div
      className="relative bg-primary-50 w-80 h-2"
      style={themeLightLabelOffProgreStyle}
    >
      <div
        className="absolute h-full w-6/12 top-[0px] right-[50%] bottom-[0px] left-[0%]"
        style={progressLineStyle}
      >
        <div className="absolute top-[0px] right-[0px] w-20 h-2" />
        <div
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-primary-600"
          style={lineStyle}
        />
      </div>
    </div>
  );
};

export default ThemeLightLabelOffProgre;
