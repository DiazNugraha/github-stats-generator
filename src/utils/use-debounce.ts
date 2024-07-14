import { useState, useEffect } from "react";

export function useDebounce<T>(
  value: T,
  milliSeconds: number,
  callback: () => void
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      callback();
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, milliSeconds]);

  return debouncedValue;
}
