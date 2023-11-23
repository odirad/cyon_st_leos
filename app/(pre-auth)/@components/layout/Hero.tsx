"use client";

import { IPageHero } from "@/(pre-auth)/@types/app.interfaces";
import { usePathname } from "next/navigation";

export default function () {
  const pagePath = usePathname();
  const pageHero: IPageHero = getPageHero(pagePath, heroList);
  return (
    pageHero && (
      <div
        className={`hero  ${pageHero.heroClass}`}
        style={{
          backgroundImage: `url(${pageHero.heroImageUrl?.[0]})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{pageHero.pageTitle}</h1>
            <p className="mb-5">
              {pageHero.heroClass} cupiditate {pageHero.heroImageUrl?.[0]} et
              in. {pageHero.pageTitle} fugiat ut {pageHero.pagePath} excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi.ss
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    )
  );
}
const getPageHero = (pagePath: string, heroList: IPageHero[]): IPageHero => {
  const pageHero = heroList.find((x) => x.pagePath === pagePath);

  if (pageHero && pageHero.heroImageUrl?.length) {
    return pageHero;
  }
  return heroList.find((x) => x.pagePath === "/default")!;
};

const heroClass = "min-h-[50vh] lg:min-h-[40vh]";
const homeHeroClass = "min-h-screen";
const randomImgUrl = () =>
  `https://source.unsplash.com/random/1080×700/?christian&sig=${
    Math.floor(Math.random() * 10) + 1
  }`;
const heroList: IPageHero[] = [
  {
    heroClass: homeHeroClass,
    pagePath: "/",
    pageTitle: "Home",
    heroImageUrl: [randomImgUrl(), randomImgUrl()],
  },
  {
    heroClass,
    pagePath: "/about",
    pageTitle: "About",
    heroImageUrl: [randomImgUrl()],
  },
  {
    heroClass,
    pagePath: "/contact",
    pageTitle: "Contact",
    heroImageUrl: [randomImgUrl()],
  },
  {
    heroClass,
    pagePath: "/default",
    pageTitle: "",
    heroImageUrl: [randomImgUrl()],
  },
];
