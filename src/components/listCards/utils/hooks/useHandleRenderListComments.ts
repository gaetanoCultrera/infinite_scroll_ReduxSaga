import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHandleScroll } from "./useHandleScroll";
import { KeySagas } from "../../../../constans/KeySagas";
import { Event } from "../../../../constans/Event";

export const useHandleRenderListComments = (
  lenghtListCardValue: number,
  isLoading: boolean
) => {
  const skipRef = useRef(0);
  const dispatch = useDispatch();
  const handleScroll = useHandleScroll({ isLoading, skipRef });

  useEffect(() => {
    if (!lenghtListCardValue) {
      dispatch({ type: KeySagas.FETCH_COMMENTS, payload: skipRef.current });
    }
  }, [dispatch, lenghtListCardValue, skipRef]);

  useEffect(() => {
    const { addEventListener, removeEventListener } = window;
    addEventListener(Event.SCROLL, handleScroll);
    return () => removeEventListener(Event.SCROLL, handleScroll);
  }, [handleScroll]);
};
