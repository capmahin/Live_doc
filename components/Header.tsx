import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1"></Link>
    </div>
  );
};

export default Header;
