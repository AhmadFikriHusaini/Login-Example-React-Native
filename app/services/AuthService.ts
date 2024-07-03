import axiosInstance, {  } from "./AxiosInstance";

const authService = {
    login: (params: {
        username: string,
        password: string,
        service: string
    }) => axiosInstance.get("/login/token.php", { params })
}

export default authService;