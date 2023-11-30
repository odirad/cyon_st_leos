import { IPageHero } from "@pre/@types/app.interfaces";

const heroClass = "min-h-[50vh] lg:min-h-[40vh]";
const homeHeroClass = "min-h-screen";
const randomImgUrl = () =>
  `https://source.unsplash.com/random/1080×700/?christian&sig=${
    Math.floor(Math.random() * 100) + 1
  }`;
export const heroList: IPageHero[] = [
  {
    heroClass: homeHeroClass,
    pagePath: "/",
    pageTitle: "Home",
    heroImageUrl: [...Array(15)].map(() => randomImgUrl()),
  },
  {
    heroClass,
    pagePath: "/about",
    pageTitle: "About",
    heroImageUrl: randomImgUrl(),
  },
  {
    heroClass,
    pagePath: "/contact",
    pageTitle: "Contact",
    // heroImageUrl: randomImgUrl(),
  },
  {
    heroClass,
    pagePath: "/default",
    pageTitle: "",
    heroImageUrl: randomImgUrl(),
  },
];
