"use client";

import { IPageHero } from "@pre/@types/pre-auth.interfaces";
import { usePathname } from "next/navigation";
import { heroList } from "./heroList";
import Carousel from "./Carousel";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function () {
  const pagePath = usePathname();
  const pageHero: IPageHero = getPageHero(pagePath, heroList);
  return (
    <ParallaxProvider>
      {pageHero && Array.isArray(pageHero.heroImageUrl) ? (
        <Parallax translateY={[-500, 450]} className="-z-[100] relative">
          <div className=" bg-black absolute inset-0 z-50 opacity-60"></div>
          <Carousel imageArray={pageHero.heroImageUrl} />
        </Parallax>
      ) : (
        <Parallax translateY={[-50, 50]} className="-z-[100] relative -mt-28">
          <div
            className={`hero ${pageHero.heroClass}`}
            style={{
              backgroundImage: `url(${pageHero.heroImageUrl})`,
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md z-[100]">
                <h1 className="mb-5 text-5xl font-bold text-white">
                  {pageHero.pageTitle}
                </h1>
              </div>
              <div className=" bg-black absolute inset-0 z-0 opacity-60"></div>
            </div>
          </div>
        </Parallax>
      )}
    </ParallaxProvider>
  );
}
const getPageHero = (pagePath: string, heroList: IPageHero[]): IPageHero => {
  const pageHero = heroList.find((x) => {
    const pattern = "^(" + x.pagePath + ")(\\/?\\?{0}|\\/?\\?{1}.*)$";
    const regex = new RegExp(pattern);
    return regex.test(pagePath);
  });

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
