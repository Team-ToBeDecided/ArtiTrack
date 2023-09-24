import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { NavbarDefaut } from "./components/Navbar";
import Product2 from "./Pages/ProductDesc";
import Products from "./Pages/Products";
import { Login } from "./Pages/LoginPage";
import { Signup } from "./Pages/Signup";
import { ConsumerProfilePage } from "./Pages/ConsumerProfilePage";
import ProductCartPage from "./Pages/ProductCartPage";
import ProductUpload from "./Pages/ProductUpload";
import InfoPan from "./Pages/InfoPan";
import { ArtisanProfilePage } from "./Pages/ArtisanProfilePage";
import { B2BDashBoard } from "./Pages/B2BDashBoard";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product2 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/productUpload" element={<ProductUpload />} />
                <Route path="/informationPanel" element={<InfoPan />} />
                <Route path="/consumerProfile" element={<ConsumerProfilePage />} />
                <Route path="/artisanProfile" element={<ArtisanProfilePage />} />
                <Route path="/cart" element={<ProductCartPage />} />
                <Route path="/b2bdashboard" element={<B2BDashBoard/>} />
            </Routes>
        </>
    );
};
