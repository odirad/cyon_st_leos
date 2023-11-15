import React from "react";

const Logo = () => {
  return (
    <div className="w-24 h-10 relative">
      <div className="bg-current w-[1px]  inset-y-0 absolute right-[18%]"></div>
      <div className="bg-current w-full h-[1px] absolute top-1/2"></div>
      <div className="font-extrabold absolute bottom-1/2 -mb-0.5 text-xl">
        CYON
      </div>
      <div className="font-semibold absolute top-1/2 text-sm">St. Leos's</div>
    </div>
  );
};

export default Logo;
