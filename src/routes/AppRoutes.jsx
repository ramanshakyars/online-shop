import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import ForgetPassword from "../features/auth/ForgetPassword";
import ShopPage from "../features/shop/ShopPage";
import CartPage from "../features/CartPage";

function AppRoutes( {searchText, setSearchText} ) {
    return (

        <Routes>
            <Route path="/" element={<ShopPage searchText={searchText} setSearchText={setSearchText} />}  />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            
        </Routes>

    );
}

export default AppRoutes;