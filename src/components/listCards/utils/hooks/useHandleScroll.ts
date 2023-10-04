import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IPropsHandleScroll } from "../../../../interfaces/IPropsHandleScroll";
import { KeySagas } from "../../../../constans/KeySagas";
export const useHandleScroll = ({ isLoading, skipRef }: IPropsHandleScroll) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (scrollHeight - clientHeight <= scrollTop && !isLoading) {
      skipRef.current += 10;
      dispatch({ type: KeySagas.FETCH_COMMENTS, payload: skipRef.current });
    }
  }, [dispatch, isLoading, skipRef]);
};
