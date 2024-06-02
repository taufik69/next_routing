"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  getDocementByCatagory,
  getDocementByauthor,
  getDocementBytag,
} from "@/utils/doc-utils";

const Sidebar = ({ docs }) => {
  const [roots, setroots] = useState([]);
  const [nonroots, setnonroots] = useState({});
  const pathname = usePathname();
  // console.log(docs);
  useEffect(() => {
    let matchdocs = docs;
    if (pathname.includes("/tags")) {
      const tag = pathname.split("/")[2];
      matchdocs = getDocementBytag(docs, tag);
    } else if (pathname.includes("/author")) {
      const author = pathname.split("/")[2];
      matchdocs = getDocementByauthor(docs, author);
    } else if (pathname.includes("/category")) {
      const catagory = pathname.split("/")[2];
      matchdocs = getDocementByCatagory(docs, catagory);
    }
    const roots = matchdocs.filter((doc) => !doc.parent);
    const nonRoots = matchdocs.filter((doc) => doc.parent);
    const nonRootsObjGroup = Object.groupBy(nonRoots, ({ parent }) => parent);
    console.log(nonRootsObjGroup);
    setroots([...roots]);
    setnonroots({ ...nonRootsObjGroup });
  }, [pathname]);

  return (
    <div>
      {/* <!-- sidebar nav --> */}
      <nav class="hidden lg:mt-10 lg:block">
        <ul role="list" class="border-l border-transparent">
          {roots.map((rootNode) => (
            <li class="relative" key={rootNode.id}>
              <Link
                href={`/docscontent/${rootNode.id}`}
                aria-current="page"
                class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              >
                <span class="truncate">{rootNode.id}</span>
              </Link>
              {nonroots[rootNode.id] && (
                <ul role="list" class="border-l border-transparent">
                  {nonroots[rootNode.id].map((subNode) => (
                    <li class="relative ml-5" key={subNode.id}>
                      <Link
                        href={`/docscontent/${rootNode.id}/${subNode.id}`}
                        aria-current="page"
                        class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                      >
                        <span class="truncate">{subNode.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* <!-- Sidebar nav ends --> */}
    </div>
  );
};

export default Sidebar;
