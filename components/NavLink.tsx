import React from "react";
import useSound from "use-sound";
import Link from "./generic/ExternalLink";

interface Props {
  href: string;
  soundEffect?: string;
}

const NavLink: React.FC<Props> = ({
  href,
  soundEffect = "/sounds/plunger-immediate.mp3",
  children,
}) => {
  const [playPlungerImmediate] = useSound(soundEffect, {
    volume: 0.25,
  });

  const onMouseEnterHandler = () => {
    playPlungerImmediate();
  };

  return (
    <Link
      href={href}
      getProps={() => ({
        onMouseEnter: onMouseEnterHandler,
        className:
          "font-medium space-x-1 py-4 px-2 hover:bg-blue-50 no-underline inline-flex items-center liner-wipe hover:animate-shine hover:bg-gradient-to-r hover:from-blue-700 hover:via-black hover:to-yellow-400 dark:hover:via-white",
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
