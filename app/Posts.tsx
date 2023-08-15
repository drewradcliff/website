import _ from "lodash";
import { getAllPosts } from "../lib/api";
import moment from "moment";
import Link from "next/link";

export default function Posts() {
  const allPosts = getAllPosts(["title", "date", "link", "slug"]).slice(0, 2);

  return (
    <div>
      <h2 className="mb-4 text-xl">Recent Projects</h2>
      <ul>
        {allPosts.map(({ title, date, link, slug }) => (
          <li key={slug} className="grid grid-cols-4 font-light">
            <p className="text-gray-300">{moment(date).format("M.D.YY")}</p>
            <Link
              className="col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-200 underline-offset-2 transition duration-300 ease-out hover:text-blue-100 hover:underline"
              href={link}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
