import React, { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import useAxiosPublic from "../axios/useAxiosPublic";

const useUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [curUser, setCurUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosPublic
        .get(`/user/${user.email}`)
        .then((res) => {
          setCurUser(res.data);
          setLoading(false);
        })
        .catch((err) => setLoading(false))
        .finally(() => setLoading(false));
    }
  }, [user, user?.email]);

  return { ...curUser, loading };
};

export default useUser;
