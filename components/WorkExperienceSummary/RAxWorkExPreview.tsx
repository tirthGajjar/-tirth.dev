import RAxCoverImage from "@/assets/images/rax-cover.png";
import { Link } from "@/components/base/Link";
import { Pill } from "@/components/base/Pill";
import Image from "next/image";
import { HiArrowNarrowRight, HiLink } from "react-icons/hi";
import { Highlight } from "../base/Highlight/Highlight";

export const RAxWorkEx = () => {
  return (
    <div className="relative dark:text-indigo-100 py-16 sm:py-24 min-w-[100vw] overflow-x-hidden max-w-[100vw] px-4 lg:px-0">
      <div className="flex flex-col dark:flex-col lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="overflow-hidden absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl dark:bg-gray-900 lg:right-72">
              <div className="w-full h-full origin-center animate-background-spin">
                <div className="w-full h-full bg-gradient-to-r bg-opacity-50 from-blue-100 to-transparent  dark:bg-gradient-to-r dark:from-emerald-900 dark:to-transparent transform scale-x-[4] scale-y-[4]" />
              </div>
            </div>
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md md:px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="overflow-hidden relative w-full h-96 rounded-2xl shadow-xl">
              <Image
                className="object-cover absolute inset-0 w-full h-full"
                src={RAxCoverImage}
                alt=""
                layout="fill"
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="relative px-4 mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-6 space-y-2 sm:pt-4 lg:pt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block mb-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-gray-50 sm:text-4xl">
                  RAx Labs Inc.
                </span>
              </h2>
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                <HiLink className="w-5 h-5" role="presentation" aria-hidden />
                <Link className="font-medium" href="https://raxter.io">
                  raxter.io
                </Link>
              </div>
            </div>
            <div className="text-base font-semibold tracking-wide text-indigo-600 uppercase dark:text-yellow-300">
              Feb 2020 - Now
            </div>

            <div className="mt-6 space-y-6 text-gray-700 dark:text-indigo-100">
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <Link
                  href="https://raxter.io"
                  className="font-semibold underline dark:text-white"
                >
                  RAx
                </Link>{" "}
                is a web app that assists research scholars to speed up their
                information discovery, improve understanding of scholarly
                articles and organize knowledge to be more productive.
              </p>

              <div className="space-y-4">
                <div>
                  <Link
                    href="/work/rax/#product-architect"
                    className="block justify-between items-center w-full font-semibold text-indigo-500 no-underline rounded-l rounded-r-full dark:text-white sm:text-base lg:text-sm xl:text-base hover:text-indigo-700"
                  >
                    <Pill> Product Architect cum Tech Lead</Pill>
                  </Link>
                </div>
                <div className="prose prose-lg font-normal dark:text-indigo-100">
                  <p>
                    As a product architect, I redesigned the architecture and
                    <Highlight preset="SNOW_MINT">
                      achieved 4 nines of availability,
                    </Highlight>
                    improved scalability and achieved
                    <Highlight
                      preset="CINDERELLA"
                      className="text-lg font-semibold"
                    >
                      saved up to 34% in cloud costs,
                    </Highlight>
                    using different AWS services and Serverless architecture.
                  </p>
                  <p>
                    <Highlight preset="ZUMTHOR" className="ml-0">
                      Created, led and mentored a team of 8 engineers
                    </Highlight>
                    from 0 after filtering 500+ applications and conducting a
                    total of 100+ rounds of interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/work/RAx"
              className="inline-flex items-center text-base font-medium text-indigo-600 dark:text-lime-300 hover:space-x-8"
            >
              Learn more about my work at RAx Labs
              <HiArrowNarrowRight
                className="mx-1 w-5 h-5"
                aria-hidden="true"
                role="presentation"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RAxWorkEx;
