import { FC, memo } from "react";
import { IPropsRenderOption } from "../../interfaces/IPropsRenderOption";

export const RenderOption: FC<IPropsRenderOption> = memo(
  ({ isLoading, error }) => {
    if (isLoading || error) {
      return (
        <h1 style={{ color: "red" }}>
          {error ? `X: ${error?.message}` : "Loading"}
        </h1>
      );
    }
  }
);
