import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import { useEffect } from "react";

const url = "https://personal-website-five-nu.vercel.app/";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
