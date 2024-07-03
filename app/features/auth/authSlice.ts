import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { initialState } from "./authData";
import { login } from "./authActions";
import * as SecureStorage from 'expo-secure-store';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.isLogin = false;
            state.status = 'idle';
            state.error = null;
            SecureStorage.deleteItemAsync('token');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isLogin = true;
                state.status = 'success';
                SecureStorage.setItem('token', action.payload.token)
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? "something went wrong";
            
        })
    }
})

export const { logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

const authReducer = authSlice.reducer;

export default authReducer;