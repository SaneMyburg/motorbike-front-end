import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:4000/api/v1/users';
export const createUser = createAsyncThunk(
  'Users/createUser',
  async (username, thunkAPI) => {
    try {
      const resp = await axios.post(url, {
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
  isLoading: true,
  error: undefined,
  user: undefined,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.name;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
