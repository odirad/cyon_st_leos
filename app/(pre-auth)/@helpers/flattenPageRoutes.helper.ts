import { IPageRoute, IPageRouteWithChildren } from "@pre/@types";

export const flattenPageRoutes = (
  routesWithChildren: IPageRouteWithChildren[]
): IPageRoute[] => {
  return flattenFunc(routesWithChildren);
};

const flattenFunc = (
  routesWithChildren: IPageRouteWithChildren[],
  flattenedArr: IPageRoute[] = []
): IPageRoute[] => {
  for (const route of routesWithChildren) {
    if (!route.children) {
      flattenedArr.push(route);
    } else {
      flattenedArr = flattenFunc(route.children, flattenedArr);
    }
  }

  return flattenedArr;
};
