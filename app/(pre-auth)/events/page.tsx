"use client";
import { CldVideoPlayer } from "next-cloudinary";

export default function page() {
  return (
    <div className="w-full ">
      <div className="my-10 ms-14 w-10/12 lg:w-1/3 relative bg-red-200 -top-10 rounded-lg overflow-hidden border border-white">
        <video
          className="opacity-60 h-[60vh] object-cover w-full bg-green-300"
          autoPlay
          loop
          muted
          poster="https://res.cloudinary.com/dshaxrhao/image/upload/c_scale,w_200/f_auto/q_auto:eco/v1701955861/site_images_static/djwhrojntmijlgoo358k.jpg"
        >
          <source
            src="https://res.cloudinary.com/dshaxrhao/video/upload/c_scale,w_500/f_auto/q_auto:eco/v1701955261/site_vids_static/dbvaymxv9wslarc1xh5f.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
