import React from "react";

const subRootContent = ({ params }) => {
  console.log(params.subrootcontent);
  return <div>{params.subrootcontent}</div>;
};

export default subRootContent;
