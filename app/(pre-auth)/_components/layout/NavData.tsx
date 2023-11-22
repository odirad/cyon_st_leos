import { IPageRoutes,IFooterRoutes } from "@pre/@types";


  export const pageRoutes: IPageRoutes[] = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Events", path: "/events" },
    { name: "Forum", path: "/forum" },
    {
      name: "Faith",
      children: [
        { name: "K-Y-F", path: "/faith/know-your-faith" },
        { name: "Games", path: "/games" },
      ],
    },
  ];


export const footerRoutes:IFooterRoutes = {
    Navigation:[...pageRoutes,],
    Services:[
        {name:'zzz',
         path:'xxx',},
            ],
  // Company: [], 
  // Legal:[]
}


