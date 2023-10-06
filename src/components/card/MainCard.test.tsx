import { render } from "@testing-library/react";
import { CustomContentCard } from "../../interfaces/IApiResponse";
import { MainCard } from "..";

const mockValue: CustomContentCard = {
  postId: 1,
  content: "contentMock",
  username: "usernameMock",
};

const renderCard = ({ content, postId, username }: CustomContentCard) =>
  render(<MainCard content={content} postId={postId} username={username} />);

describe("MainCard", () => {
  test("should renders correctly with provided props", () => {
    const { getByText } = renderCard(mockValue);
    expect(getByText("contentMock")).toBeDefined();
  });
});
