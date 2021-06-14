import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import Banner from "@/components/generic/Banner";
import Intro from "@/components/misc/Intro";
import Knowuser from "@/components/Work/Knowuser";
// import Work from "@/components/Work";
import RAx from "@/components/Work/RAx";
import { useQueryState } from "next-usequerystate";
import { useEffect, useRef } from "react";

const Home: React.FC = ({ children }) => {
  const [source, setSource] = useQueryState("source");
  const sourceRef = useRef(source);

  useEffect(() => {
    setSource(null);
  }, []);

  return (
    <Container>
      <div className="flex flex-col justify-center items-center mx-auto mb-16">
        <div className="flex flex-col justify-center items-center py-20 px-4 min-h-screen md:px-8 lg:px-0">
          <Intro />
          <div className="flex justify-start items-center w-full">
            <a
              href="#about-me-section"
              className="inline-flex items-center py-2 px-4 text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              About me
            </a>
          </div>
        </div>
        <AboutMe />
        {/* <Work /> */}
        <RAx></RAx>
        <Knowuser />
        <Banner
          show={
            !!sourceRef.current &&
            sourceRef?.current?.toLowerCase() === "appcues"
          }
          text="Hey!, If you are from Appcues, I have a message for you!"
        />
        {children}
      </div>
    </Container>
  );
};

export default Home;
