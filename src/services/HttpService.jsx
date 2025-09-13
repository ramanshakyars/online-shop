import axiosInstance from "../common/configs/Interceptor";

class HttpService {
    get(url, params = {}, headers = {}) {
        return axiosInstance.get(url, { params, headers });
    }

    post(url, body = {}, headers = {}) {
        return axiosInstance.post(url, body, { headers });
    }

    put(url, body = {}, headers = {}) {
        return axiosInstance.put(url, body, { headers });
    }

    delete(url, headers = {}) {
        return axiosInstance.delete(url, { headers });
    }
}

export default new HttpService();
