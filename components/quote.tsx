import { Quote } from "../lib/musings";
import { Typography, Container } from "@material-ui/core";

export default function QuoteComponent({
  data: { content, writer, date },
}: {
  data: Quote;
}) {
  return (
    <Container>
      <Typography variant="h4">{content}</Typography>
      <Typography variant="caption">{date}</Typography>
      <Typography variant="subtitle1">{writer}</Typography>
    </Container>
  );
}
