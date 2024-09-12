import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PostReducer } from './slices';

const reducers = combineReducers({
  posts: PostReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
