import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const musingsDir = path.join(process.cwd(), "musings");
const blogDir = path.join(musingsDir, "blogs");
const quoteDir = path.join(musingsDir, "quotes");
const refDir = path.join(musingsDir, "refs");

const blogsFileList = (): string[] =>
  fs.readdirSync(blogDir).map((val: string): string => path.join("blogs", val));
const quotesFileList = (): string[] =>
  fs
    .readdirSync(quoteDir)
    .map((val: string): string => path.join("quotes", val));
const refsFileList = (): string[] =>
  fs.readdirSync(refDir).map((val: string): string => path.join("refs", val));

const getFileMatter = (filename: string): matter.GrayMatterFile<matter.Input> =>
  matter(fs.readFileSync(path.join(musingsDir, filename), "utf-8"));

interface MusingBase {
  date: Date;
  type: "blog" | "quote";
}

export interface BlogLink extends MusingBase {
  // id is filename for internal blogs. Link otherwise.
  // Determined if md file already has id
  id: string;
  title: string;
  internal: boolean;
  description?: string;
}
export interface Blog {
  date: Date;
  title: string;
  html: string;
}
export interface Quote extends MusingBase {
  content: string;
  writer: string;
}

export type Musing = BlogLink | Quote;

export function GetAllMusingsSorted(): Musing[] {
  var result: Musing[] = [];
  return result
    .concat(
      fs.readdirSync(blogDir).map((filename: string): BlogLink => {
        const data = getFileMatter(path.join("blogs", filename)).data;
        data.type = "blog";
        data.internal = false;
        if (!data.id) {
          data.id = filename.replace(/\.md$/, "");
          data.internal = true;
        }
        return data as BlogLink;
      }),
      fs.readdirSync(quoteDir).map(
        (filename: string): Quote => ({
          ...(getFileMatter(path.join("quotes", filename)).data as Quote),
          type: "quote",
        })
      )
    )
    .sort((a: Musing, b: Musing): number => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}

export function GetAllBlogNames(): {
  params: { name: string };
}[] {
  return fs
    .readdirSync(blogDir)
    .filter((filename) => !getFileMatter(path.join("blogs", filename)).data.id)
    .map((fileName) => ({
      params: { name: fileName.replace(/\.md$/, "") },
    }));
}

export function getBlogData(name: string): Blog {
  const matterResult = getFileMatter(path.join("blogs", name + ".md"));
  return {
    ...(matterResult.data as Omit<Blog, "html">),
    html: remark().use(html).processSync(matterResult.content).toString(),
  };
}
