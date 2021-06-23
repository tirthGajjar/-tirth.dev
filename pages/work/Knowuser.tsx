import { Link } from "@/components/base/Link";
import Container from "@/components/Container";

const Knowuser = () => {
  return (
    <Container>
      {" "}
      <div className="overflow-hidden relative py-16">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-lg">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-indigo-600 uppercase dark:text-yellow-300">
                Knowuser
              </span>
            </h1>
            <h2>
              <span className="block mt-2 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
                The Product
              </span>
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              Knowuser is a user engagement framework to empower product
              managers not only to understand in-app user engagement but to
              target specific users to engage, onboard, educate about product
              features and gather feedback - all from one place.
            </p>
            <h2>
              <span className="block mt-10 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
                Background
              </span>
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              I and my room-mate in college used to discuss several software
              product ideas to solve some problems we were seeing in our day to
              day lives. From that room to now, in 5 years we learned a lot
              about building Software products, and gained enough technical
              knowledge to chase the dream.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              In last 2-3 years, I have worked very closely with the product
              teams and saw and experienced everything about their struggle in
              targeting users based on their in-app behavior. There are tools
              like Mixpanel and Amplitude which are extremely good with user
              behavior analytics capabilities, but when it comes to utilizing
              that data inside the application, there are lot of issues, one of
              them being &quot;It&apos;s not realtime&quot; even after doing
              multiple hecks.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              To tackle these issues, I started working on Knowuser, along with
              some of my brightest friends. While researching the use case and
              market-landscape we came across tools like Appcues, Intercom,
              Userback.io, WebEngage and saw that they are serving different
              purpose in the entire growth-hacking stack. We envisioned Knowuser
              to become a platform to do end-to-end growth-hacking, to make the
              process streamlined by creating guides and a knowledge framework.
            </p>
            <h2>
              <span className="block mt-10 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
                Designs
              </span>
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              <Link
                href="https://www.figma.com/proto/VD3HkFMe9PuocNJd87Kc6u/Knowuser-re-design?node-id=1132%3A15849&scaling=min-zoom&page-id=1123%3A14128"
                className="underline"
              >
                Figma Prototype
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Knowuser;
