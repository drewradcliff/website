import _ from "lodash";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

interface Props {
  [key: string]: any;
}

export default function Home({ sortedPosts }: Props) {
  return (
    <Layout title="Drew Radcliff Archive">
      <div className="mb-8">
        <h1 className="text-3xl">Drew Radcliff</h1>
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
      {Object.keys(sortedPosts)
        .reverse()
        .map((key: string) => (
          <React.Fragment key={key}>
            <h1 className="text-2xl my-4">{key}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {sortedPosts[key].map((post: Post) => (
                <Card key={post.slug} post={post} />
              ))}
            </div>
          </React.Fragment>
        ))}
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
    "tagColor",
  ]);

  const sortedPosts = _.groupBy(allPosts, (post: Post) =>
    post.date.slice(0, 4)
  );

  return {
    props: { sortedPosts },
  };
};
