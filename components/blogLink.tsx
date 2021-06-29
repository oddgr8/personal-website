import { BlogLink } from "../lib/musings";
import Link from "./link";
import { Typography, Container, Grid } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";

export default function BlogLinkComponent({
  data: { title, date, id, description, internal },
}: {
  data: BlogLink;
}) {
  const linkProps = internal
    ? {
        internal: true,
        href: "musings/blogs/" + id,
      }
    : {
        href: id,
        target: "_blank",
      };
  return (
    <Link {...linkProps}>
      <Container component="a">
        <Grid container alignItems="flex-end" justify="space-between">
          <Typography variant="h4">
            {title}
            {internal ? null : <LaunchIcon />}
          </Typography>
          <Typography variant="subtitle1">{date}</Typography>
        </Grid>
        <Typography variant="body1">{description}</Typography>
      </Container>
    </Link>
  );
}
