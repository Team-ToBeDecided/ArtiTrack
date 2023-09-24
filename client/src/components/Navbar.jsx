import React from "react";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const NavbarDefaut = () => {
  // const [lang, setLang] = React.useState("hi,ur,en");
  const { accessToken, userData, userRole, user, logout } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleTranslateToUrdu = () => {
    console.log("hindi choot");
    const googleTranslateElement = document.getElementById(
      "google_translate_element"
    );

    if (googleTranslateElement) {
      googleTranslateElement.querySelector(".goog-te-combo").value = "ur";
      googleTranslateElement
        .querySelector(".goog-te-combo")
        .dispatchEvent(new Event("change"));
    }
  };

  const handleTranslateToHindi = () => {
    const googleTranslateElement = document.getElementById(
      "google_translate_element"
    );

    if (googleTranslateElement) {
      googleTranslateElement.querySelector(".goog-te-combo").value = "hi";
      googleTranslateElement
        .querySelector(".goog-te-combo")
        .dispatchEvent(new Event("change"));
    }
  };

  const handleTranslateToEnglish = () => {
    const googleTranslateElement = document.getElementById(
      "google_translate_element"
    );

    if (googleTranslateElement) {
      googleTranslateElement.querySelector(".goog-te-combo").value = "en";
      googleTranslateElement
        .querySelector(".goog-te-combo")
        .dispatchEvent(new Event("change"));
    }
  };
  return (
    <>
      {/* <GoogleTranslate language={lang} /> */}
      <Card className="flex-row items-center justify-end h-8 rounded-none bg-Charcoal">
        {/* <h1>Navbar</h1> */}
        {/* <Typography className="px-5" color="white">ENG | हिंदी | اردو</Typography> */}

        <Button
          variant="filled"
          onClick={handleTranslateToEnglish}
          className=" bg-Charcoal"
        >
          ENG
        </Button>
        <Typography className="" color="white">
          |
        </Typography>
        <Button
          variant="filled"
          onClick={handleTranslateToHindi}
          className=" hover:none bg-Charcoal"
        >
          हिंदी
        </Button>
        <Typography className="" color="white">
          |
        </Typography>
        <Button
          variant="filled"
          onClick={handleTranslateToUrdu}
          className="w-10 mr-10 hover:none bg-Charcoal"
        >
          اردو
        </Button>
      </Card>
      <Card className="flex-row items-center justify-end h-12 rounded-none shadow-none bg-Sandalwood">
          {
            userRole === "wholesaler" ? (
              <Typography
                variant="text"
                onClick={() => navigate("/b2bdashboard")}
                className="mx-5 text-white cursor-pointer font-heading text-md"
                ripple={false}
              >Dashboard</Typography>
            ) : (
              null
            )
          }
          {
            userRole === "artisan" ? (
              <Typography
                variant="text"
                onClick={() => navigate("/artisanProfile")}
                className="mx-3 text-white cursor-pointer font-heading text-md"
                ripple={false}
              >Profile</Typography>
            ) : (
              null
            )
          }
          {
            userRole === "artisan" ? (
              <Typography
                variant="text"
                onClick={() => navigate("/informationPanel")}
                className="mx-3 text-white cursor-pointer font-heading text-md"
                ripple={false}
              >Information Panel</Typography>
            ) : (
              null
            )
          }
          {
            userRole === "artisan" ? (
              <Typography
                variant="text"
                onClick={() => navigate("/productUpload")}
                className="mx-3 text-white cursor-pointer font-heading text-md"
                ripple={false}
              >Add Product</Typography>
            ) : (
              null
            )
          }
          {
            userRole === "consumer" ? (
              <Typography
                variant="text"
                onClick={() => navigate("/artisanProfile")}
                className="mx-3 text-white cursor-pointer font-heading text-md"
                ripple={false}
              >Profile</Typography>
            ) : (
              null
            )
          }
          {accessToken ? (
            <Typography
              variant="text"
              onClick={() => logout()}
              className="mx-5 text-white cursor-pointer font-heading text-md"
              ripple={false}
            >
              Logout
            </Typography>
          ) : null}
        
        <Typography color="white" className="mr-3 font-heading">
          {user ? `Hello, ${user}` : null}
        </Typography>
        {accessToken ? null : (
          <>
            <Typography
              color="white"
              onClick={() => navigate("/login")}
              className="px-2 cursor-pointer"
            >
              Login
            </Typography>
            <Typography color="white">|</Typography>
            <Typography
              color="white"
              onClick={() => navigate("/signup")}
              className="px-2 mr-3 cursor-pointer"
            >
              SignUp
            </Typography>
          </>

        )}
        <MagnifyingGlassIcon className="w-6 h-6 mr-5 text-white cursor-pointer" />
        <HeartIcon className="w-6 h-6 mr-5 text-white cursor-pointer" />
        <ShoppingCartIcon className="w-6 h-6 mr-10 text-white cursor-pointer" />
      </Card>
      {/* <div id="google_translate_element">
        </div> */}
    </>
  );
};
