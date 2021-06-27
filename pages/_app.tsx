import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { DefaultSeo } from "next-seo";

const url = "https://personal-website-five-nu.vercel.app/";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Onkar Deshpande - Academic, Developer, Tinkerer"
        description="Curious developer stumbling through life"
        canonical={url}
        openGraph={{
          title: "Onkar Deshpande - Academic, Developer, Tinkerer",
          description: "Curious developer stumbling through life",
          type: "website",
          locale: "en_IN",
          url: url,
          site_name: "OnkarDeshpande",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
