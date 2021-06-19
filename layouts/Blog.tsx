import Container from "@/components/Container";
import Seo from "@/components/misc/SEO";
import { Post, ReadingTime } from "@/types/posts";
import { format } from "date-fns";
import React from "react";

interface Props {
  children: React.ReactNode;
  frontMatter: Post & { readingTime: ReadingTime };
  ogImage?: string;
}

const BlogLayout: React.FC<Props> = ({
  children,
  frontMatter,
  ogImage = "",
}) => {
  const {
    date,
    updated,
    slug,
    subtitle,
    title,
    readingTime,
    cover: ignoredCover,
  } = frontMatter;
  const path = `/posts/${slug}/`;

  return (
    <Container>
      <Seo
        title={`${title}`}
        desc={subtitle}
        image={ogImage}
        path={path}
        date={date}
        updated={updated}
      />
      <div className="prose pt-20 mx-auto w-full max-w-4xl dark:prose-light md:prose-lg lg:prose-xl">
        <h1>{title}</h1>
        <div className="flex flex-row space-x-2 text-base font-medium lg:text-lg dark:text-lime-200 text-indigo-400">
          <span>{format(new Date(Date.parse(date)), "MMMM d, yyyy")}</span>
          <span>{"/"}</span>
          <span>{readingTime.text}</span>
        </div>
      </div>
      <article className="prose mx-auto max-w-4xl dark:prose-light md:prose-lg lg:prose-xl prose-purple">
        {children}
      </article>
    </Container>
  );
};

export default BlogLayout;
