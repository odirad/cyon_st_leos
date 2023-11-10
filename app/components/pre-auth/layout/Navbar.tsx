import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-200 h-20 pl-4 sticky">
      <Link href="/">
        <Logo></Logo>
      </Link>
      <ul className="flex w-1/4 justify-evenly">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
