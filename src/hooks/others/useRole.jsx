import React, { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import useAxiosPublic from "../axios/useAxiosPublic";

const useRole = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/user/${user.email}`).then((res) => {
        setRole(res.data.role);
      });
    }
  }, [user, user?.email]);

  return { role };
};

export default useRole;
