export interface IPageRoute {
  name: string;
  path?: string;
}
export interface ISocialRoute {
  name: string;
  iconJSX: JSX.Element;
  link: string;
}
export interface IPageRouteWithChildren extends IPageRoute {
  children?: IPageRoute[];
}
export interface IFooterRoutes {
  Navigation: IPageRoute[];
  Services: IPageRoute[];
  Social: ISocialRoute[];
}

export interface IPageHero {
  pagePath: string;
  pageTitle: string;
  heroImageUrl?: string[] | string;
  heroClass: string;
}

export const isIPageRoute = (value: IPageRoute): value is IPageRoute =>
  !!value?.path;
export const isISocialRoute = (value: ISocialRoute): value is ISocialRoute =>
  !!value?.link;
