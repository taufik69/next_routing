import Link from "next/link";
import React from "react";

const Tags = ({ key, tag }) => {
  return (
    <Link
      key={key}
      href={`/tags/${tag}`}
      className="bg-gray-200 ronded-md mr-2 text-xs p-1"
    >
      {tag}
    </Link>
  );
};

export default Tags;
