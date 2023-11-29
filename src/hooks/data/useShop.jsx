import axios from "axios";
import { useState } from "react";
import useAuth from "../auth/useAuth";
import BASE_URL from "../../utils/api";
import useGetSecure from "../apiSecure/useGetSecure";

const useShop = () => {
  const { user } = useAuth();
  // const [shopId, setShopId] = useState("");
  // const [loading, setLoading] = useState(true);

  const { data: shop, isLoading: loading } = useGetSecure(
    ["SHopID", user?.email],
    `/shopID?email=${user.email}`
  );

  // useState(() => {
  //   // console.log(user, shopId);
  //   setLoading(true);
  //   if (user?.email) {
  //     axios.get(BASE_URL + `/shopID?email=${user.email}`).then((res) => {
  //       // console.log(res.data);
  //       setShopId(res.data.shopID);
  //       setLoading(false);
  //     });
  //   }
  // }, [user, BASE_URL]);

  console.log(shop.shopId);
  return { shopID: shop.shopID, loading };
};

export default useShop;
