import axios from "axios";
import LocalStorageService from "../../services/LocalStorageService";
import PathConfig from "../PathConfig";
import ToasterService from "../../services/TosterService";

let activeRequests = 0;

function showLoader() {
    if (activeRequests === 0) {
        document.body.classList.add("loading");
    }
    activeRequests++;
}

function hideLoader() {
    activeRequests--;
    if (activeRequests <= 0) {
        activeRequests = 0;
        document.body.classList.remove("loading");
    }
}

class Interceptor {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: PathConfig.BASE_URL,
            timeout: 10000,
        });

        this._requestInterceptor();
        this._responseInterceptor();
    }

    _requestInterceptor() {
        this.axiosInstance.interceptors.request.use(
            (config) => {
                showLoader();

                const token = LocalStorageService.getToken();
                if (token) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }

                config.headers["Content-Type"] = "application/json";
                return config;
            },
            (error) => {
                hideLoader();
                return Promise.reject(error);
            }
        );
    }

    _responseInterceptor() {
        this.axiosInstance.interceptors.response.use(
            (response) => {
                hideLoader();
                return response;
            },
            (error) => {
                hideLoader();

                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            ToasterService.showError("Unauthorized! Please login again.");
                            window.location.href = "/login";
                            break;
                        case 404:
                            ToasterService.showError("Page not found!");
                            window.location.href = "/not-found";
                            break;
                        case 500:
                            ToasterService.showError("Server error! Try later.");
                            window.location.href = "/server-error";
                            break;
                        default:
                            ToasterService.showError(error.response.data?.message || "API Error");
                    }
                } else {
                    ToasterService.showError("Network Error. Please check your server.");
                }

                return Promise.reject(error);
            }
        );
    }

    getInstance() {
        return this.axiosInstance;
    }
}

export default new Interceptor().getInstance();
