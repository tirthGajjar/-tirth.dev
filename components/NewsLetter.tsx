import React from "react";

const NewsLetter = () => {
  return (
    <div className="py-16 select-none sm:py-24">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl dark:bg-gray-900" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
                  className="text-gray-200 dark:text-gray-500"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="px-4 mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="overflow-hidden relative py-10 px-6 bg-indigo-600 rounded-2xl shadow-xl dark:bg-lime-400 sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40 dark:text-lime-200"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40 dark:text-lime-500"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl">
                  Become a better full-stack developer.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-gray-200 dark:text-gray-800">
                  Learn more about serverless technologies, AWS, react, NextJS
                  and more.
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="flex-1 min-w-0">
                  <label htmlFor="cta_email">
                    <span className="sr-only">Email address</span>
                    <input
                      id="cta_email"
                      type="email"
                      className="block py-3 px-5 w-full text-base placeholder-gray-500 text-gray-900 rounded-md border border-transparent shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 dark:offset-lime-600 dark:offset-lime-600"
                      placeholder="Enter your email"
                    />
                  </label>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block py-3 px-5 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow dark:text-gray-900 dark:bg-lime-300 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 dark:offset-lime-600 sm:px-10 dark:hover:bg-lime-400 dark:offset-lime-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
