import { Container, Grid } from "@material-ui/core";
import { GetStaticProps } from "next";
import { ReactNode } from "react";
import BlogLinkComponent from "../../components/blogLink";
import QuoteComponent from "../../components/quote";
import RefComponent from "../../components/ref";
import {
  BlogLink,
  GetAllMusingsSorted,
  Musing,
  Quote,
  Ref,
} from "../../lib/musings";

export default function BlogList({ musings }: { musings: Musing[] }) {
  return (
    <Grid container direction="column" spacing={5}>
      {musings.map((musing: Musing, idx: number): ReactNode => {
        return (
          <Grid item key={idx}>
              {musing.type == "blog" ? (
                <BlogLinkComponent data={musing as BlogLink} />
              ) : musing.type == "quote" ? (
                <QuoteComponent data={musing as Quote} />
              ) : musing.type == "ref" ? (
                <RefComponent data={musing as Ref} />
              ) : null}
          </Grid>
        );
      })}
    </Grid>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { musings: GetAllMusingsSorted() },
});
