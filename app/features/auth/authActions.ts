import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/AuthService";

export const login = createAsyncThunk(
    "auth/login",
    async (data: { username: string, password: string, service: string }) => {
        const response = await authService.login(data)
        return response.data;
    }
)