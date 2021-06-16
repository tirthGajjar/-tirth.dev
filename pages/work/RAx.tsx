import RAxCoverImageFull from "@/assets/images/rax-cover-2.jpg";
import RAxCoverImageMobile from "@/assets/images/rax-cover-mobile.jpg";
import Container from "@/components/Container";
import Challenges from "@/components/parts/Challenges";
import TechnicalDetails from "@/components/parts/TechnicalDetails";
import Tpm from "@/components/parts/TechnicalProjectManagement";
import UpperPart from "@/components/parts/UpperPart";
import Image from "next/image";

const RAxWork = (props) => {
  return (
    <Container>
      <div className="hidden pt-20 md:block">
        <Image
          src={RAxCoverImageFull}
          alt=""
          width={1584}
          height={396}
          layout="responsive"
          role="presentation"
          aria-hidden
        />
      </div>
      <div className="block pt-20 md:hidden">
        <Image
          src={RAxCoverImageMobile}
          className="block pt-20 md:hidden"
          alt=""
          width={751}
          height={396}
          layout="responsive"
          role="presentation"
          aria-hidden
        />
      </div>

      <div className="overflow-hidden relative py-16">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-lg">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-indigo-600 uppercase dark:text-yellow-300">
                RAx Labs Inc.
              </span>
            </h1>
            <h2>
              <span className="block mt-2 text-3xl font-bold tracking-tight leading-8 text-gray-900 dark:text-white sm:text-4xl">
                The Product
              </span>
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              RAx is a web app that assists research scholars to speed up their
              information discovery, improve understanding of scholarly articles
              and organize knowledge to be more productive.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-800 dark:text-gray-200">
              It is one of its kind tool in the research productivity landscape,
              integrating insights of researcher behavior and a deep
              understanding of how qualitative research is produced with
              need-driven Artificial Intelligence and innovative design.
            </p>
            <figure>
              <div className="mt-8 w-full rounded-lg">
                <Image src="/rax-cover.jpg" alt="" width={1200} height={550} />
              </div>
            </figure>
          </div>
          <div className="prose prose-lg mx-auto mt-6 max-w-4xl text-gray-800 dark:text-gray-200 dark:prose-light prose-indigo">
            <UpperPart />
            <Tpm />
            <TechnicalDetails />
            <Challenges />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RAxWork;
