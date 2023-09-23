import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { NavbarDefaut } from "./components/Navbar";
import Product2 from "./Pages/ProductDesc";
import Products from "./Pages/Products";
import { Login } from "./Pages/LoginPage";
import { Signup } from "./Pages/Signup";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/desc" element={<Product2 />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};
