import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import Intro from "@/components/misc/Intro";
import SocialButtons from "@/components/misc/SocialButtons";
import Knowuser from "@/components/Work/Knowuser";
// import Work from "@/components/Work";
import RAx from "@/components/Work/RAx";

const Home: React.FC = (props) => {
  return (
    <Container>
      <div className="px-4 flex flex-col justify-center items-center mx-auto mb-16">
        {/* <div className="px-4 max-w-4xl flex flex-col justify-center items-start mx-auto mb-16"> */}
        <div className=" min-h-screen py-20 flex flex-col items-center justify-center">
          <Intro />
          <SocialButtons />
        </div>
        <AboutMe />
        {/* <Work /> */}
        <RAx></RAx>
        <Knowuser />
      </div>
    </Container>
  );
};

export default Home;
