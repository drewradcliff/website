import moment from "moment";
import { getFeed } from "../lib/rss";
import Image from "next/image";
import Posts from "./Posts";

export default async function Home() {
  const feed = await getFeed(
    "https://www.mountainproject.com/rss/user-ticks/200263134"
  );

  return (
    <>
      <h1 className="text-4xl mb-8">Drew Radcliff</h1>
      <p className="mb-8 text-gray-300">
        I am a Software Developer at{" "}
        <a
          className="text-blue-200 underline-offset-2 hover:underline hover:text-blue-100 ease-out transition duration-300"
          href="https://www.ally.com/"
        >
          Ally
        </a>
        . I like programming and debugging bouldering problems.
      </p>
      <div className="grid grid-cols-3 mb-20 gap-3">
        <div className="relative">
          <Image
            className="rounded-md"
            src="/IMG_6778-1.jpg"
            fill
            objectFit="cover"
            alt="Image of climber in Moab"
          />
        </div>
        <Image
          className="rounded-md col-span-2"
          src="/IMG_5474-0.jpg"
          height={600}
          width={600}
          alt="Image of climber in Moab"
        />
        <Image
          className="rounded-md col-span-2"
          src="/IMG_5665-1.jpg"
          height={600}
          width={600}
          alt="Image of climber in Moab"
          objectFit="cover"
        />
        <div className="relative">
          <Image
            className="rounded-md"
            src="/IMG_9660-1.jpg"
            fill
            objectFit="cover"
            alt="Image of climber in Moab"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mb-24">
        <Posts />
        <div>
          <h2 className="text-xl mb-4">Recent Ticks</h2>
          <ul>
            {feed.items.slice(0, 5).map((tick) => (
              <li key={tick.guid} className="grid grid-cols-4">
                <p className="text-gray-300">
                  {moment(tick.isoDate).format("M.D.YY")}
                </p>
                <a
                  className="col-span-3 text-blue-200 underline-offset-2 hover:underline hover:text-blue-100 ease-out transition duration-300 overflow-hidden overflow-ellipsis whitespace-nowrap"
                  href={tick.link}
                >
                  {tick.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
