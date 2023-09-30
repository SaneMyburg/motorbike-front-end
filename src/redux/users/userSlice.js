import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const createUser = createAsyncThunk(
  'Users/createUser',
  async (username, thunkAPI) => {
    try {
      const resp = await axios.post('http://127.0.0.1:4000/api/v1/users', {
        user: {
          name: username,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const getUser = createAsyncThunk(
  'Users/getUser',
  async (username, thunkAPI) => {
    try {
      const resp = await axios.post('http://127.0.0.1:4000/api/v1/users/login', {
        user: {
          name: username,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const initialState = {
  detailsList: [],
  error: undefined,
  user: Cookies.get('username') || undefined,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
      Cookies.remove('username');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.name;
        Cookies.set('username', state.user);
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        Cookies.set('username', state.user);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
