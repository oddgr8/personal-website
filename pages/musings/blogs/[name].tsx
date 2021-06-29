import { GetStaticProps, GetStaticPaths } from "next";
import { Blog, GetAllBlogNames, getBlogData } from "../../../lib/musings";
import { NextSeo } from "next-seo";
import { Typography, Container } from "@material-ui/core";

export default function BlogArticle({ title, date, html }: Blog) {
  return (
    <>
      <NextSeo
        openGraph={{
          title: title,
          type: "article",
          article: {
            publishedTime: date.toString(),
            authors: ["Onkar Deshpande"],
          },
        }}
      />
      <Container maxWidth="md">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Typography variant="subtitle1">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: GetAllBlogNames(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: getBlogData(params!.name as string),
  };
};
