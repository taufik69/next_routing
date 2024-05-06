import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from "../public/banner.png";

const Landing = () => {
  return (
    <div className="pt-44">
      <div class="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div class="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
        </div>
      </div>
      <article className="mt-24">
        <div className="relative">
          <div className=" relative mx-auto px-4 ">
            <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
              <div className="flex flex-col lg:pb-6 lg:col-span-2 justify-center">
                <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                  Protocol
                </h1>

                <p className="mt-6 text-base leading-7 text-slate-700">
                  It doesn't matter if you have an API if nobody knows how to
                  use it. Teach people the ins and outs of OAuth 2.0 and JWTs in
                  style with Protocol, a beautiful API documentation template.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="docs/introduction"
                    className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                    target="_blank"
                  >
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
              <div className="relative lg:col-span-3">
                <Image
                  src={banner}
                  width="1600"
                  height="1280"
                  className="relative z-20 -mb-36 aspect-[853/682] max-w-[630px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Landing;
