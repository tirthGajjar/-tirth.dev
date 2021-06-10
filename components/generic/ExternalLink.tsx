import NextLink from "next/link";
import React from "react";

interface IProps {
  href: string;
  target?: string;
  rel?: string;
  getProps?: () => void;
}

const Link: React.FC<IProps> = ({
  href,
  target,
  rel,
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
    </a>
  );
};

export default Link;
