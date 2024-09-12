import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from './post.thunks';

type TResponse = { userId: number; id: number; title: string; body: string };

type TPostInitialState = {
  data: Array<TResponse>;
  loading: boolean;
  error: Record<string, any>;
};

const initialState = {
  data: [],
  loading: false,
  error: {},
} satisfies TPostInitialState as TPostInitialState;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, { payload }: PayloadAction<Array<TResponse>>) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPosts.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      )
      .addCase(fetchPosts.fulfilled, (state, { payload }: any) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

const { actions, reducer: PostReducer } = postsSlice;
export default PostReducer;
