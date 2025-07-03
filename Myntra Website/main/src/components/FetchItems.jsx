import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.useFetchStatusSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchStatusActions.markFetchDone());
    if (fetchStatus.isFetchDone) return;

    const controller = new AbortController();
    const Signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:9090/items", { Signal })
      .then((res) => res.json())
      .then(({ items }) => {
        //destructuring items
        //dispatch to the itemsActions => addInitialItems reducer
        dispatch(itemsActions.addInitialItems(items));

        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
