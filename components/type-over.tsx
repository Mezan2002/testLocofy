import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type TypeOverType = {
  title?: string;
  tip?: string;
  showSubtitle?: boolean;
  showAction?: boolean;

  /** Style props */
  typeOverPosition?: Property.Position;
  typeOverBoxShadow?: Property.BoxShadow;
  typeOverWidth?: Property.Width;
  typeOverTop?: Property.Top;
  typeOverLeft?: Property.Left;
  bodyAlignSelf?: Property.AlignSelf;
  frameDivAlignSelf?: Property.AlignSelf;
  titleSubtitleAlignSelf?: Property.AlignSelf;
  titleAlignSelf?: Property.AlignSelf;
  titleLineHeight?: Property.LineHeight;
  titleColor?: Property.Color;
  titleTextAlign?: Property.TextAlign;
  titleLetterSpacing?: Property.LetterSpacing;
};

const TypeOver: NextPage<TypeOverType> = ({
  title,
  tip,
  showSubtitle,
  showAction,
  typeOverPosition,
  typeOverBoxShadow,
  typeOverWidth,
  typeOverTop,
  typeOverLeft,
  bodyAlignSelf,
  frameDivAlignSelf,
  titleSubtitleAlignSelf,
  titleAlignSelf,
  titleLineHeight,
  titleColor,
  titleTextAlign,
  titleLetterSpacing,
}) => {
  const typeOverStyle: CSS.Properties = useMemo(() => {
    return {
      position: typeOverPosition,
      boxShadow: typeOverBoxShadow,
      width: typeOverWidth,
      top: typeOverTop,
      left: typeOverLeft,
    };
  }, [
    typeOverPosition,
    typeOverBoxShadow,
    typeOverWidth,
    typeOverTop,
    typeOverLeft,
  ]);

  const bodyStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: bodyAlignSelf,
    };
  }, [bodyAlignSelf]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const titleSubtitleStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: titleSubtitleAlignSelf,
    };
  }, [titleSubtitleAlignSelf]);

  const titleStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: titleAlignSelf,
      lineHeight: titleLineHeight,
      color: titleColor,
      textAlign: titleTextAlign,
      letterSpacing: titleLetterSpacing,
    };
  }, [
    titleAlignSelf,
    titleLineHeight,
    titleColor,
    titleTextAlign,
    titleLetterSpacing,
  ]);

  return (
    <div
      className="relative shadow-[0px_10px_15px_rgba(31,_41,_55,_0.1),_0px_0px_6px_rgba(31,_41,_55,_0.05)] w-[172px] flex flex-col items-center justify-start text-left text-base text-gray-7001 font-text-button-semibold-large"
      style={typeOverStyle}
    >
      <div
        className="self-stretch rounded bg-base-white flex flex-col p-4 items-start justify-start"
        style={bodyStyle}
      >
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[8px]"
          style={frameDivStyle}
        >
          <div
            className="self-stretch flex flex-col items-start justify-start"
            style={titleSubtitleStyle}
          >
            <div
              className="self-stretch relative leading-[150%] font-medium"
              style={titleStyle}
            >
              {title}
            </div>
            {showSubtitle && (
              <div className="self-stretch relative text-sm leading-[20px] text-gray-500">
                Subtitle
              </div>
            )}
          </div>
          {showAction && (
            <div className="self-stretch relative text-sm leading-[20px] text-brand-600">
              Action
            </div>
          )}
        </div>
      </div>
      <img className="relative w-4 h-[7.17px]" alt="" src={tip} />
    </div>
  );
};

export default TypeOver;
