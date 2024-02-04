import Image from "next/image";
import Posts from "./Posts";
import Ticks from "./Ticks";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default async function Home() {
  return (
    <>
      <h1 className="mb-8 text-4xl">Drew Radcliff</h1>
      <p className="mb-8 font-light dark:text-gray-300">
        I am a Software Developer at{" "}
        <a
          className="text-blue-700 underline-offset-2 transition duration-300 ease-out hover:text-blue-800 hover:underline dark:text-blue-200 dark:hover:text-blue-100"
          href="https://www.ally.com/invest/"
          target="_blank"
        >
          Ally
        </a>
        . I like programming and debugging bouldering problems.
      </p>
      <div className="mb-20 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="relative">
          <Image
            className="rounded-md"
            src="/IMG_6778-1.jpg"
            quality={50}
            fill
            alt="Image of climber in Moab"
          />
        </div>
        <Image
          className="col-span-2 rounded-md"
          src="/IMG_5474-0.jpg"
          height={600}
          width={600}
          alt="Image of climber in Red River Gorge"
        />
        <Image
          className="col-span-2 rounded-md"
          src="/IMG_5665-1.jpg"
          height={600}
          width={600}
          alt="Image of Grand Teton"
        />
        <div className="relative">
          <Image
            className="rounded-md object-cover"
            src="/IMG_9660-1.jpg"
            fill
            alt="Image of climbers in Joshua Tree"
          />
        </div>
        <div className="relative">
          <Image
            className="rounded-md object-cover"
            src="/IMG_6157.jpg"
            fill
            alt="Image of climbers in JoshIMG_6778-1ua Tree"
          />
        </div>
        <Image
          className="col-span-2 rounded-md"
          src="/IMG20231229170446.jpg"
          height={600}
          width={600}
          alt="Image of climber in Red River Gorge"
        />
      </div>
      <div className="mb-24 grid gap-4 sm:grid-cols-2">
        <Posts />
        <Ticks />
      </div>
      <footer className="mb-8 flex gap-6 font-light text-blue-700 underline-offset-2 transition duration-300 ease-out dark:text-blue-200">
        <Link
          href="https://github.com/drewradcliff"
          className="hover:text-blue-800 hover:underline hover:dark:text-blue-100"
          target="_blank"
        >
          <div className="flex items-center gap-1">
            <LuGithub /> GitHub
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/aradcliff/"
          className="hover:text-blue-800 hover:underline hover:dark:text-blue-100"
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
