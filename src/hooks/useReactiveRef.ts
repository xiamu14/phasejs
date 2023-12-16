import { useEffect, useMemo, useRef } from "react";

const useReactiveRef = <T>(value: T) => {
  const ref = useRef(value);

  const valueRef = useMemo(() => {
    return ref.current;
  }, []);

  useEffect(() => {
    if (ref.current !== value) {
      ref.current = value;
    }
  }, [value]);

  return valueRef;
};

export default useReactiveRef;
