import { createSlice } from "@reduxjs/toolkit";
const initialState = { currentuser: null, token: null,error: null, loading: false, ischeckedIn: false,lastcheckInTime: null,lastcheckOutTime:null};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSucess: (state, action) => {
      (state.currentuser = action.payload.name),
      (state.token=action.payload.token),
        (state.loading = false),
        (state.error = null);
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.currentuser = null;
      state.token=null
      state.error = null;
      state.loading = false;
      localStorage.removeItem("user"); // Clear user from local storage
    },
    checkIn: (state,action) => {
      state.ischeckedIn = true;
      state.lastcheckInTime = action.payload.lastcheckInTime;
    },
    checkOut: (state,action) => {
      state.ischeckedIn = false;
      state.checkInTime = null;
      state.lastcheckOutTime=action.payload.lastcheckOutTime;
    },
  },
});

export const{signInStart,signInFailure,signInSucess,logout,checkIn,checkOut}=userSlice.actions;
export default userSlice.reducer

// Define async thunk for login
// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//       //  "https://attendancesystemlandmarkrealtybackend.onrender.com/api/v1/auth/login",
//        "http://127.0.0.1:3000/api/v1/auth/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         }
//       );

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }
//       return data; // return the user data
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: null,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
