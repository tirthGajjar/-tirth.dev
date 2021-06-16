import React from "react";

export const Pill: React.FC = ({ children }) => {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded bg-indigo-600 text-white text-sm font-medium select-none">
      {children}
    </span>
  );
};
