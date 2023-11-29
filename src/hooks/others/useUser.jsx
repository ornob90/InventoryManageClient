import React, { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";

import useAxiosSecure from "../axios/useAxiosSecure";
import useGetSecure from "../apiSecure/useGetSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const [curUser, setCurUser] = useState("");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   console.log(authLoading, user?.email);
  //   if (user?.email && !authLoading) {
  //     axiosSecure
  //       .get(`/user/${user.email}`)
  //       .then((res) => {
  //         setCurUser(res.data);
  //         setLoading(false);
  //       })
  //       .catch((err) => setLoading(false))
  //       .finally(() => setLoading(false));
  //   }
  // }, [user, user?.email, authLoading]);

  // const {} = useGetSecure(["User", user?.email], `/user/${user?.email}`)

  const { data: curUser, isLoading: loading } = useQuery({
    queryKey: ["User", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res?.data;
    },
  });

  return { ...curUser, loading };
};

export default useUser;
