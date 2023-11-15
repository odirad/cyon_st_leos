import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
type Props = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};
export const NavList: FC<Props> = ({ setIsOpen = () => {} }) => {
  const pageRoutes: { name: string; path: string }[] = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Events", path: "/events" },
    { name: "Forum", path: "/forum" },
  ];

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <>
      {pageRoutes.map((route, idx) => (
        <li onClick={closeNav}>
          <Link href={route.path} key={idx}>
            {route.name}
          </Link>
        </li>
      ))}

      <li>
        <details>
          <summary>Faith</summary>
          <ul className="p-2 b g-black">
            <li onClick={closeNav}>
              <Link href="/faith/know-your-faith">K-Y-F</Link>
            </li>
            <li onClick={closeNav}>
              <Link href="/faith/games">Games</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
};
