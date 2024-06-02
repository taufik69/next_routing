import { getDocementByCatagory } from "@/utils/doc-utils";
import { getDocuments } from "@/app/lib/doc";
import React from "react";
import ContentDisplay from "@/app/components/ContentDisplay";
const page = ({ params: { catagoryList } }) => {
  const docs = getDocuments();
  const x = getDocementByCatagory(docs, catagoryList);

  return (
    <div>
      <ContentDisplay contentId={x[0].id} />
    </div>
  );
};

export default page;
