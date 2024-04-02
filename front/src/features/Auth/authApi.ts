// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../../app/store";

// interface AuthState {
//   user: any; // Здесь может быть тип для данных пользователя
//   loading: "idle" | "pending" | "fulfilled" | "rejected";
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   loading: "idle",
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginStart(state) {
//       state.loading = "pending";
//       state.error = null;
//     },
//     loginSuccess(state, action: PayloadAction<any>) {
//       state.loading = "fulfilled";
//       state.user = action.payload;
//     },
//     loginFailure(state, action: PayloadAction<string>) {
//       state.loading = "rejected";
//       state.error = action.payload;
//     },
//     registerStart(state) {
//       state.loading = "pending";
//       state.error = null;
//     },
//     registerSuccess(state, action: PayloadAction<any>) {
//       state.loading = "fulfilled";
//       state.user = action.payload;
//     },
//     registerFailure(state, action: PayloadAction<string>) {
//       state.loading = "rejected";
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   loginStart,
//   loginSuccess,
//   loginFailure,
//   registerStart,
//   registerSuccess,
//   registerFailure,
// } = authSlice.actions;

// export const selectUser = (state: RootState) => state.auth.user;
// export const selectLoading = (state: RootState) => state.auth.loading;
// export const selectError = (state: RootState) => state.auth.error;

// export default authSlice.reducer;
