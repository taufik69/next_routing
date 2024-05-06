import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export function getDocuments() {
  const docdirectry = path.join(process.cwd(), "app", "docs");
  const fileNames = fs.readdirSync(docdirectry);

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
