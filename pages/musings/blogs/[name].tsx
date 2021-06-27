import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { Blog, GetAllBlogNames, getBlogData } from "../../../lib/musings";
import { NextSeo } from "next-seo";

export default function BlogArticle({ title, date, html, description }: Blog) {
  return (
    <>
      <NextSeo
        openGraph={{
          title: title,
          description: description,
          type: "article",
          article: {
            publishedTime: date.toString(),
            authors: ["Onkar Deshpande"],
          },
        }}
      />
      {title}
      {date}
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
