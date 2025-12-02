import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

interface SectionProps {
  title: string;
  viewAllLink?: string;
  children: React.ReactNode;
}

export const Section = ({ title, viewAllLink, children }: SectionProps) => {
  return (
    <section>
      <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
        <h2 className="font-serif text-2xl">{title}</h2>
        {viewAllLink && (
          <a
            href={viewAllLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            View all
            <LuArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
      {children}
    </section>
  );
};
