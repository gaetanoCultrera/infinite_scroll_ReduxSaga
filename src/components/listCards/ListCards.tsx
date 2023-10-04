import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { RenderResponse } from "./utils/renderResponse/RenderResponse";
import { useHandleRenderListComments } from "./utils/hooks/useHandleRenderListComments";

export const ListCards: FC = () => {
  const { listCardValue, isLoading } = useSelector(
    ({ dataCards }: RootState) => dataCards
  );
  useHandleRenderListComments(listCardValue.length, isLoading);

  return <RenderResponse listCardValue={listCardValue} />;
};
