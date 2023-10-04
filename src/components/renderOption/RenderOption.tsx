import { FC, memo } from "react";
import { IPropsRenderOption } from "../../interfaces/IPropsRenderOption";

export const RenderOption: FC<IPropsRenderOption> = memo(
  ({ isLoading, error, isFetching }) => {
    if (isFetching || error || isLoading) {
      if (isLoading) return <h1 style={{ color: "red" }}>Loading</h1>;
      return (
        <h1 style={{ color: "red" }}>
          {error ? `X: ${error?.message}` : "Fetching"}
        </h1>
      );
    }
  }
);
