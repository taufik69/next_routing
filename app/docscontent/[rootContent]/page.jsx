import React from "react";
import ContentDisplay from "@/app/components/ContentDisplay";
const RootContentPage = ({ params }) => {
  return (
    <div>
      <ContentDisplay contentId={params.rootContent} />
    </div>
  );
};

export default RootContentPage;
