import Link from "next/link";
import { LuGithub, LuTwitter } from "react-icons/lu";

export const Socials = () => {
  return (
    <div className="flex gap-1">
      <Link
        href="https://github.com/drewradcliff"
        className="group relative -ml-3 rounded-lg p-3 text-muted transition-all hover:text-foreground"
        target="_blank"
        aria-label="GitHub"
      >
        <span className="absolute inset-0 rounded-lg bg-border opacity-0 transition-opacity " />
        <LuGithub className="relative h-5 w-5" />
      </Link>
      <Link
        href="https://x.com/aradcliff0"
        className="group relative rounded-lg p-3 text-muted transition-all hover:text-foreground"
        target="_blank"
        aria-label="X (Twitter)"
      >
        <span className="absolute inset-0 rounded-lg bg-border opacity-0 transition-opacity " />
        <LuTwitter className="relative h-5 w-5" />
      </Link>
    </div>
  );
};
