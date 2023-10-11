import SagaTester from "redux-saga-tester";
import { terminalConfigurationSagas, sagaConfig } from "../commentsSagas";
import { cloneableGenerator } from "@redux-saga/testing-utils";
const mockGetAxios = jest.fn();
jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  get: () => mockGetAxios,
}));

describe("commentsSaga", () => {
  test("should fetch comments", async () => {
    const sagaTester = new SagaTester();
    const genTerminalConfigurationSagas = cloneableGenerator(
      terminalConfigurationSagas
    )();
    expect(genTerminalConfigurationSagas.next().value).toBeDefined();
  });
});
