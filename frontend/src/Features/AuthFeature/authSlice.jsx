import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIBase_url = "https://green-nest-mart-web-backend.vercel.app"



//registration api call 
export const UserRegistrationAPI = createAsyncThunk(
    "auth/registration",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/auth/registration`,
                credentials, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

//login api call 
export const UserLoginAPI = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/auth/login`,
                credentials, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);


//authorization api call
export const checkAuthAPI = createAsyncThunk(
    "auth/checkAuth",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${APIBase_url}/api/auth/checkAuth`,
                {
                    withCredentials: true,
                });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
// LOGOUT API CALL
export const UserLogoutAPI = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${APIBase_url}/api/auth/logout`,
                {},
                { withCredentials: true }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
//initialState::::::::
const initialState = {
    user: null,
    loading: false,
    isAuthentication: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        //registration case ///////////////////////////
        builder
            // REGISTER - Pending
            .addCase(UserRegistrationAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // REGISTER - Success
            .addCase(UserRegistrationAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthentication = false
            })
            // REGISTER - Failed
            .addCase(UserRegistrationAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //login case////////////////////////////////////
        builder
            // Login - Pending
            .addCase(UserLoginAPI.pending, (state) => {
                {
                    state.loading = true;
                    state.error = null;
                }
            })
            // Login - Success
            .addCase(UserLoginAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthentication = action.payload.success
            })
            // Login - Failed
            .addCase(UserLoginAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //Authentication checking////////////////////////////////////
        builder
            // Authentication - Pending
            .addCase(checkAuthAPI.pending, (state) => {
                {
                    state.loading = true;
                    state.error = null;
                }
            })
            // Authentication - Success
            .addCase(checkAuthAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthentication = action.payload.success
            })
            // Authentication - Failed
            .addCase(checkAuthAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // LOGOUT CASE ////////////////////////
        builder
            .addCase(UserLogoutAPI.pending, (state) => {
                state.loading = true;
            })
            .addCase(UserLogoutAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthentication = false;
            })
            .addCase(UserLogoutAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;