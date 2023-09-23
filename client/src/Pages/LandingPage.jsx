import React from "react";
import { NavbarDefaut } from "../components/Navbar";
import { Feature } from "../LandingPage/Feature";
import { Products } from "../LandingPage/Products";
import { ForumPreview } from "../LandingPage/ForumPreview";

export const LandingPage = () => {
  return (
    <>
      {/* <NavbarDefaut /> */}
      <Feature />
      <Products />
      <ForumPreview />
    </>
  );
};
