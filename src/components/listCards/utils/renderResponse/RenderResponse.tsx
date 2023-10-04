import { FC, memo } from "react";
import { IPropsRenderResponse } from "../../../../interfaces/IPropsHandleResponse";
import { MainCard } from "../../..";

export const RenderResponse: FC<IPropsRenderResponse> = memo(
  ({ listCardValue }) =>
    listCardValue.map(({ id, postId, body, user: { username } }) => (
      <MainCard key={id} postId={postId} username={username} content={body} />
    ))
);
