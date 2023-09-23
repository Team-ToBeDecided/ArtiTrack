import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { NavbarDefaut } from "./components/Navbar";
import { Login } from "./Pages/LoginPage";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};
