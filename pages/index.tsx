import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import Intro from "@/components/misc/Intro";
import SocialButtons from "@/components/misc/SocialButtons";
import Knowuser from "@/components/Work/Knowuser";
// import Work from "@/components/Work";
import RAx from "@/components/Work/RAx";

const Home: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center mx-auto mb-16">
        <div className="flex flex-col justify-center items-center py-20 px-4 min-h-screen md:px-8 lg:px-0">
          <Intro />
          <SocialButtons />
          <button
            type="button"
            className="inline-flex py-3 px-5 text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow sm:px-10 dark:offset-lime-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 hover:bg-indigo-400 dark:hover:bg-lime-400 dark:text-gray-900 dark:bg-lime-300 dark:offset-lime-600"
          >
            About me
          </button>
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
