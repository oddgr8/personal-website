import { BlogLink } from "../lib/musings";
import Link from "./link";
import { Typography, Container } from "@material-ui/core";

export default function BlogLinkComponent({
  data: { title, date, id, description },
}: {
  data: BlogLink;
}) {
  return (
    <Link internal href={"musings/blogs/" + id}>
      <Container component="a">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </Container>
    </Link>
  );
}
