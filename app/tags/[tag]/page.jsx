import React from "react";

const Tagpage = ({ params: { tag } }) => {
  console.log(tag);
  return <div>{tag}</div>;
};

export default Tagpage;
