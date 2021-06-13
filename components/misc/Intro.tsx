import ExternalLink from "@/components/generic/ExternalLink";
import WavingHand from "@/components/misc/WavingHand";
import { useTheme } from "next-themes";
import React, { ReactElement } from "react";
import {
  RoughNotation,
  RoughNotationGroup,
  RoughNotationProps,
} from "react-rough-notation";

function Intro(): ReactElement {
  const roughNotationProps: RoughNotationProps = {
    type: "highlight",
    show: true,
    animationDelay: 1500,
    children: "",
    multiline: true,
    padding: [4, 8],
  };
  const { resolvedTheme } = useTheme();

  return (
    <>
      <div className="prose mb-6 max-w-4xl dark:prose-light md:prose-lg">
        <RoughNotationGroup>
          <h1>
            Hey,{" "}
            <span className="block md:inline-block">
              I'm Tirth Gajjar
              <WavingHand />
            </span>
          </h1>
          <div className="my-6 text-lg leading-10 md:text-xl">
            <p>
              I'm a
              <RoughNotation
                {...roughNotationProps}
                color={resolvedTheme === "dark" ? "#B91C1C" : "#CFFAFE"}
              >
                <span className="px-1.5 font-semibold text-cyan-700 dark:text-red-100">
                  product architect,
                </span>
              </RoughNotation>
              <RoughNotation
                {...roughNotationProps}
                color={resolvedTheme === "dark" ? "#3730A3" : "#D1FAE5"}
              >
                <span className="px-1.5 font-semibold text-emerald-700 dark:text-indigo-100">
                  full-stack developer,
                </span>
              </RoughNotation>
              and a
              <RoughNotation
                {...roughNotationProps}
                color={resolvedTheme === "dark" ? "#84CC16" : "#FEF3C7"}
              >
                <span className="px-1.5 font-semibold text-amber-700 dark:text-lime-50">
                  leader.
                </span>
              </RoughNotation>
              I work as the Product Architect at RAx Labs Inc. on product{" "}
              <ExternalLink href="https://raxter.io">raxter.io</ExternalLink>. I
              have built and lead complete remote teams successfully from last 3
              years.
            </p>
            <p>
              I thrive to build products and engineering teams from ground up
              and have successfully done so over the last 3 years.
            </p>
            <p>
              I usually talk about JavaScript/TypeScript eco-system, Serverless
              technologies & AWS. I have worked with various front-end
              frameworks, developed Chrome extensions, designed REST & GraphQL
              APIs and have worked with different types of databases.
            </p>
          </div>
        </RoughNotationGroup>
      </div>
    </>
  );
}

export default Intro;
