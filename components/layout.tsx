import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
