import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadGreeting = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/greetings').catch((err) => {
    console.log('Error', err);
  });
  return response;
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    error: "Error, no Greetings"
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.greetings[0] = action.payload;
    },

    [fetchGreetings.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default greetingsSlice.reducer;


