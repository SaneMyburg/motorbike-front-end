import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteMotorbike = createAsyncThunk(
  'motorbikes/deleteMotorbike',
  async ({ userId, motorbikeId }) => {
    console.log('Deleting motorbike with ID:', motorbikeId);
    console.log('Deleting motorbike with USER ID:', userId);
    await axios.delete(`http://127.0.0.1:4000/api/v1/users/${userId}/motorbikes/${motorbikeId}`);
    return motorbikeId;
  },
);

const deleteMotorbikeSlice = createSlice({
  name: 'motorbikes',
  initialState: { motorbikes: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteMotorbike.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(deleteMotorbike.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.motorbikes = state.motorbikes.filter(
          (motorbike) => motorbike.id !== action.payload,
        );
      })
      .addCase(deleteMotorbike.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default deleteMotorbikeSlice.reducer;
