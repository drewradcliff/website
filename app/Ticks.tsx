import moment from "moment";
import { getFeed } from "../lib/rss";

export default async function Ticks() {
  const feed = await getFeed(
    "https://www.mountainproject.com/rss/user-ticks/200263134",
  );

  return (
    <div>
      <div className="flex items-end pb-4">
        <h2 className="pr-4 text-lg">Recent Ticks</h2>
        <a
          className="text-sm font-light leading-7 text-blue-700 underline-offset-2 hover:text-blue-800 hover:underline dark:text-blue-200 hover:dark:text-blue-100"
          href="https://www.mountainproject.com/user/200263134/drew-radcliff/ticks"
          target="_blank"
        >
          View All
        </a>
      </div>
      <ul>
        {feed.items.slice(0, 5).map((tick) => (
          <li key={tick.guid} className="flex space-x-4 font-light">
            <p className="dark:text-gray-300">
              {moment(tick.isoDate).format("M.D.YY")}
            </p>
            <a
              className="col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-700 underline-offset-2 transition duration-300 ease-out hover:text-blue-800 hover:underline dark:text-blue-200 hover:dark:text-blue-100"
              href={tick.link}
              target="_blank"
            >
              {tick.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
