import moment from "moment";
import data from "../public/kilter.json";

export default function Kilter() {
  return (
    <>
      <div className="flex items-end pb-4">
        <h2 className="pr-4 text-xl">Kilterboard ticks</h2>
      </div>
      <ul>
        {data.slice(-10, data.length).map((tick, idx) => (
          <li key={idx} className="grid grid-cols-3 font-light">
            <p className="dark:text-gray-300">
              {moment(tick.date).format("M.D.YY")}
            </p>
            <p>{tick.name}</p>
            <p>{tick.grade}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
