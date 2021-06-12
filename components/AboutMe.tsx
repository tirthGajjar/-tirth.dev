const AboutMe = () => {
  return (
    <div className="relative dark:text-indigo-100 py-16 sm:py-24 min-w-[100vw] overflow-x-hidden max-w-[100vw] mx-auto px-4 md:px-0">
      <div className="py-16 xl:py-36 overflow-hidden">
        <div className="max-w-max  mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base prose dark:prose-light max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide">
                About me
              </h2>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                    className="text-indigo-600 dark:text-blue-600"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                    className="text-green-400 dark:text-yellow-600"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative lg:px-16 md:bg-opacity-90 dark:text-indigo-50 md:bg-gray-50 md:dark:bg-gray-900 md:dark:bg-opacity-95 md:p-6 prose dark:prose-light md:prose-lg md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg dark:text-indigo-100 font-normal lg:max-w-none">
                  <p>
                    I love to build great applications, and that has drove some
                    major decisions in my career. Throughout my career, I have
                    worked with various frontend frameworks (NextJS, React, Vue,
                    NuxtJS), Browser Extensions, REST and GraphQL APIs, and
                    Databases (PostgreSQL, MSSQL, DynamoDB, Redis).
                  </p>
                  <p>
                    I started working as data engineer in my first job at MAQ
                    Software, and then explored a lot of technologies through
                    out my career. As I was very keen on learning new
                    technologies and identifying use-cases, I got the
                    opportunity to co-lead the tech-research team.
                  </p>
                  <p>
                    My work at MAQ Software also taught me much about the
                    engineering processes and leadership.
                  </p>
                  <p>
                    To full-fill my product building dream, I joined SalesHandy
                    as a Senior Software Engineer. My main focus was building
                    the product's Chrome extension and help the team adopt best
                    practices in terms of development, testing and tooling.
                  </p>
                </div>
                <div className="mt-6 prose dark:text-indigo-100 prose-lg font-normal lg:mt-0">
                  <p>
                    I have been wanting to create great products since the start
                    of my graduation, I and my roommate in college used to
                    discuss a lot of product building ideas.
                  </p>
                  <p>
                    To put my product building knowledge to test, I started
                    working on Knowuser with my roommate in college, Parag
                    Chauhan.
                  </p>
                  <p>
                    As I started working on Knowuser, I got to learn about so
                    much about product building and designing efficient
                    solutions. I came across concepts like product-led growth
                    and immediately got connected with it.
                  </p>
                  <p>
                    At RAx Labs Inc., I had excellent experience building the
                    entire tech-team from ground up, Revamping the most of
                    application architecture to achieve auto-scaling
                    capabilities and reduce costs. My area of focus were leading
                    the team and maintaining the quality of technical
                    implementations.
                  </p>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
