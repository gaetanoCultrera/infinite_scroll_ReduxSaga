import { render } from "@testing-library/react";
import { IPropsRenderOption } from "../../interfaces/IPropsRenderOption";
import { RenderOption } from "..";

const renderComponent = ({
  isFetching,
  isLoading,
  error,
}: IPropsRenderOption) =>
  render(
    <RenderOption isFetching={isFetching} isLoading={isLoading} error={error} />
  );

describe("RenderOption", () => {
  const { isLoading, isFetching } = {
    isLoading: true,
    isFetching: false,
  };
  test("should render loading message when isLoading is true", () => {
    const { getByText } = renderComponent({ isLoading, isFetching });
    expect(getByText(/Loading/)).toBeDefined();
  });
  test("should render fetching message when isFetching is true", () => {
    const { isLoading, isFetching } = {
      isLoading: false,
      isFetching: true,
    };
    const { getByText } = renderComponent({ isLoading, isFetching });
    expect(getByText(/Fetching/)).toBeDefined();
  });
  test("should render error message when error exist", () => {
    const { isLoading, isFetching, error }: IPropsRenderOption = {
      isLoading: false,
      isFetching: false,
      error: { name: "mockName", message: "mockMessage" },
    };
    const { getByText } = renderComponent({ isFetching, isLoading, error });
    expect(getByText(`X: ${error.message}`)).toBeDefined();
  });
});
