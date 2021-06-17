import clsx from "clsx";
import React from "react";

const defaultClass = "font-medium mx-1 px-0.5 rounded dark:bg-opacity-10";
const HIGHLIGHT_PRESETS = {
  KARRY: "bg-[#FFEAD0] text-[#113537] dark:text-[#FFFAFF]",
  ZUMTHOR: "bg-[#EFF6FF] text-blue-700 dark:text-yellow-400",
  CINDERELLA: "bg-[#FEE2E2] dark:text-blue-400",
  CANARY: "bg-[#F1E8B8] text-[#113537] rounded dark:text-[#FCFC62]",
  SNOW_MINT: "bg-[#FFEBEF] text-[#113537] dark:text-[#D5FFD9]",
  ALIZARIN_CRIMSON: "bg-[#F6F5AE] text-[#113537] dark:text-[#FCFC62]",
};

// #A3D9FF;
// #F6F740;
// #ACFCD9
// #DAFF7D;
// #CBF3D2
// #FFEAD0
// #B2EF9B;
// #E85D75
// #F93943;
// #FCECC9;
// #113537
// #3E363F
// #445E93;
// #42CAFD;
// #48BEFF;
// #7067CF
interface Props {
  className?: string;
  preset: keyof typeof HIGHLIGHT_PRESETS;
  wrapWithSpace?: boolean;
}

export const Highlight: React.FC<Props> = ({
  children,
  className,
  preset,
  wrapWithSpace = true,
}) => {
  return (
    <span className={clsx(defaultClass, HIGHLIGHT_PRESETS[preset], className)}>
      {wrapWithSpace && " "}
      {children}
      {wrapWithSpace && " "}
    </span>
  );
};
