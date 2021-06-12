import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/misc/ThemeSwitcher";
import NavLink from "@/components/NavLink";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Props {
  date?: string;
}

const Container: React.FC<Props> = ({ children, ...customMeta }) => {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const meta = {
    title: "Tirth Gajjar – Full Stack developer, Leader and a Notion pro.",
    description: `Full Stack developer, technical architect and a human.`,
    image: "https://leerob.io/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen md:px-0">
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
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TirthGajjar4" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="w-full my-0 text-gray-900 sticky-nav dark:text-gray-100">
        <div className="flex items-center justify-between max-w-4xl lg:max-w-7xl w-full px-4 md:px-8 py-4 -mb-20 mx-auto">
          <a
            href="#skip"
            className="absolute px-4 py-2 transition-transform duration-200 transform -translate-y-12 focus:translate-y-3 -top-8"
          >
            Skip to content
          </a>

          {mounted ? <ThemeSwitcher /> : <div></div>}
          <div className="space-x-4">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>
        </div>
      </nav>
      <main id="skip" className=" flex flex-col justify-center bg-transparent">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Container;
