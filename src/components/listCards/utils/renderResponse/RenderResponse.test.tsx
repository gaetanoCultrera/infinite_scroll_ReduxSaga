import { render } from "@testing-library/react";
import { RenderResponse } from "./RenderResponse";
import { Comment } from "../../../../interfaces/IApiResponse";

const mockComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    body: "mockBody",
    user: { id: 1, username: "mockUser" },
  },
];

const renderComponent = (mockList: Comment[]) =>
  render(<RenderResponse listCardValue={mockList} />);

describe("RenderResponse", () => {
  beforeAll(() => {
    jest.mock("../../../card/MainCard.tsx", () => (
      <div>{mockComments[0].body}</div>
    ));
  });

  test("Should render card with correct props", () => {
    const { getByText } = renderComponent(mockComments);
    expect(getByText(/mockBody/)).toBeDefined();
  });
});
