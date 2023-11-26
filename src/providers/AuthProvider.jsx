import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth, { googleProvider } from "../firebase/firebase.config";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import BASE_URL from "../utils/api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [shopId, setShopId] = useState("");
  const [loading, setLoading] = useState(true);

  useState(() => {
    // console.log(user, shopId);
    if (user.email) {
      axios.get(BASE_URL + `/shopID?email=${user.email}`).then((res) => {
        console.log(res.data);
        setShopId(res.data.shopID);
      });
    }
  }, [user?.email]);

  useEffect(() => {
    if (user?.email) {
      axios.get(BASE_URL + `/shopID?email=${user.email}`).then((res) => {
        // console.log(res.data);
        setShopId(res.data.shopID);
      });
    }
  }, []);

  const signUpMethod = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInMethod = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutMethod = () => {
    setLoading(true);

    return signOut(auth);
  };

  const googleSignInMethod = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);

      if (curUser) {
        const userEmail = curUser?.email;

        const loggedUser = { email: userEmail };

        // axios.post(BASE_URL + "/jwt", loggedUser).then((res) => {
        //   if (res?.data?.token) {
        //     console.log("token response", res.data.token);
        //     localStorage.setItem("token", res.data.token);
        //     setLoading(false);
        //   }
        // });
      } else {
        // axios
        //   .post(BASE_URL + "/logout", loggedUser, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //   });
        localStorage.removeItem("token");
        setLoading(false);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    shopId,
    loading,
    signUpMethod,
    signInMethod,
    googleSignInMethod,
    signOutMethod,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
