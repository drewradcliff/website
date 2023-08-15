import _ from "lodash";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Post from "../types";

interface Props {
  [key: string]: any;
}

export default function Home({ sortedPosts }: Props) {
  return (
    <Layout title="Drew Radcliff Archive">
      <div className="mb-8">
        <h1 className="text-3xl">Drew Radcliff</h1>
        <h2>Frontend Software Engineer</h2>
      </div>
      {Object.keys(sortedPosts)
        .reverse()
        .map((key: string) => (
          <React.Fragment key={key}>
            <h1 className="my-4 text-2xl">{key}</h1>
            <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
  ]);

  const sortedPosts = _.groupBy(allPosts, (post: Post) =>
    post.date.slice(0, 4),
  );

  return {
    props: { sortedPosts },
  };
};
