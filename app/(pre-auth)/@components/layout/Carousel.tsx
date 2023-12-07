import { Component, FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./carousel.css";
import Image from "next/image";

type Props = {
  imageArray: string[];
};

export default function ({ imageArray }: Props): JSX.Element {
  //Replace this block with the carousel Component
  //you should set the images in the heroList.ts file.

  return (
    <div className=" text-black h-[99vh] max-h-[99vh] overflow-hidden ">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imageArray.map((url, idx) => (
          <SwiperSlide key={idx} className="text-lg text-lime-500 -z-10">
            <Image src={url} width={1080} height={700} alt={`img-${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
