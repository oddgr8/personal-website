import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  // TODO: Add meta:og
  return (
    <>
      <Head>
        <title>Onkar Deshpande</title>
        <meta
          name="description"
          content="Onkar Deshpande - Academic, Developer, Tinkerer"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Link href="/">
          <a>OD</a>
        </Link>
        <Link href="/musings">
          <a>Musings</a>
        </Link>
      </header>
      <main>{children}</main>
      <footer>Good Bye</footer>
    </>
  );
}
