import { IPageHero } from "@pre/@types/pre-auth.interfaces";

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
    heroImageUrl:
      "https://res.cloudinary.com/dshaxrhao/image/upload/v1701936009/site_images_static/tilv8jlkzgcw0nytta8d.jpg",
  },
  {
    heroClass,
    pagePath: "/contact",
    pageTitle: "Contact",
    heroImageUrl:
      "https://res.cloudinary.com/dshaxrhao/image/upload/v1701935689/site_images_static/rzeymo8668wmg5fibutz.jpg",
  },
  {
    heroClass,
    pagePath: "/faith/know-your-faith/",
    pageTitle: "Know Your Faith",
    heroImageUrl:
      "https://res.cloudinary.com/dshaxrhao/image/upload/v1701934888/site_images_static/el3smxfkvja5yfgpdv9k.jpg",
  },
  {
    heroClass,
    pagePath: "/default",
    pageTitle: "",
    heroImageUrl: randomImgUrl(),
  },
];
