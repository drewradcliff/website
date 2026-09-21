const shipped = [
  ["transcript shield", "https://transcriptshield.com/"],
  ["peridot", "https://askperidot.com/"],
  ["skill stats", "https://skillstats.dev/"],
  ["ehook", "https://www.ehook.app/"],
  ["condies", "https://www.condies.com/"],
  ["mmmines", "https://mmmines.fly.dev/"],
  [
    "actionist",
    "https://apps.apple.com/us/app/actionist-a-doing-app/id6477123297",
  ],
] as const;

export default function Shipped() {
  return (
    <main className="pb-32">
      <h1 className="mb-8 font-serif text-4xl tracking-tight sm:text-5xl">
        Shipped
      </h1>
      <ul className="space-y-3">
        {shipped.map(([name, href]) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
