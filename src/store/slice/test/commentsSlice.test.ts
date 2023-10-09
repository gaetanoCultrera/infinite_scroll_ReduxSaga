import reducer, {
  updateDataContentCard,
  setStartLoading,
  setCommentsFailure,
  DataCardState,
} from "../commentsSlice";

import { Comment } from "../../../interfaces/IApiResponse";

const initialState: DataCardState = {
  listCardValue: [],
  isLoading: false,
  isFetching: false,
};

const payloadArray: Comment[] = [
  {
    id: 2,
    postId: 2,
    body: "mockBody",
    user: { id: 1, username: "mockUser" },
  },
];

describe("commentsSlice", () => {
  test("should set setStartLoading", () => {
    const { isLoading } = reducer(initialState, setStartLoading());
    expect(isLoading).toBe(true);
  });
  test("should set updateDataContentCard", () => {
    const { isFetching, isLoading, listCardValue } = reducer(
      { ...initialState, isLoading: true, isFetching: true },
      updateDataContentCard(payloadArray)
    );
    expect(isFetching).toBe(false);
    expect(isLoading).toBe(false);
    expect(listCardValue).toEqual([
      ...initialState.listCardValue,
      ...payloadArray,
    ]);
  });
  test("should set setCommentsFailure", () => {
    const mockError = new Error("mock Error");
    const { error } = reducer(initialState, setCommentsFailure(mockError));
    expect(error).toEqual(mockError);
  });
});
