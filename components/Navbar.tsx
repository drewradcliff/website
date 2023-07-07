import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="shadow-border">
      <div className="flex space-x-4 py-4">
        <Link href={"/"} className="hover:text-gray-500">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-gray-500">
          About
        </Link>
      </div>
    </div>
  );
}
