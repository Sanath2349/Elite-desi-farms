import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userFromStorage,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

// ─── Add these selectors ────────────────────────────────────────
export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => !!state.auth.user;
export const selectUserRole = (state) => state.auth.user?.role || null;
export const selectIsAdmin = (state) => state.auth.user?.role === "admin";
export const selectIsUser = (state) => state.auth.user?.role === "user";

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
