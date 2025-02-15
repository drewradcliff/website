import Ticks from "./Ticks";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default async function Home() {
  return (
    <>
      <h1 className="mb-8 text-2xl">Drew Radcliff</h1>
      <p className="mb-8 font-light dark:text-gray-300">
        I am a Software Developer at{" "}
        <a
          className="text-blue-700 underline-offset-2 transition duration-300 ease-out hover:text-blue-800 hover:underline dark:text-blue-200 dark:hover:text-blue-100"
          href="https://www.ally.com/invest/"
          target="_blank"
        >
          ally
        </a>
        . I like programming and debugging bouldering problems.
      </p>
      <div className="mb-24 grid gap-4">
        <h2 className="text-lg">Recent Projects</h2>
        <ul>
          <li className="flex space-x-4 font-light ">
            <span className="dark:text-gray-300">9.1.24</span>
            <Link
              className="col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-700 underline-offset-2 transition duration-300 ease-out hover:text-blue-800 hover:underline dark:text-blue-200 hover:dark:text-blue-100"
              href="https://mmmines.fly.dev/"
              target="_blank"
            >
              mmmines
            </Link>
          </li>
          <li className="flex space-x-4 font-light ">
            <span className="dark:text-gray-300">2.1.24</span>
            <Link
              className="col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-700 underline-offset-2 transition duration-300 ease-out hover:text-blue-800 hover:underline dark:text-blue-200 hover:dark:text-blue-100"
              href="https://www.actionist.app/"
              target="_blank"
            >
              Actionist
            </Link>
          </li>
          <li className="flex space-x-4 font-light ">
            <span className="dark:text-gray-300">2.1.24</span>
            <Link
              className="col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-700 underline-offset-2 transition duration-300 ease-out hover:text-blue-800 hover:underline dark:text-blue-200 hover:dark:text-blue-100"
              href="https://github.com/drewradcliff/ai-blog"
              target="_blank"
            >
              AI Blog
            </Link>
          </li>
          <li className="flex space-x-4 font-light ">
            <span className="dark:text-gray-300">2.1.24</span>
            <Link
              className="col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-700 underline-offset-2 transition duration-300 ease-out hover:text-blue-800 hover:underline dark:text-blue-200 hover:dark:text-blue-100"
              href="https://github.com/drewradcliff/habit"
              target="_blank"
            >
              habit
            </Link>
          </li>
        </ul>
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
