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
      <div className="prose flex pt-20 mx-auto w-full max-w-4xl dark:prose-light md:prose-lg lg:prose-xl lg:prose-xl">
        <p>{format(new Date(Date.parse(date)), "MMMM d, yyyy")}</p>
        <p> / {readingTime.text} / </p>
      </div>
      <article className="prose mx-auto max-w-4xl dark:prose-light md:prose-lg lg:prose-xl lg:prose-xl prose-purple">
        {children}
      </article>
    </Container>
  );
};

export default BlogLayout;
