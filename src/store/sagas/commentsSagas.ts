import { all, put, takeLatest } from "redux-saga/effects";
import { RootResponse } from "../../interfaces/IApiResponse";
import {
  setCommentsFailure,
  setStartLoading,
  updateDataContentCard,
} from "../slice/commentsSlice";
import get, { AxiosResponse } from "axios";
import { KeySagas } from "../../constans/KeySagas";

const fetchCommentsCall = () => ({
  key: KeySagas.FETCH_COMMENTS,
  action: (payload: number) => ({ type: KeySagas.FETCH_COMMENTS, payload }),
  worker: function* ({
    payload: skipValue,
  }: {
    type: string;
    payload: number;
  }) {
    yield put(setStartLoading());
    try {
      const {
        data: { comments },
      }: AxiosResponse<RootResponse> = yield get<RootResponse>(
        `https://dummyjson.com/comments?limit=10&skip=${skipValue}`
      );
      console.log(comments);
      yield put(updateDataContentCard(comments));
    } catch (e) {
      yield put(setCommentsFailure(e as Error));
    }
  },
});

export const sagaConfig = {
  fetchCommentsCall: fetchCommentsCall(),
};

export function* terminalConfigurationSagas(): Generator {
  yield all(
    Object.values(sagaConfig).map(({ key, worker }) => takeLatest(key, worker))
  );
}
