import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./slice/commentsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    dataCards: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
