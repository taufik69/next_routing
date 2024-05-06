import Link from "next/link";
import React from "react";

const Sidebar = ({ docs }) => {
  const roots = docs.filter((doc) => !doc.parent);
  const nonRoots = docs.filter((doc) => doc.parent);
  const nonRootsObjGroup = Object.groupBy(nonRoots, ({ parent }) => parent);
  console.log(nonRootsObjGroup);
  return (
    <div>
      {/* <!-- sidebar nav --> */}
      <nav class="hidden lg:mt-10 lg:block">
        <ul role="list" class="border-l border-transparent">
          {roots.map((rootNode) => (
            <li class="relative" key={rootNode.id}>
              <Link
                href={`/docs/${rootNode.id}`}
                aria-current="page"
                class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              >
                <span class="truncate">{rootNode.id}</span>
              </Link>
              {nonRootsObjGroup[rootNode.id] && (
                <ul role="list" class="border-l border-transparent">
                  {nonRootsObjGroup[rootNode.id].map((subNode) => (
                    <li class="relative ml-5" key={subNode.id}>
                      <Link
                        href={`/docs/${rootNode.id}/${subNode.title}`}
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
