import React from "react";
import { getDocumentsContent } from "../lib/doc";
import Link from "next/link";
import Tags from "./Tags";

const ContentDisplay = async ({ contentId }) => {
  const htmlContent = await getDocumentsContent(contentId);
  const { tags, contentHtml } = htmlContent;
  console.log(htmlContent);
  return (
    <div className=" h-[100vh] w-full">
      <article className="prose ">
        <h1>{htmlContent.title}</h1>
        <div>
          <span>Pullished On : {htmlContent.date}</span> by
          <Link href={`/author/${htmlContent.author}`}>
            {htmlContent.author}
          </Link>
          under the
          <Link href={`/category/${htmlContent.category}`}>
            {htmlContent.category}
          </Link>
        </div>
        <div>
          {tags.map((tag) => (
            <Tags tag={tag} key={tag} />
          ))}
        </div>

        <div
          className="lead"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></div>
      </article>
    </div>
  );
};

export default ContentDisplay;
