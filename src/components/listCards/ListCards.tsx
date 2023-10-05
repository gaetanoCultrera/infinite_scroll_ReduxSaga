import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { RenderResponse } from "./utils/renderResponse/RenderResponse";
import { useHandleRenderListComments } from "./utils/hooks/useHandleRenderListComments";

export const ListCards: FC = () => {
  const { listCardValue, isFetching } = useSelector(
    ({ dataCards }: RootState) => dataCards
  );
  useHandleRenderListComments(listCardValue.length, isFetching);

  return <RenderResponse listCardValue={listCardValue} />;
};
