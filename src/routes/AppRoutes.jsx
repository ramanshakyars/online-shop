import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../features/LoginPage";
import RegisterPage from "../features/RegisterPage";
import ForgetPassword from "../features/ForgetPassword";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;