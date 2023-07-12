import Image from "next/legacy/image";
import Link from "next/link";
import Post from "../types";

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="rounded-2xl overflow-hidden shadow-lg"
    >
      <Image
        className="transition transform duration-250 ease-in-out hover:scale-105"
        src={post.coverImage}
        blurDataURL={post.coverImage}
        placeholder="blur"
        layout="responsive"
        objectFit="cover"
        width={200}
        height={100}
        alt={post.slug}
      />
      <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-700">
        <h1 className="text-lg hover:text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {post.title}
        </h1>
        <span className="bg-gray-500 rounded-full px-2 py-1 text-white text-sm">
          {post.tag}
        </span>
      </div>
    </Link>
  );
}
