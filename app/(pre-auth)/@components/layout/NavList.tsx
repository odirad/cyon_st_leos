import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { pageRoutes } from "@/(pre-auth)/@components/layout/NavData";

type TProps = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  largeScreen?: boolean;
};

type TpageRoute = { name: string; path?: string; children?: TpageRoute[] };

export const NavList: FC<TProps> = ({ setIsOpen = () => {}, largeScreen }) => {
  const closeNav = () => {
    setIsOpen(false);
  };

  return recursiveNavList(pageRoutes, closeNav, largeScreen);
};

const recursiveNavList = (
  routesList: TpageRoute[],
  closeNav: () => void,
  largeScreen?: boolean
): JSX.Element => {
  const pageRouteJsx = routesList.map((route, idx) => {
    if (!route.children?.length) {
      return (
        <li onClick={closeNav} key={idx}>
          <Link href={route.path || ""}>{route.name}</Link>
        </li>
      );
    }
    return (
      <li key={idx}>
        <details>
          <summary>{route.name}</summary>
          <ul
            className={`p-2 bg-transparent ${largeScreen && "text-gray-300"}`}
          >
            {recursiveNavList(route.children, closeNav)}
          </ul>
        </details>
      </li>
    );
  });
  return <>{pageRouteJsx}</>;
};
