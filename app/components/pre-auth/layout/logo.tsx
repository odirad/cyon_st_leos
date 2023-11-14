import React from 'react'

const Logo = () => {
  return (
    <div className="min-h-full w-24  h-10 text-white relative">
      <div className="bg-white w-[1px] h-full absolute right-[18%]"></div>
      <div className="bg-white w-full h-[1px] absolute top-1/2"></div>
      <div className="font-extrabold absolute bottom-1/2 -mb-0.5 text-xl">CYON</div>
      <div className="font-semibold absolute top-1/2 -mt-0.5 text-sm">St. Leos's</div>
    </div>
  )
}

export default Logo