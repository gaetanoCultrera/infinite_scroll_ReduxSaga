import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../interfaces/IApiResponse";

// Define a type for the slice state
interface DataCardState {
  listCardValue: Comment[];
  isLoading: boolean;
  error?: Error;
}

// Define the initial state using that type
const initialState: DataCardState = {
  listCardValue: [],
  isLoading: false,
};
//cambiare nome CommentsSlice
export const commentSlice = createSlice({
  name: "dataCards",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //conviene fare cosi per la gestione di loading?
    //update
    setStartLoading: (state) => {
      state.isLoading = true;
    },
    updateDataContentCard: (state, { payload }: PayloadAction<Comment[]>) => {
      state.listCardValue = [...state.listCardValue, ...payload];
      state.isLoading = false;
    },
    setCommentsFailure: (state, { payload }: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { updateDataContentCard, setStartLoading, setCommentsFailure } =
  commentSlice.actions;

export default commentSlice.reducer;
