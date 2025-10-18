import Link from "next/link";
import { LuGithub, LuLinkedin, LuX } from "react-icons/lu";
import { getFeed } from "../lib/rss";
import moment from "moment";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const feed = await getFeed(
    "https://www.mountainproject.com/rss/user-ticks/200263134",
  );

  return (
    <>
      <h1 className="mb-8 text-2xl">Drew Radcliff</h1>
      <p className="mb-8 font-light text-secondary">
        I like programming and debugging bouldering problems.
      </p>
      <div className="mb-24 grid gap-4">
        <div className="flex items-end pb-4">
          <h2 className="pr-4 text-lg text-primary">Recent Ticks</h2>
          <a
            className="text-sm font-light leading-7 text-link underline-offset-2 hover:underline"
            href="https://www.mountainproject.com/user/200263134/drew-radcliff/ticks"
            target="_blank"
          >
            View All
          </a>
        </div>
        <ul>
          {feed.items.slice(0, 5).map((tick) => (
            <li key={tick.guid} className="grid grid-cols-6 font-light">
              <p className="text-secondary">
                {moment(tick.isoDate).format("M.D.YY")}
              </p>
              <a
                className="col-span-5 overflow-hidden overflow-ellipsis whitespace-nowrap text-link underline-offset-2 hover:underline"
                href={tick.link}
                target="_blank"
              >
                {tick.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mb-8 flex gap-6 font-light text-blue-700 underline-offset-2 transition duration-300 ease-out dark:text-blue-200">
        <Link
          href="https://github.com/drewradcliff"
          className="text-link hover:underline"
          target="_blank"
        >
          <div className="flex items-center gap-1">
            <LuGithub /> GitHub
          </div>
        </Link>
        <Link
          href="https://x.com/aradcliff0"
          className="text-link hover:underline"
          target="_blank"
        >
          <div className="flex items-center gap-1">@aradcliff0</div>
        </Link>
      </footer>
    </>
  );
}
