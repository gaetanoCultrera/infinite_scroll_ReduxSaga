import { all, put, takeLatest } from "redux-saga/effects";
import { RootResponse } from "../../interfaces/IApiResponse";
import {
  setCommentsFailure,
  setStartLoading,
  updateDataContentCard,
} from "../slice/commentsSlice";
import axios, { AxiosResponse } from "axios";
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
    try {
      yield put(setStartLoading());
      const {
        data: { comments },
      }: AxiosResponse<RootResponse> = yield axios.get<RootResponse>(
        `https://dummyjson.com/comments?limit=10&skip=${skipValue}`
      );
      console.log(comments);
      yield put(updateDataContentCard(comments));
    } catch (e) {
      yield put(setCommentsFailure(e as Error));
    }
  },
});

const sagaConfig = {
  fetchCommentsCall: fetchCommentsCall(),
};

export function* terminalConfigurationSagas(): Generator {
  yield all(
    Object.values(sagaConfig).map(({ key, worker }) => takeLatest(key, worker))
  );
}
