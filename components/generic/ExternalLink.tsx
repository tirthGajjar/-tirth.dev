import NextLink from "next/link";
import React from "react";

interface IProps {
  href: string;
  target?: string;
  rel?: string;
  showIcon?: boolean;
  getProps?: () => void;
}

const Link: React.FC<IProps> = ({
  href,
  target,
  rel,
  showIcon = false,
  getProps = () => ({}),
  children,
}) => {
  // There are three types of links:
  // - Internal links to other pages within the same app
  // - External links, to other domains
  // - Hash links (#introduction), for the same page.
  let linkType;

  if (href.match(/^#/)) {
    linkType = "hash";
  } else if (href.match(/(^http|^mailto)/i) || target === "_blank") {
    linkType = "external";
  } else {
    linkType = "internal";
  }

  // By default, external links should open in a new tab.
  // This is overrideable though.
  if (typeof target === "undefined") {
    target = linkType === "external" ? "_blank" : "";
  }

  const safeRel = target === "_blank" ? "noopener noreferrer" : rel;

  const additionalProps = typeof getProps === "function" ? getProps() : {};

  // Next links require a different sort of funky-dunky syntax.
  if (linkType === "internal") {
    return (
      <NextLink passHref href={href}>
        <a target={target} rel={safeRel} {...additionalProps}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a href={href} rel={safeRel} target={target} {...additionalProps}>
      {children}
      {showIcon && (
        <svg
          className="w-6 h-4 px-1 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          ></path>
        </svg>
      )}
    </a>
  );
};

export default Link;
