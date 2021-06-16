import SocialButtons from "@/components/misc/SocialButtons";
import React from "react";
import NewsLetter from "../NewsLetter";

const Footer: React.FC = () => {
  return (
    <>
      <NewsLetter />
      <footer className="py-8 mx-auto w-full max-w-4xl">
        <hr className="py-1 border-none animated-gradient" />
        <div className="flex flex-col md:items-center md:justify-between">
          <SocialButtons />
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-base text-center text-gray-800 dark:text-gray-200">
              &copy; {new Date().getFullYear()} Tirth Gajjar. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
