import { Quote } from "../lib/musings";

export default function QuoteComponent({
  data: { content, writer, date },
}: {
  data: Quote;
}) {
  return (
    <div>
      <h1>{content}</h1>
      <h2>{writer}</h2>
      <h2>{date}</h2>
    </div>
  );
}
