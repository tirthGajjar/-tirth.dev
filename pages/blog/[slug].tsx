import MDXComponents from "@/components/MDX";
import BlogLayout from "@/layouts/Blog";
import { PostType } from "@/types/posts";
import getOgImage from "lib/generate-opengraph-images";
import { getFileBySlug, getFiles } from "lib/mdx";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";

const Blog = ({
  post,
  ogImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <BlogLayout frontMatter={post.frontMatter} ogImage={ogImage}>
      <MDXRemote
        {...post.mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </BlogLayout>
  );
};

export default Blog;

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
    const post = await getFileBySlug(PostType.BLOGPOST, params?.slug as string);

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
