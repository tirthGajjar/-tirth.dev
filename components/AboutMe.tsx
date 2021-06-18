import { Highlight } from "@/components/base/Highlight";
import { Link } from "@/components/base/Link";
import { HiOutlineDownload } from "react-icons/hi";

const AboutMe = () => {
  return (
    <section aria-label="about me">
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
              <div className="relative mx-auto md:bg-opacity-90 md:bg-gray-50 md:p-6 md:max-w-4xl lg:px-16 lg:max-w-5xl xl:max-w-6xl md:dark:bg-gray-900 md:dark:bg-opacity-95">
                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                  <div className="prose prose-lg font-normal dark:prose-light lg:max-w-none">
                    <p>
                      I love to build great applications, and that has drove
                      some major decisions in my career.
                    </p>
                    <p>
                      I started working as data engineer in my first job at{" "}
                      <Link href="https://maqsoftware.com/" showPreview={false}>
                        MAQ Software
                      </Link>
                      , and then explored a lot of technologies which excited
                      me. As I was very keen on learning new technologies and
                      identifying use-cases, I
                      <Highlight preset="KARRY">
                        cleared 9+ Microsoft certification exams in less than a
                        year,
                      </Highlight>
                      which got the opportunity to
                      <Highlight preset="KARRY">
                        co-lead the tech-research team.
                      </Highlight>
                    </p>
                    <p>
                      I wanted to work with a rapidly growing SaaS to gain
                      actual product building experience, not just as a
                      developer. So, I joined{" "}
                      <Link href="https://www.saleshandy.com/">SalesHandy</Link>{" "}
                      as a Senior Software Engineer. My main focus was to
                      <Highlight preset="ZUMTHOR">
                        improve the engineering processes, building the
                        product&apos;s{" "}
                        <Link
                          className="!text-current"
                          href="https://chrome.google.com/webstore/detail/free-email-tracking-sched/acfmebaomboldplijdpfepofggkocgnl?hl=en"
                        >
                          Chrome extension
                        </Link>{" "}
                        and help the team adopt best practices in terms of
                        development, testing and tooling.
                      </Highlight>
                    </p>
                  </div>
                  <div className="prose prose-lg mt-6 font-normal dark:prose-light lg:mt-0">
                    <p>
                      I have been wanting to build a product from ideas to
                      successful product. I started working on{" "}
                      <Link href="https://knowuser.com">Knowuser</Link>, with a
                      friend &quot;Parag Chauhan&quot; (Know more about why and
                      how of starting Knowuser). It has expanded my
                      understanding of what it takes to build a great product,
                      and given me tremendous amounts of
                      <Highlight preset="CINDERELLA">
                        learnings in terms of product management and engineering
                        systems design.
                      </Highlight>
                    </p>
                    <p>
                      While I was working on Knowuser, I got to know about a
                      situation in RAx Labs Inc. and I felt the need of helping
                      the team. I joined as a consultant and
                      <Highlight preset="CANARY">
                        conducted 100+ rounds of interviews, built (hired and
                        mentored) a team of 8 engineers from scratch.
                      </Highlight>
                    </p>
                    <p>
                      I had a lot to offer in terms of architecture design and
                      leadership, so I got converted to a full-time employee as
                      a Product Architect, and
                      <Highlight preset="SNOW_MINT">
                        redesigned the most critical parts of the system.
                      </Highlight>
                      <Link href="/work/RAx">Learn more</Link>
                    </p>
                  </div>
                </div>
                <div className="inline-flex mt-8 rounded-md shadow">
                  <Link
                    href="/Tirth-Gajjar--Product-Architect-Resume.pdf"
                    className="inline-flex items-center py-2 px-4 text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <HiOutlineDownload
                      className="mr-2 -ml-1 w-5 h-5"
                      stroke="currentColor"
                      aria-hidden="true"
                    />
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
