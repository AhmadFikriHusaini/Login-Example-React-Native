import { MOODLE_API_URL } from "@env";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: MOODLE_API_URL,
});

export default axiosInstance;