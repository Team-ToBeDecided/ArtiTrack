import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { NavbarDefaut } from "./components/Navbar";
import Product2 from "./Pages/ProductDesc";
import Products from "./Pages/Products";
export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/masti" element={<NavbarDefaut />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/desc" element={<Product2 />} />
            </Routes>
        </>
    );
};
