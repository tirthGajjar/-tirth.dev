import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

export const Pill: React.FC<Props> = ({ children, className }) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-0.5 rounded bg-indigo-600 text-white text-sm font-medium select-none",
        className
      )}
    >
      {children}
    </span>
  );
};
