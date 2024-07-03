import { AuthState } from "../../../types/app";


export const initialState: AuthState = {
    isLogin: false,
    status: "idle",
    error: null
}