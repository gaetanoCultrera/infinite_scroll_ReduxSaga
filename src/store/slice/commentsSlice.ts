import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../interfaces/IApiResponse";

// Define a type for the slice state
interface DataCardState {
  listCardValue: Comment[];
  isLoading: boolean;
  isFetching: boolean;
  error?: Error;
}

// Define the initial state using that type
const initialState: DataCardState = {
  listCardValue: [],
  isLoading: false,
  isFetching: false,
};

export const commentSlice = createSlice({
  name: "dataCards",
  initialState,
  reducers: {
    setStartLoading: (state) => {
      if (!state.listCardValue.length) {
        state.isLoading = true;
        return;
      }
      state.isFetching = true;
    },
    updateDataContentCard: (state, { payload }: PayloadAction<Comment[]>) => {
      state.listCardValue = [...state.listCardValue, ...payload];
      if (state.listCardValue.length) {
        state.isFetching = false;
      }
      state.isLoading = false;
    },
    setCommentsFailure: (state, { payload }: PayloadAction<Error>) => {
      state.isLoading = false;
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const { updateDataContentCard, setStartLoading, setCommentsFailure } =
  commentSlice.actions;

export default commentSlice.reducer;
