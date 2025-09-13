import { Route, Router } from "react-router-dom";
import Login from "../features/LoginPage";
import RegisterPage from "../features/RegisterPage";
import ForgetPassword from "../features/ForgetPassword";

function AppRoutes() {
    return
    (
       <Router>
        <Route path="login" element={<LoginPage />} />
        <Route path="login" element={<RegisterPage />} />
        <Route path="login" element={<ForgetPassword />} />
       </Router>
    )
}

export default AppRoutes;