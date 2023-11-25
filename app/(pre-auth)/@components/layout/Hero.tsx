"use client";

import { IPageHero } from "@/(pre-auth)/@types/app.interfaces";
import { usePathname } from "next/navigation";
import { heroList } from "./heroList";
import Carousel from "./Carousel";

export default function () {
  const pagePath = usePathname();
  const pageHero: IPageHero = getPageHero(pagePath, heroList);
  return pageHero && Array.isArray(pageHero.heroImageUrl) ? (
    <Carousel imageArray={pageHero.heroImageUrl} />
  ) : (
    <div
      className={`hero  ${pageHero.heroClass}`}
      style={{
        backgroundImage: `url(${pageHero.heroImageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{pageHero.pageTitle}</h1>
          <p className="mb-5">
            {pageHero.heroClass} cupiditate {pageHero.heroImageUrl?.[0]} et in.{" "}
            {pageHero.pageTitle} fugiat ut {pageHero.pagePath} excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id
            nisi.ss
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
const getPageHero = (pagePath: string, heroList: IPageHero[]): IPageHero => {
  const pageHero = heroList.find((x) => x.pagePath === pagePath);

  if (pageHero) {
    if (
      (pageHero.heroImageUrl &&
        Array.isArray(pageHero.heroImageUrl) &&
        pageHero.heroImageUrl?.length) ||
      typeof pageHero.heroImageUrl === "string"
    ) {
      return pageHero;
    }
  }
  return heroList.find((x) => x.pagePath === "/default")!;
};
