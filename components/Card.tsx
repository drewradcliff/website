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
      className="overflow-hidden rounded-2xl shadow-lg"
    >
      <Image
        className="duration-250 transform transition ease-in-out hover:scale-105"
        src={post.coverImage}
        blurDataURL={post.coverImage}
        placeholder="blur"
        layout="responsive"
        objectFit="cover"
        width={200}
        height={100}
        alt={post.slug}
      />
      <div className="flex items-center justify-between bg-white p-2 dark:bg-gray-700">
        <h1 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg hover:text-gray-500">
          {post.title}
        </h1>
        <span className="rounded-full bg-gray-500 px-2 py-1 text-sm text-white">
          {post.tag}
        </span>
      </div>
    </Link>
  );
}
