import { flattenPageRoutes } from "@/(pre-auth)/@helpers";
import { IPageRoute, IFooterRoutes, IPageRouteWithChildren } from "@pre/@types";
import WhatsapIcon from "./WhatsapIcon";

export const pageRoutes: IPageRouteWithChildren[] = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Events", path: "/events" },
  { name: "Forum", path: "/forum" },
  {
    name: "Faith",
    children: [
      { name: "K-Y-F", path: "/faith/know-your-faith" },
      { name: "Games", path: "/faith/games" },
    ],
  },
];

export const footerRoutes: IFooterRoutes = {
  Navigation: flattenPageRoutes([
    ...pageRoutes,
    { name: "Blog", path: "/blog" },
    { name: "Donate", path: "/donate" },
  ]),
  Services: [
    { name: "Skills", path: "/services/skills" },
    { name: "Jobs", path: "/services/jobs" },
    { name: "Store", path: "/services/store" },
    { name: "Advert", path: "/services/advert" },
  ],
  Social: [
    {
      name: "Whatsapp",
      iconJSX: <WhatsapIcon />,
      link: "https://whatsapp.com",
    },
  ],
};
