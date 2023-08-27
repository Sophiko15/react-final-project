import { useState } from "react";
import { axiosInstance } from "../helpers";

export const useProduct = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const getData = async (url) => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const { data } = await axiosInstance.get(url);
      setState((prev) => ({ ...prev, loading: false, data }));
    } catch (error) { 
      setState((prev) => ({ ...prev, loading: false, error }));
    }
  };

  return {
    getData,
    setState,
    ...state,
  };
};