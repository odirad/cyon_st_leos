export interface IPageRoutes { name: string; path?: string; children?: IPageRoutes[] };
export interface IFooterRoutes { Navigation: IPageRoutes[]; Services:IPageRoutes[]}