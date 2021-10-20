import AboutMe from "@/components/AboutMe";
import Banner from "@/components/base/Banner";
import { Link } from "@/components/base/Link";
import Container from "@/components/Container";
import Intro from "@/components/misc/Intro";
import { KnowuserWorkEx, RAxWorkEx } from "@/components/WorkExperienceSummary";
import { useQueryState } from "next-usequerystate";
import { useEffect, useRef } from "react";

const Home: React.FC = ({ children }) => {
  const [source, setSource] = useQueryState("source");
  const sourceRef = useRef(source);

  useEffect(() => {
    setSource(null);
  }, [setSource]);

  return (
    <Container>
      <div className="flex flex-col justify-center items-center mx-auto mb-16">
        <div className="flex flex-col justify-center items-center py-20 px-4 min-h-screen md:px-8 lg:px-0">
          <Intro />
          <div className="flex justify-start items-center w-full">
            <Link
              ariaLabel="skip to about me section"
              href="#about-me-section"
              className="inline-flex items-center py-2 px-4 text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              About me
            </Link>
          </div>
        </div>
        <AboutMe />
        <section aria-label="work experience">
          <RAxWorkEx />
          <KnowuserWorkEx />
        </section>
        <Banner
          show={
            !!sourceRef.current &&
            sourceRef?.current?.toLowerCase() === "gumroad"
          }
          text="Hey!, Sahil! I have a message for you."
        />
        {children}
      </div>
    </Container>
  );
};

export default Home;
