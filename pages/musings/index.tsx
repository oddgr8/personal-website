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
    <>
      {musings.map((musing: Musing): ReactNode => {
        return (
          <div key={musing.id}>
            {musing.type == "blog" ? (
              <BlogLinkComponent data={musing as BlogLink} />
            ) : musing.type == "quote" ? (
              <QuoteComponent data={musing as Quote} />
            ) : musing.type == "ref" ? (
              <RefComponent data={musing as Ref} />
            ) : null}
          </div>
        );
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { musings: GetAllMusingsSorted() },
});
