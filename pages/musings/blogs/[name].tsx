

import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import {Blog, GetAllBlogNames, getBlogData } from '../../../lib/musings'

export default function BlogArticle({ title, date, html }: Blog) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {title}
            {date}
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths:GetAllBlogNames(),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: getBlogData(params!.name as string),
  }
}