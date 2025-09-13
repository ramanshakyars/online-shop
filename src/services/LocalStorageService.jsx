class LocalStorageService {
    setToken(token) {
        localStorage.setItem("authToken", token);
    }

    getToken() {
        return localStorage.getItem("authToken");
    }

    setRefreshToken(token) {
        localStorage.setItem("refreshToken", token);
    }

    getRefreshToken() {
        return localStorage.getItem("refreshToken");
    }

    clearAll() {
        localStorage.clear();
    }
}

export default new LocalStorageService();
