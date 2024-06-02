import { getDocuments } from "@/app/lib/doc";
import { getDocementByauthor } from "@/utils/doc-utils";
import React from "react";

const authorPage = ({ params: { authorinfo } }) => {
  const docs = getDocuments();
  console.log(docs);
  getDocementByauthor(docs, authorinfo);
  return <div>{authorinfo}</div>;
};

export default authorPage;
