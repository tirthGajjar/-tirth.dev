import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import Intro from "@/components/misc/Intro";
import Knowuser from "@/components/Work/Knowuser";
// import Work from "@/components/Work";
import RAx from "@/components/Work/RAx";

const Home: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center mx-auto mb-16">
        <div className="flex flex-col justify-center items-center py-20 px-4 min-h-screen md:px-8 lg:px-0">
          <Intro />
          <div className="flex justify-start items-center w-full">
            <a
              href="#about-me-section"
              className="inline-flex py-3 px-5 text-base font-medium text-white bg-indigo-600 rounded-md border-2 border-transparent shadow transition-all dark:text-gray-900 dark:bg-lime-300 hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 dark:offset-lime-600 sm:px-10 hover:border-indigo-600 dark:hover:bg-lime-400 dark:offset-lime-600 box-border"
            >
              About me
            </a>
          </div>
        </div>
        <AboutMe />
        {/* <Work /> */}
        <RAx></RAx>
        <Knowuser />
        {children}
      </div>
    </Container>
  );
};

export default Home;
