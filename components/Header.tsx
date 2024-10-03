import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image src="/assets/icons/logo.svg" alt="Logo with name" />
      </Link>
    </div>
  );
};

export default Header;
