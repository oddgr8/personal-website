import { Container, Grid, Divider } from "@material-ui/core";
import { GetStaticProps } from "next";
import React, { ReactFragment, ReactNode } from "react";
import BlogLinkComponent from "../../components/blogLink";
import QuoteComponent from "../../components/quote";
import {
  BlogLink,
  GetAllMusingsSorted,
  Musing,
  Quote,
} from "../../lib/musings";

export default function BlogList({ musings }: { musings: Musing[] }) {
  return (
    <Container maxWidth="md">
      <Grid container direction="column" spacing={5}>
        {musings.map((musing: Musing, idx: number): ReactNode => {
          return (
            <React.Fragment key={idx}>
              <Grid item>
                {musing.type == "blog" ? (
                  <BlogLinkComponent data={musing as BlogLink} />
                ) : musing.type == "quote" ? (
                  <QuoteComponent data={musing as Quote} />
                ) : null}
              </Grid>
              <Divider variant="middle" />
            </React.Fragment>
          );
        })}
      </Grid>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { musings: GetAllMusingsSorted() },
});
