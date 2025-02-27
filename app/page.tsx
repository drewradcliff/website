import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { getFeed } from "../lib/rss";
import moment from "moment";

const projects = [
  {
    id: 1,
    name: "mmmines",
    date: "9.1.24",
    link: "https://mmmines.fly.dev/",
  },
  {
    id: 2,
    name: "Actionist",
    date: "2.1.24",
    link: "https://www.actionist.app/",
  },
  {
    id: 3,
    name: "AI Blog",
    date: "1.15.23",
    link: "https://github.com/drewradcliff/ai-blog",
  },
  {
    id: 4,
    name: "habit",
    date: "7.17.22",
    link: "https://github.com/drewradcliff/habit",
  },
];

export default async function Home() {
  const feed = await getFeed(
    "https://www.mountainproject.com/rss/user-ticks/200263134",
  );

  return (
    <>
      <h1 className="mb-8 text-2xl">Drew Radcliff</h1>
      <p className="mb-8 font-light text-secondary">
        I am a Software Developer at{" "}
        <a
          className="text-link underline-offset-2 hover:underline"
          href="https://www.ally.com/invest/"
          target="_blank"
        >
          ally
        </a>
        . I like programming and debugging bouldering problems.
      </p>
      <div className="mb-24 grid gap-4">
        <h2 className="text-lg text-primary">Recent Projects</h2>
        <ul>
          {projects.map(({ id, name, date, link }) => (
            <li key={id} className="grid grid-cols-6 font-light ">
              <span className="text-secondary">{date}</span>
              <Link
                className="col-span-5 overflow-hidden overflow-ellipsis whitespace-nowrap text-link underline-offset-2 hover:underline"
                href={link}
                target="_blank"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
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
          href="https://www.linkedin.com/in/aradcliff/"
          className="text-link hover:underline"
          target="_blank"
        >
          <div className="flex items-center gap-1">
            <LuLinkedin /> LinkedIn
          </div>
        </Link>
      </footer>
    </>
  );
}
