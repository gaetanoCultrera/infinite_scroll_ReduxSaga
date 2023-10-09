const axiosGetMock = jest.fn();
jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  get: () => axiosGetMock,
}));
