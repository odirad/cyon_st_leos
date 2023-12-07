"use client";
import { CldUploadWidget } from "next-cloudinary";
export default function () {
  return (
    <div className="flex h-screen items-center justify-center">
      <CldUploadWidget
        uploadPreset="upload"
        onSuccess={(a) => {
          console.log("a :>> ", a);
        }}
      >
        {({ open }) => {
          return (
            <button
              className="btn btn-outline btn-success"
              onClick={() => open()}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
