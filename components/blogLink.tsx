import { BlogLink } from "../lib/musings";
import Link from "next/link";

export default function BlogLinkComponent({
  data: { title, date, id, description },
}: {
  data: BlogLink;
}) {
  return (
    <>
      <Link href={"musings/blogs/" + id}>
        <a>
          <h1>{title}</h1>
          <h2>{date}</h2>
          {description}
        </a>
      </Link>
    </>
  );
}
