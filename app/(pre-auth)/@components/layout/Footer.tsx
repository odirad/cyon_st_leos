import { IFooterRoutes, IPageRoute } from "@/(pre-auth)/@types";
import { footerRoutes } from "./NavData";
import Link from "next/link";
import { isIPageRoute, isISocialRoute } from "@pre/@types/pre-auth.interfaces";
import Image from "next/image";
import cyonLogo from "@/images/cyonlogo.png";
function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content justify-around">
        <aside>
          {" "}
          <div className="w-full flex">
            <Image src={cyonLogo} alt="cyon_logo" width={50} height={50} />
          </div>
          <p className="">
            Catholic Youth Organisation.
            <br />
            st. Leo's station, Ikeja, Nigeria.
            <br />
            Since 1988.
          </p>
        </aside>
        {Object.keys(footerRoutes).map((header, idx) => (
          <nav key={idx}>
            <header className="footer-title">{header}</header>

            {footerRoutes[header as keyof IFooterRoutes].map(
              (routeObj, idx) => {
                if (isIPageRoute(routeObj)) {
                  return (
                    <Link href={routeObj.path!} key={idx}>
                      {routeObj.name}
                    </Link>
                  );
                } else if (isISocialRoute(routeObj)) {
                  return (
                    <Link href={routeObj.link!} target="_blank" key={idx}>
                      {routeObj.iconJSX}
                    </Link>
                  );
                }
                return <></>;
              }
            )}
          </nav>
        ))}
      </footer>{" "}
      <div className="bg-base-200 flex justify-center text-xs text-base-content">
        Copyright {new Date().getFullYear()}
      </div>
    </>
  );
}

export default Footer;
