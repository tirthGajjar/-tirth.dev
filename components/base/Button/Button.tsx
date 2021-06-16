import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";

export enum ButtonSize {
  XS = "xs",
  SMALL = "small",
  DEFAULT = "default",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum ButtonType {
  PRIMARY = "primary",
  LINK = "link",
  DEFAULT = "default",
}

interface Props extends HTMLMotionProps<"button"> {
  size?: ButtonSize;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={clsx({
        "inline-flex items-center font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500":
          true,
        "px-4 py-2 text-sm rounded-md": true,

        // "px-2.5 py-1.5 shadow-sm text-xs rounded": size === ButtonSize.XS,
        // "px-3 py-2 text-sm leading-4 rounded-md": size === ButtonSize.SMALL,
        // "px-4 py-2 text-sm rounded-md": size === ButtonSize.DEFAULT,
        // "px-4 py-2 text-base rounded-md": size === ButtonSize.MEDIUM,
        // "px-6 py-3 text-base rounded-md": size === ButtonSize.LARGE,
        // "text-white bg-indigo-600 hover:bg-indigo-700":
        //  type === ButtonType.PRIMARY,
        // "text-gray-700 bg-white hover:bg-gray-50": type === ButtonType.DEFAULT,
        // "text-gray-700 bg-transparent border-transparent":
        //  type === ButtonType.LINK,
      })}
    >
      {children}
    </motion.button>
  );
};
