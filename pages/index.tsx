import Card from "../components/Card";
import Layout from "../components/Layout";
import Post from "../types/post";
import { getAllPosts } from "../lib/api";

interface Props {
  allPosts: Post[];
}

export default function Home({ allPosts }: Props) {
  return (
    <Layout title="Drew Radcliff Archive">
      <div className="mb-8">
        <h1 className="text-2xl">Drew Radcliff</h1>
        <h2>
          React Developer @{" "}
          <a
            className="text-blue-500 hover:text-blue-600"
            href="https://blindrobot.com/"
          >
            Blind Robot
          </a>
        </h2>
      </div>
      {/* <h1 className="text-2xl my-4">2021</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {allPosts.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "tag",
  ]);

  return {
    props: { allPosts },
  };
};
