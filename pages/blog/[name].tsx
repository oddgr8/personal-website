

import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }: { postData: {} }) {
    return (
        <>
            <Head>
                <title>Title</title>
            </Head>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: {
            postData: {}
        }
    }
}