import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  date?: string;
}

const Container: React.FC<Props> = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    title: "Tirth Gajjar – Full Stack developer, Leader and a Notion pro.",
    description: `I usually talk about JavaScript/TypeScript eco-system, Serverless technologies & AWS. I have worked with various front-end frameworks, developed Chrome extensions, designed REST & GraphQL APIs and have worked with different types of databases.`,
    image: "https://www.tirth.dev/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black md:px-0">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://tirth.dev${router.asPath}`} />
        <link rel="canonical" href={`https://tirth.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Tirth Gajjar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="image" property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TirthGajjar4" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <main id="skip" className="flex flex-col justify-center bg-transparent">
        {children}
      </main>
      <div id="popper-portal" />
      <Footer />
    </div>
  );
};

export default Container;
