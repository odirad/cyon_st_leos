import { Component, FunctionComponent } from "react";

type Props = {
  imageArray: string[];
};

export default function ({ imageArray }: Props): JSX.Element {
  //Replace this block with the carousel Component
  //you should set the images in the heroList.ts file.

  return (
    <div className="text-5xl text-black">
      CAROUSEL{" "}
      {imageArray.map((url, idx) => (
        <div key={idx} className="text-lg text-lime-500">
          {url}
        </div>
      ))}
    </div>
  );
}
