import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const docdirectry = path.join(process.cwd(), "app", "docs");
const fileNames = fs.readdirSync(docdirectry);

export function getDocuments() {
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(docdirectry, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // matter result
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });

  //   sorting the allDocuments to a order

  const order = allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }

    return 0;
  });
  return order;
}

// get all content with the help of funciton

export async function getDocumentsContent(id) {
  const fullPath = path.join(docdirectry, `${id}.md`);
  const fileContnets = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContnets);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
