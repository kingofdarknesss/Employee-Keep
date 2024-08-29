import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllUser } from "../utils/userSlice";
export const useFetchUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + "api/v1/");
    const data = await response.json();
    dispatch(addAllUser(data.data));
  };

  return { fetchUser };
};
