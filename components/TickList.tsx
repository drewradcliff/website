import moment from "moment";

interface Tick {
  guid: string;
  isoDate: string;
  link: string;
  title: string;
}

export const TickList = ({ ticks }: { ticks: any[] }) => {
  return (
    <ul className="space-y-1">
      {ticks.map((tick) => (
        <li key={tick.guid}>
          <a
            className="group flex items-baseline gap-4 rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-card"
            href={tick.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="shrink-0 font-mono text-xs text-muted tabular-nums">
              {moment(tick.isoDate).format("MMM D")}
            </span>
            <span className="text-foreground group-hover:text-accent transition-colors">
              {tick.title.replace("Tick: ", "")}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};
