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
      <Card className=" bg-Charcoal h-8 rounded-none items-center flex-row justify-end">
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
          className="w-10 hover:none bg-Charcoal mr-10"
        >
          اردو
        </Button>
      </Card>
      <Card className=" bg-Sandalwood h-12 rounded-none flex-row items-center justify-end shadow-none">
        {accessToken ? (
          <Button
            variant="text"
            size="sm"
            onClick={() => logout()}
            className=" h-10 text-white shadow-none"
            ripple={false}
          >
            LOGOUT
          </Button>
        ) : null}

        <Typography color="white" className="mr-3">
          {user ? `Hello, ${user}` : null}
        </Typography>
        {accessToken ? null : (
          <>
            <Typography
              color="white"
              onClick={() => navigate("/login")}
              className="cursor-pointer px-2"
            >
              Login
            </Typography>
            <Typography color="white">|</Typography>
            <Typography
              color="white"
              onClick={() => navigate("/signup")}
              className="cursor-pointer px-2 mr-3"
            >
              SignUp
            </Typography>
          </>
        )}
        <MagnifyingGlassIcon className="h-6 w-6 text-white mr-5 cursor-pointer" />
        <HeartIcon className="h-6 w-6 text-white mr-5 cursor-pointer" />
        <ShoppingCartIcon className="h-6 w-6 text-white mr-10 cursor-pointer" />
      </Card>
      {/* <div id="google_translate_element">
        </div> */}
    </>
  );
};
