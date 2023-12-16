import isEqual from "lodash/isEqual";
import { useEffect, useRef } from "react";
function useChange<T>(action: (prop: T) => void, prop: T) {
  const prev = useRef<T | undefined>();

  useEffect(() => {
    if (!isEqual(prev.current, prop)) {
      prev.current = prop;
      action(prop);
    }
  }, [action, prop]);
}

export default useChange;
