import KnowuserCoverImage from "@/assets/images/knowuser-cover.jpg";
import { Link } from "@/components/base/Link";
import { Pill } from "@/components/base/Pill";
import Image from "next/image";
import { HiArrowNarrowRight, HiLink } from "react-icons/hi";

export const KnowuserWorkEx = () => {
  return (
    <div className="relative dark:text-indigo-100 py-16 sm:py-24 min-w-[100vw] overflow-x-hidden max-w-[100vw] px-4 lg:px-0">
      <div className="flex overscroll-x-auto flex-col-reverse lg:mx-auto md:max-w-5xl lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative px-4 mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-6 space-y-2 sm:pt-4 lg:pt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block mb-2 text-2xl font-bold tracking-tight leading-8 text-gray-900 dark:text-gray-50 sm:text-4xl">
                  Knowuser
                </span>
              </h2>
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                <HiLink className="w-5 h-5" />
                <Link className="font-medium" href="https://knowuser.com">
                  knowuser.com
                </Link>
              </div>
            </div>
            <div className="text-base font-semibold tracking-wide text-indigo-600 uppercase dark:text-yellow-300">
              DEC 2019 - Now
            </div>

            <div className="mt-6 space-y-6 text-gray-700 dark:text-indigo-100">
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <Link
                  href="https://knowuser.com"
                  getProps={() => ({
                    className: "dark:text-white font-semibold underline",
                  })}
                >
                  Knowuser
                </Link>{" "}
                is a framework and tool to solve problems with in-app user
                engagement, aimed at providing all growth hacking tools at a
                single place. Taking actions based on users&apos; behavior is
                still a difficult problem today, Knowuser is aimed at
                streamlining this process.
              </p>

              <div className="space-y-4">
                <div>
                  <Link
                    href="/work/knowuser"
                    className="inline-flex justify-between items-center w-full font-semibold text-indigo-500 rounded-l rounded-r-full dark:text-white sm:text-base lg:text-sm xl:text-base hover:text-indigo-700"
                  >
                    <Pill>Co-Founder</Pill>
                  </Link>
                </div>
                <div className="prose prose-lg font-normal dark:text-indigo-100">
                  <p>
                    I was responsible for doing the concept formulation,
                    competitive research, architecting tech solutions and
                    building the web application for the product.
                  </p>
                  <p>
                    I have always been a fan of no-code tools like Notion, and I
                    am a strong believer of Product-led Growth. Knowuser is
                    meant to be the most flexible no-code tool, built to enable
                    our customers to do product-led growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            {/* <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
    {stats.map((stat) => (
    <div
     key={stat.label}
     className="pt-6 border-t-2 border-gray-100"
    >
     <dt className="text-base font-medium text-gray-500">
     {stat.label}
     </dt>
     <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
     {stat.value}
     </dd>
    </div>
    ))}
   </dl> */}
            <div className="mt-10">
              <Link
                href="/work/knowuser"
                className="inline-flex items-center text-base font-medium text-indigo-600 dark:text-lime-300"
              >
                Learn more about my work at Knowuser
                <HiArrowNarrowRight
                  className="mx-1 w-5 h-5"
                  aria-hidden="true"
                  role="presentation"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 left-1/2 w-full bg-gray-50 rounded-l-3xl dark:bg-gray-900 lg:left-72" />
            <svg
              className="absolute top-8 right-1/2 -ml-3 lg:-left-8 lg:right-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="e7a38260-a101-4efe-949c-f9ea46827c17"
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
                fill="url(#e7a38260-a101-4efe-949c-f9ea46827c17)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md md:px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="overflow-hidden relative h-96 rounded-2xl shadow-xl">
              <Image
                className="object-cover absolute inset-0 w-full h-full"
                src={KnowuserCoverImage}
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
