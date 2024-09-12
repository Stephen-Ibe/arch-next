import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TSerializedError = {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
};

export const fetchPosts = createAsyncThunk(
  'posts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/'
      );
      return res.data;
    } catch (error: any) {
      // console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
