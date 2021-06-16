import { Link } from "@/components/base/Link";
import LinkWithSound from "@/components/layout/LinkWithSound";
import ThemeSwitcher from "@/components/misc/ThemeSwitcher";
import React, { useEffect, useState } from "react";

const headerLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "About",
    link: "/about",
  },
];

const Header: React.FC = () => {
  const [ifThemeCanBeSet, setThemeCanBeSet] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setThemeCanBeSet(true), []);

  return (
    <nav className="my-0 w-full text-gray-900 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 dark:text-gray-100 sticky-nav">
      <div className="flex justify-between items-center py-4 px-4 mx-auto -mb-20 w-full max-w-4xl lg:max-w-7xl md:px-8">
        <Link
          href="#skip"
          className="absolute -top-8 py-2 px-4 transition-transform duration-200 transform -translate-y-12 focus:translate-y-3"
        >
          Skip to content
        </Link>

        {ifThemeCanBeSet ? <ThemeSwitcher /> : <div></div>}
        <div className="space-x-4">
          {headerLinks.map(({ label, link }) => {
            return (
              <LinkWithSound key={label} href={link}>
                {label}
              </LinkWithSound>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
