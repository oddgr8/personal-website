import { Container, Grid, makeStyles } from "@material-ui/core";
import { GetStaticProps } from "next";
import { ReactNode } from "react";
import BlogLinkComponent from "../../components/blogLink";
import QuoteComponent from "../../components/quote";
import {
  BlogLink,
  GetAllMusingsSorted,
  Musing,
  Quote,
} from "../../lib/musings";

export const useStyles = makeStyles((theme) => ({
  card: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function BlogList({ musings }: { musings: Musing[] }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container direction="column" spacing={5}>
        {musings.map((musing: Musing, idx: number): ReactNode => {
          return (
            <Grid item key={idx} className={classes.card}>
              {musing.type == "blog" ? (
                <BlogLinkComponent data={musing as BlogLink} />
              ) : musing.type == "quote" ? (
                <QuoteComponent data={musing as Quote} />
              ) : null}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { musings: GetAllMusingsSorted() },
});
