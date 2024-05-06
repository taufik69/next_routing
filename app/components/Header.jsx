import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";
import _ from "lodash";

const Header = ({ docs }) => {
  return (
    <div>
      <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
        {/* <!-- Logo  --> */}
        <Logo />
        <Search />
        <Sidebar docs={docs} />
        {/* <!-- Logo Ends --> */}
      </header>
    </div>
  );
};

export default Header;
