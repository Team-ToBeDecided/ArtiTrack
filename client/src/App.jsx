import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card, Typography } from "@material-tailwind/react";
import { NavbarDefaut } from "./components/Navbar";
import { Feature } from "./LandingPage/Feature";
import { LandingPage } from "./Pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Router";
import GoogleTranslate from "./components/GoogleTranslate";
import { AuthProvider } from "./components/AuthContext";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <GoogleTranslate /> */}
      <AuthProvider>
      <BrowserRouter>
        <div id="google_translate_element" className=" h-0">
          {/* Other content */}
          <NavbarDefaut />
          {/* <AuthProvider> */}
          <AppRoutes />
          {/* </AuthProvider> */}
        </div>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
