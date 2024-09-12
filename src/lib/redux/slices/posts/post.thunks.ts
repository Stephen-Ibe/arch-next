import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/poss/');
      return res.data;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error);
    }
  }
);
