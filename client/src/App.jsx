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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <NavbarDefaut />
        {/* <AuthProvider> */}
            <AppRoutes />
        {/* </AuthProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
