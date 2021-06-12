import clsx from "clsx";
import React from "react";
import useSound from "use-sound";

interface Props {
  link: string;
  label: string;
  className?: string;
}

const ExternalLink: React.FC<Props> = ({
  children,
  link,
  label,
  className = "",
}) => {
  const [playFunction] = useSound("/sounds/plunger.mp3", {
    volume: 2,
  });
  return (
    <a
      className={clsx("hover:no-underline", className)}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      onMouseEnter={() => playFunction()}
    >
      <span className="inline-flex items-center">{label}</span>
      {children}
    </a>
  );
};

export default ExternalLink;
