import { GetAllPostsApi } from '@/lib/services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await GetAllPostsApi();
      return res;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
