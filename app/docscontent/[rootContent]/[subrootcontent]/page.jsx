import React from "react";
import ContentDisplay from "@/app/components/ContentDisplay";
const subRootContent = ({ params }) => {
  console.log(params.subrootcontent);
  return (
    <div>
      <ContentDisplay contentId={params.subrootcontent} />
    </div>
  );
};

export default subRootContent;
