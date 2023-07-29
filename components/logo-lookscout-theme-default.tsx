import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type LogoLookscoutThemeDefaultType = {
  union?: string;
  totel?: string;

  /** Style props */
  logoLookscoutThemeDefaultPosition?: Property.Position;
};

const LogoLookscoutThemeDefault: NextPage<LogoLookscoutThemeDefaultType> = ({
  union,
  totel,
  logoLookscoutThemeDefaultPosition,
}) => {
  const logoLookscoutThemeDefaultStyle: CSS.Properties = useMemo(() => {
    return {
      position: logoLookscoutThemeDefaultPosition,
    };
  }, [logoLookscoutThemeDefaultPosition]);

  return (
    <div
      className="relative flex flex-col py-2 px-0 items-start justify-center"
      style={logoLookscoutThemeDefaultStyle}
    >
      <div className="flex flex-row p-2.5 items-center justify-center gap-[12px]">
        <img className="relative w-[22.6px] h-7" alt="" src={union} />
        <img className="relative w-[51.15px] h-[16.5px]" alt="" src={totel} />
      </div>
    </div>
  );
};

export default LogoLookscoutThemeDefault;
