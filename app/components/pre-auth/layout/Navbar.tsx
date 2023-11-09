import Link from "next/link";
import React from "react";
import Logo from "./logo"

function Navbar() {
  return (
    <div className="w-full bg-black">
      <div className=" w-4/5 flex justify-between mx-auto pt-3 text-white">
          <Link className="w-44 flex-none" href="/" ><Logo/></Link>

        <div className="hidden lg:block  flex-none">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link href="/dashboard">About</Link>
            </li>
            <li>
              <Link href="/about">Contact</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/forum">Forum</Link>
            </li>
            <li>
              <details>
                <summary>
                  Faith
                </summary>
                <ul className="p-2 bg-base-100 bg-black">
                  <li><Link href="/faith/knowYourFaith" >K-Y-F</Link></li>
                  <li><Link href="/faith/games"  >Games</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">Hamburger</div>
      </div>
    </div>
    
  );
}

export default Navbar;
