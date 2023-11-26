import axios from "axios";
import { useState } from "react";
import useAuth from "../auth/useAuth";
import BASE_URL from "../../utils/api";

const useShop = () => {
  const { user } = useAuth();
  const [shopId, setShopId] = useState("");
  const [loading, setLoading] = useState(true);

  useState(() => {
    // console.log(user, shopId);
    setLoading(true);
    if (user?.email) {
      axios.get(BASE_URL + `/shopID?email=${user.email}`).then((res) => {
        console.log(res.data);
        setShopId(res.data.shopID);
        setLoading(false);
      });
    }
  }, [user, BASE_URL]);

  return { shopId, loading };
};

export default useShop;
