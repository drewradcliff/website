import Image from "next/image";
import Link from "next/link";
import Post from "../types/post";

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className="rounded-2xl overflow-hidden shadow-md">
        <div className="relative h-36">
          <Image
            className="transition transform duration-250 ease-in-out hover:scale-105"
            src={post.coverImage}
            blurDataURL={post.coverImage}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-between items-center p-2">
          <h1 className="text-lg hover:text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {post.title}
          </h1>
          <span className="bg-gray-300 rounded-full px-2 py-1 text-white text-sm">
            {post.tag}
          </span>
        </div>
      </a>
    </Link>
  );
}
