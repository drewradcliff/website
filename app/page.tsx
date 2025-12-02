import { getFeed } from "../lib/rss";
import { Section } from "../components/Section";
import { Socials } from "../components/Socials";
import { TickList } from "../components/TickList";
import { BookList } from "../components/BookList";
import { MovieList } from "../components/MovieList";
import { PhotoCarousel } from "../components/PhotoCarousel";

export const revalidate = 3600;

const URLS = {
  TICKS: "https://www.mountainproject.com/rss/user-ticks/200263134",
  BOOKS_READING: "https://oku.club/rss/collection/o8Rau",
  BOOKS_READ: "https://oku.club/rss/collection/jkCOe",
  MOVIES: "https://letterboxd.com/drewradcliff/rss/",
};

async function getFeedSafe(url: string) {
  try {
    const feed = await getFeed(url);
    return feed.items;
  } catch (error) {
    console.error(`Failed to fetch RSS from ${url}`, error);
    return [];
  }
}

export default async function Home() {
  const [ticks, booksReading, booksRead, movies] = await Promise.all([
    getFeedSafe(URLS.TICKS),
    getFeedSafe(URLS.BOOKS_READING),
    getFeedSafe(URLS.BOOKS_READ),
    getFeedSafe(URLS.MOVIES),
  ]);

  return (
    <main className="pb-32">
      <header className="mb-16">
        <h1 className="mb-8 font-serif text-4xl tracking-tight sm:text-5xl">
          Drew Radcliff
        </h1>
        <p className="mb-4 max-w-md text-lg leading-relaxed text-muted">
          I like programming, debugging bouldering problems, and taking photos.
        </p>
        <Socials />
      </header>

      <div className="space-y-16">
        <Section title="Film" viewAllLink="https://www.instagram.com/rad_lomo">
          <PhotoCarousel />
        </Section>

        <Section
          title="Climbing"
          viewAllLink="https://www.mountainproject.com/user/200263134/drew-radcliff/ticks"
        >
          <TickList ticks={ticks.slice(0, 5)} />
        </Section>

        {(booksReading.length > 0 || booksRead.length > 0) && (
          <Section title="Books" viewAllLink="https://oku.club/user/werd">
            <div className="space-y-8">
              {booksReading.length > 0 && (
                <BookList
                  books={booksReading.slice(0, 3)}
                  label="Currently Reading"
                />
              )}
              {booksRead.length > 0 && (
                <BookList books={booksRead.slice(0, 3)} label="Recently Read" />
              )}
            </div>
          </Section>
        )}

        {movies.length > 0 && (
          <Section
            title="Movies"
            viewAllLink="https://letterboxd.com/drewradcliff"
          >
            <MovieList movies={movies.slice(0, 5)} />
          </Section>
        )}
      </div>
    </main>
  );
}
