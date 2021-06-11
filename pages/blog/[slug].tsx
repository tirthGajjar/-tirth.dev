import BlogLayout from "@/layouts/Blog";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { PostType } from "@/types/posts";
// import { FrontMatterPost } from "@/types/posts";
import getOgImage from "lib/generate-opengraph-images";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";

// interface BlogProps {
//   post?: FrontMatterPost;
//   ogImage: string;
//   //   tweets: Record<string, any>; // TODO: write types for tweets
// }

const Blog = ({
          post,
          ogImage,
        }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <BlogLayout frontMatter={post.frontMatter} ogImage={ogImage}>
      <MDXRemote
        {...post.mdxSource}
        // components={{
        //   ...MDXComponents,
        // }}
      />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles(PostType.BLOGPOST);

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { slug } = params as ParsedUrlQuery;
    const post = await getFileBySlug(PostType.BLOGPOST, slug as string);

    /**
     * Get tweets from API
     */
    // const tweets =
    //   // TODO: write proper return types for getTweets
    //   post.tweetIDs.length > 0 ? await getTweets(post.tweetIDs) : {};

    const ogImage = await getOgImage({
      title: post.frontMatter.title,
      background: post.frontMatter.colorFeatured,
      color: post.frontMatter.fontFeatured,
    });
    return { props: { post, ogImage } };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return { notFound: true };
  }
};

export default Blog;
