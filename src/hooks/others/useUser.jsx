import React, { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import useAxiosPublic from "../axios/useAxiosPublic";

const useUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [curUser, setCurUser] = useState("");

  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/user/${user.email}`).then((res) => {
        setCurUser(res.data);
      });
    }
  }, [user, user?.email]);

  return curUser;
};

export default useUser;
