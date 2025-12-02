import { extractImage } from "../lib/rss";

interface BookListProps {
  books: any[];
  label?: string;
}

export const BookList = ({ books, label }: BookListProps) => {
  return (
    <div className="space-y-4">
      {label && (
        <p className="text-xs font-mono uppercase tracking-widest text-muted">
          {label}
        </p>
      )}
      <ul className="space-y-1">
        {books.map((book) => {
          const image = extractImage(book);
          return (
            <li key={book.guid || book.link}>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-card"
              >
                {image && (
                  <img
                    src={image}
                    alt={book.title}
                    className="h-14 w-10 shrink-0 rounded object-cover shadow-sm ring-1 ring-border"
                    loading="lazy"
                  />
                )}
                <span className="text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {book.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
