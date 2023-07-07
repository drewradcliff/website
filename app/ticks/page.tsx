import { getFeed } from "../../lib/rss";

export default async function Ticks() {
  const feed = await getFeed(
    "https://www.mountainproject.com/rss/user-ticks/200263134"
  );
  return (
    <ul>
      {feed.items.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
}
