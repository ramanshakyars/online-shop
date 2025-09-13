const PathConfig = {
    BASE_URL: process.env.REACT_APP_API_URL || "http://localhost:8080",
    LOGIN_: "/auth/login",
    REGISTER: "/auth/register",
    FORGET_PASSWORD: "/auth/forget-password",
    GET_PRODUCTS: "/public/all/products",
};

export default PathConfig;
