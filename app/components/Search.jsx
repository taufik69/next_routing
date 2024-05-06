import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div>
      <div class="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
        <div class="container flex h-14 items-center justify-between gap-12">
          <div class="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <div class="hidden lg:block lg:max-w-md lg:flex-auto">
            <button
              type="button"
              class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
            >
              <Image
                src="/search.svg"
                class="h-5 w-5"
                width={100}
                height={25}
              />
              <input
                type="text"
                placeholder="Search..."
                class="flex-1 focus:border-none focus:outline-none"
              />
              <kbd class="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                <kbd class="font-sans">Ctrl </kbd>
                <kbd class="font-sans">K</kbd>
              </kbd>
            </button>
          </div>

          <div class="flex items-center gap-5">
            <div class="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
            <div class="flex gap-4">
              <div class="contents lg:hidden">
                <button
                  type="button"
                  class="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                  aria-label="Find something..."
                >
                  <img
                    src="./assets/icons/search.svg"
                    alt="Search"
                    class="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
