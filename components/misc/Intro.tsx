import ExternalLink from "@/components/generic/ExternalLink";
import WavingHand from "@/components/misc/WavingHand";
import React, { ReactElement } from "react";

function Intro(): ReactElement {
  return (
    <>
      <div className="prose mb-6 dark:prose-light md:prose-lg max-w-4xl">
        <h1>
          Hey,{" "}
          <span className="block md:inline-block">
            I'm Tirth Gajjar
            <WavingHand />
          </span>
        </h1>
        <div className="my-6 text-xl  md:text-2xl leading-10">
          I'm a
          <span className="font-fancy px-1 text-blue-600">
            product architect,
          </span>
          <span className="font-fancy px-1 text-green-600">
            full-stack developer,
          </span>
          and a<span className="font-fancy px-1 text-yellow-500">leader.</span>I
          work as the Product Architect at RAx Labs Inc. on product{" "}
          <ExternalLink href="https://raxter.io">raxter.io</ExternalLink>. I
          have built and lead complete remote teams successfully from last 3
          years.
          <p>
            I like to talk about JavaScipt/TypeScript Eco-system, serverless
            technologies & AWS.
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
