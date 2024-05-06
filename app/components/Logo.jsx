import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          className="h-6 w-auto"
          src={"/logo.svg"}
          alt="LOGO"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
