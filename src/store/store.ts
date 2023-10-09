import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import commentSlice from "./slice/commentsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  dataCards: commentSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof setupStore;
