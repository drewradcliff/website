import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="shadow-border">
      <div className="flex space-x-4 py-4">
        <Link href={"/"}>
          <a className="hover:text-gray-500">Home</a>
        </Link>
        <Link href={"/about"}>
          <a className="hover:text-gray-500">About</a>
        </Link>
      </div>
    </div>
  );
}
