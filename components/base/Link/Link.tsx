import { LinkPreview } from "@/components/misc/LinkPreview";
import NextLink from "next/link";
import React from "react";
import { HiLink } from "react-icons/hi";

interface IProps {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  ariaLabel?: string;
  showIcon?: boolean;
  getProps?: () => void;
  showPreview?: boolean;
}

export const Link: React.FC<IProps> = ({
  href,
  target,
  rel,
  className = "",
  ariaLabel = "",
  showPreview = true,
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
  // This is can be overridden though.
  if (typeof target === "undefined") {
    target = linkType === "external" ? "_blank" : "";
  }

  const safeRel = target === "_blank" ? "noopener noreferrer" : rel;

  const additionalProps = typeof getProps === "function" ? getProps() : {};

  // Next links require a different sort of funky syntax.
  if (linkType === "internal") {
    return (
      <NextLink passHref href={href}>
        <a
          target={target}
          rel={safeRel}
          className={className}
          aria-label={ariaLabel}
          {...additionalProps}
        >
          {children}
        </a>
      </NextLink>
    );
  }

  const Component = (
    <a
      href={href}
      rel={safeRel}
      target={target}
      className={className}
      aria-label={ariaLabel}
      {...additionalProps}
    >
      {children}
      {showIcon && (
        <HiLink
          className="inline-block px-1 w-6 h-4"
          role="presentation"
          aria-hidden
        />
      )}
    </a>
  );

  if (showPreview && linkType === "external") {
    return <LinkPreview url={href}>{Component}</LinkPreview>;
  }

  return Component;
};
