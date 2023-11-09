"use client";
import React from "react";
import Logo from "./pre-auth/layout/logo"

const AddProd = () => {
  return (
    <div>
      <h1>AddProd</h1>{" "}
      <h4>
        <Logo/>
        <button onClick={() => console.log("AddProd")}>Click me oo</button>
      </h4>
    </div>
  );
};

export default AddProd;
