import { Link } from "@/components/base/Link";
import React from "react";
import useSound from "use-sound";

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
      })}
      className="inline-flex items-center py-4 px-2 space-x-1 font-medium no-underline hover:bg-blue-50 hover:animate-shine hover:bg-gradient-to-r hover:from-blue-700 hover:via-black hover:to-yellow-400 dark:hover:via-white hover:animate-shine liner-wipe"
    >
      {children}
    </Link>
  );
};

export default NavLink;
