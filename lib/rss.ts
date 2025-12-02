import Parser from "rss-parser";

type CustomItem = {
  "content:encoded"?: string;
  description?: string;
  enclosure?: { url?: string };
};

export async function getFeed(url: string) {
  let parser: Parser<{}, CustomItem> = new Parser({
    customFields: {
      item: ["content:encoded", "description", "enclosure"],
    },
  });
  let feed = await parser.parseURL(url);

  return feed;
}

export function extractImage(item: CustomItem): string | undefined {
  // First check enclosure (used by Oku RSS)
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }
  // Then check for img tags in content
  const content = item["content:encoded"] || item.description;
  if (!content) return undefined;
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : undefined;
}
