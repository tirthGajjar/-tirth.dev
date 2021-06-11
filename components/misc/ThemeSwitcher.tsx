import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import useSound from "use-sound";

const ThemeSwitcher = () => {
  const [playSwitchOn] = useSound("/sounds/switch-on.mp3");
  const [playSwitchOff] = useSound("/sounds/switch-off.mp3");
  const { resolvedTheme, setTheme } = useTheme();
  const duration = 0.7;

  const moonVariants = {
    checked: {
      scale: 1,
    },
    unchecked: {
      scale: 0,
    },
  };

  const sunVariants = {
    checked: {
      scale: 0,
    },
    unchecked: {
      scale: 1,
    },
  };

  const [isChecked, setIsChecked] = useState<boolean>(resolvedTheme === "dark");

  const scaleMoon = useMotionValue(isChecked ? 1 : 0);
  const scaleSun = useMotionValue(isChecked ? 0 : 1);
  const pathLengthMoon = useTransform(scaleMoon, [0.6, 1], [0, 1]);
  const pathLengthSun = useTransform(scaleSun, [0.6, 1], [0, 1]);

  const handleThemeChange = () => {
    if (resolvedTheme === "dark") {
      playSwitchOn();
      setIsChecked(false);
      setTheme("light");
    } else {
      playSwitchOff();
      setIsChecked(true);
      setTheme("dark");
    }
  };

  return (
    <motion.button
      aria-describedby="lightDarkSwitcherTooltip"
      onClick={handleThemeChange}
      className="w-10 h-10 inline-flex items-center p-1.5 border border-transparent rounded-sm shadow-sm dark:focus:ring-offset-gray-600 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
      title="Theme toggle"
      initial={false}
      animate={isChecked ? "checked" : "unchecked"}
      transition={{ duration }}
    >
      <motion.svg
        width="30"
        height="30"
        viewBox="0 0 25 25"
        className="text-gray-600 dark:text-gray-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M12.4058 17.7625C15.1672 17.7625 17.4058 15.5239 17.4058 12.7625C17.4058 10.0011 15.1672 7.76251 12.4058 7.76251C9.64434 7.76251 7.40576 10.0011 7.40576 12.7625C7.40576 15.5239 9.64434 17.7625 12.4058 17.7625Z"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M12.4058 1.76251V3.76251"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M12.4058 21.7625V23.7625"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M4.62598 4.98248L6.04598 6.40248"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M18.7656 19.1225L20.1856 20.5425"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M1.40576 12.7625H3.40576"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M21.4058 12.7625H23.4058"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M4.62598 20.5425L6.04598 19.1225"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M18.7656 6.40248L20.1856 4.98248"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthSun,
            scale: scaleSun,
          }}
        />
        <motion.path
          d="M21.1918 13.2013C21.0345 14.9035 20.3957 16.5257 19.35 17.8781C18.3044 19.2305 16.8953 20.2571 15.2875 20.8379C13.6797 21.4186 11.9398 21.5294 10.2713 21.1574C8.60281 20.7854 7.07479 19.9459 5.86602 18.7371C4.65725 17.5283 3.81774 16.0003 3.4457 14.3318C3.07367 12.6633 3.18451 10.9234 3.76526 9.31561C4.346 7.70783 5.37263 6.29868 6.72501 5.25307C8.07739 4.20746 9.69959 3.56862 11.4018 3.41132C10.4052 4.75958 9.92564 6.42077 10.0503 8.09273C10.175 9.76469 10.8957 11.3364 12.0812 12.5219C13.2667 13.7075 14.8384 14.4281 16.5104 14.5528C18.1823 14.6775 19.8435 14.1979 21.1918 13.2013Z"
          className="stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transition={{ duration }}
          variants={moonVariants}
          custom={isChecked}
          style={{
            pathLength: pathLengthMoon,
            scale: scaleMoon,
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

export default ThemeSwitcher;