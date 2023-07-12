import _ from "lodash";
import { getAllPosts } from "../lib/api";
import moment from "moment";

export default function Posts() {
  const allPosts = getAllPosts(["title", "date", "slug"]).slice(0, 5);

  return (
    <div>
      <h2 className="mb-4 text-xl">Recent Projects</h2>
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
