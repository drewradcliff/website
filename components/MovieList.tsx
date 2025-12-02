import { extractImage } from "../lib/rss";

export const MovieList = ({ movies }: { movies: any[] }) => {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
      {movies.map((movie) => {
        const image = extractImage(movie);
        return (
          <a
            key={movie.guid || movie.link}
            href={movie.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[2/3] overflow-hidden rounded-lg bg-card ring-1 ring-border transition-all duration-300 hover:ring-accent hover:scale-[1.03] hover:shadow-lg"
            title={movie.title}
          >
            {image ? (
              <img
                src={image}
                alt={movie.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-3 text-center text-xs text-muted">
                {movie.title}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        );
      })}
    </div>
  );
};
