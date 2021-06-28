import { Ref } from "../lib/musings";
import Link from "./link";
import { Container, Typography } from "@material-ui/core";

export default function RefComponent({
  data: { title, link, date, description },
}: {
  data: Ref;
}) {
  // TODO: Render videos differently
  return (
    <Link href={link.toString()}>
      <Container component="a">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </Container>
    </Link>
  );
}
