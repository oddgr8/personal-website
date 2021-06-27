import { Ref } from "../lib/musings";

export default function RefComponent({
  data: { title, link, date, description },
}: {
  data: Ref;
}) {
  // TODO: Render videos differently
  return (
    <div>
      <a href={link.toString()} target="blank">
        <h1>{title}</h1>
        <h2>{date}</h2>
        {description}
      </a>
    </div>
  );
}
