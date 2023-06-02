import {configureStore} from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import commentsSliceReducer from '../features/comments/commentsSlice';
import tagsSliceReducer from '../features/tags/tagsSlice';
import videosSliceReducer from '../features/videos/videosSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        videos: videosSliceReducer,
        tags: tagsSliceReducer,
        comments: commentsSliceReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch