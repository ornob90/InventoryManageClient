import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../axios/useAxiosSecure";

const useGetSecure = (queryKeys, endpoint) => {
  const axiosSecure = useAxiosSecure();

  const response = useQuery({
    queryFn: queryKeys,
    queryFn: async () => {
      const res = await axiosSecure.get(endpoint);
      return res?.data;
    },
  });

  return response;
};

export default useGetSecure;
