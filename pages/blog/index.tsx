import Container from "@/components/Container";
import { FrontMatter, PostType } from "@/types/posts";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Link } from "../../components/base/Link/Link";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className="pt-20 mx-auto w-full max-w-4xl ">
        <h1 className="mx-auto font-bold text-4xl dark:text-white text-center pt-12">
          Work in Progress
        </h1>
        <div className="flex flex-col items-center py-20 px-4 md:px-8 lg:px-0 w-full">
          <ul className="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8 w-full">
            {posts.map((post: FrontMatter) => (
              <li
                key={post.title}
                className="bg-white dark:bg-gray-800 px-4 py-6 shadow sm:rounded-lg sm:px-6 text-gray-900 dark:text-gray-200"
              >
                <div className="sm:flex sm:justify-between sm:items-baseline mb-4">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-medium">
                      <span className="">{post.title}</span>{" "}
                    </h3>
                  </Link>
                  <div className="text-gray-400">{post?.readingTime?.text}</div>
                </div>
                <div className="text-gray-300">{post?.subtitle}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getAllFilesFrontMatter(PostType.BLOGPOST);
    console.log(posts);
    return { props: { posts } };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return { notFound: true };
  }
};
