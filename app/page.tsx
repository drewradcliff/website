import Image from "next/image";
import Posts from "./Posts";
import Ticks from "./Ticks";

export default async function Home() {
  return (
    <>
      <h1 className="mb-8 text-4xl">Drew Radcliff</h1>
      <p className="mb-8 text-gray-300">
        I am a Software Developer at{" "}
        <a
          className="text-blue-200 underline-offset-2 transition duration-300 ease-out hover:text-blue-100 hover:underline"
          href="https://www.ally.com/"
        >
          Ally
        </a>
        . I like programming and debugging bouldering problems.
      </p>
      <div className="mb-20 grid grid-cols-3 gap-3">
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
          className="col-span-2 rounded-md"
          src="/IMG_5474-0.jpg"
          height={600}
          width={600}
          alt="Image of climber in Moab"
        />
        <Image
          className="col-span-2 rounded-md"
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
      <div className="mb-24 grid grid-cols-2">
        <Posts />
        <Ticks />
      </div>
    </>
  );
}
