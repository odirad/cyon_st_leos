import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Link href="/">Logo</Link>
      <ul>
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
