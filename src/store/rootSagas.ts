import { all } from "redux-saga/effects";
import { terminalConfigurationSagas } from "./sagas/commentsSagas";

export default function* rootSaga(): Generator {
  yield all([terminalConfigurationSagas()]);
}
