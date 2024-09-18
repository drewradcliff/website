import Parser from "rss-parser";

type Feed = {
  items: {
    title: string;
    link: string;
    pubDate: string;
    content: string;
    contentSnippet: string;
    guid: string;
    isoDate: string;
  }[];
  title: string;
  description: string;
  link: string;
  language: string;
  lastBuildDate: string;
};

export async function getFeed(url: string) {
  const parser = new Parser<Feed>();
  const { items } = await parser.parseURL(url);
  return items;
}
