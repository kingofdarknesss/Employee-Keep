import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllUser } from "../utils/userSlice";
export const useFetchUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5000/api/v1/");
    const data = await response.json();
    dispatch(addAllUser(data.data));
  };

  return { fetchUser };
};
