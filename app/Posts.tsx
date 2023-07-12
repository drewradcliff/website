import _ from "lodash";
import { getAllPosts } from "../lib/api";
import moment from "moment";

type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tag: string;
};

export default function Posts() {
  const allPosts = getAllPosts(["title", "date", "slug"]).slice(0, 5);

  return (
    <div>
      <h2 className="text-xl mb-4">Recent Projects</h2>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug} className="grid grid-cols-4">
            <p>{moment(post.date).format("M.D.YY")}</p>
            <a className="col-span-3" href={`posts/${post.slug}`}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
