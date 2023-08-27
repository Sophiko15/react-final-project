import  { useEffect, useState } from "react";

export const useDebounce = ( delay = 500, value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [value]);

  return  debouncedValue;
  
};