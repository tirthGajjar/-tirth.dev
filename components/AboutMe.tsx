import { Link } from "@/components/base/Link";

const AboutMe = () => {
  return (
    <div className="relative py-16 sm:py-24 min-w-[100vw] overflow-x-hidden max-w-[100vw] mx-auto px-4 md:px-0">
      <div className="overflow-hidden py-16 xl:py-36">
        <div className="mx-auto max-w-max">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="prose max-w-prose text-base dark:prose-light lg:max-w-none">
              <Link href="#about-me-section" className="!no-underline">
                <h1 id="about-me-section" className="tracking-wide">
                  About me
                </h1>
              </Link>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden absolute top-0 right-0 -mt-20 -mr-20 md:block"
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
              className="hidden absolute bottom-0 left-0 -mb-20 -ml-20 md:block"
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
            <div className="relative mx-auto xl:max-w-6xl lg:px-16 lg:max-w-5xl md:dark:bg-gray-900 md:dark:bg-opacity-95 md:bg-opacity-90 md:bg-gray-50 md:p-6 md:max-w-4xl">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg font-normal dark:prose-light lg:max-w-none">
                  <p>
                    I love to build great applications, and that has drove some
                    major decisions in my career.
                  </p>
                  <p>
                    I started working as data engineer in my first job at{" "}
                    <Link href="https://maqsoftware.com/">MAQ Software</Link>,
                    and then explored a lot of technologies which excited me. As
                    I was very keen on learning new technologies and identifying
                    use-cases, I{" "}
                    <span className="font-medium text-red-500">
                      cleared 9+ Microsoft certification exams in less than a
                      year,
                    </span>{" "}
                    which got the opportunity to{" "}
                    <span className="font-medium text-red-500">
                      co-lead the tech-research team.
                    </span>{" "}
                  </p>
                  <p>
                    I wanted to work with a rapidly growing SaaS to gain actual
                    product building experience, not just as a developer. So, I
                    joined{" "}
                    <Link href="https://www.saleshandy.com/">SalesHandy</Link>{" "}
                    as a Senior Software Engineer. My main focus was to{" "}
                    <span className="font-medium text-blue-700 dark:text-yellow-400">
                      improve the engineering processes, building the product's
                      Chrome extension and help the team adopt best practices in
                      terms of development, testing and tooling.
                    </span>
                    {/* I
                    got the chance to work closely with the product designer and
                    product manager, which gave me good insights about
                    developing products, people want to use. */}
                  </p>
                </div>
                <div className="prose prose-lg mt-6 font-normal dark:prose-light lg:mt-0">
                  <p>
                    I have been wanting to build a product from ideas to
                    successful product. I started working on{" "}
                    <Link href="https://knowuser.com">Knowuser</Link>, with a
                    friend "Parag Chauhan" (Know more about why and how of
                    starting Knowuser). It has expanded my understanding of what
                    it takes to build a great product, and given me tremendous
                    amounts of{" "}
                    <span className="font-medium text-yellow-700 dark:text-blue-400">
                      learnings in terms of product management and engineering
                      systems design.{" "}
                    </span>
                  </p>
                  <p>
                    While I was working on Knowuser, I got to know about a
                    situation in RAx Labs Inc. and I felt the need of helping
                    the team. I joined as a consultant and{" "}
                    <span className="font-medium text-indigo-700 dark:text-indigo-400">
                      conducted 100+ rounds of interviews, built (hired and
                      mentored) a team of 8 engineers from scratch.{" "}
                    </span>
                  </p>
                  <p>
                    I had a lot to offer in terms of architecture design and
                    leadership, so I got converted to a full-time employee as a
                    Product Architect, and{" "}
                    <span className="font-medium text-gray-700 dark:text-amber-400">
                      redesigned the most critical parts of the system.{" "}
                    </span>
                    <Link href="/work/RAx">Learn more</Link>
                  </p>
                  {/* <p>
                    At RAx Labs Inc., I had excellent experience building the
                    entire tech-team from ground up, Revamping the most of
                    application architecture to achieve auto-scaling
                    capabilities and reduce costs. My area of focus were leading
                    the team and maintaining the quality of technical
                    implementations.
                  </p> */}
                  {/* <p>
                    These experiences have taught me more than enough about
                    wearing multiple hats expanding my horizons.
                  </p> */}
                </div>
              </div>
              <div className="inline-flex mt-8 rounded-md shadow">
                <Link
                  href="/Tirth-Gajjar--Product-Architect-Resume.pdf"
                  className="inline-flex items-center py-2 px-4 text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
