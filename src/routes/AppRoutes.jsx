import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import ForgetPassword from "../features/auth/ForgetPassword";
import ShopPage from "../features/shop/ShopPage";

function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>

    );
}

export default AppRoutes;