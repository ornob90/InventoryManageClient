import React, { useEffect, useState } from "react";
import Input from "../../components/html/Input";
import Button from "../../components/html/Button";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import toast from "react-hot-toast";
import useUser from "../../hooks/others/useUser";
import BASE_URL from "../../utils/api";
import axios from "axios";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import Loading from "../Loading/Loading";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const { role } = useUser();
  const {
    user,
    signInMethod,
    googleSignInMethod,
    loading: authLoading,
  } = useAuth();
  const [email, setEmail] = useState("");
  const redirectPath = role === "user" ? "/create-shop" : "/dashboard";

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync: addUser } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.put("/user", data);
      return res?.data;
    },
    retry: 4,
  });

  useEffect(() => {
    setLoading(true);
    if (role && role === "user") {
      navigate("/create-shop");
    } else if (role) {
      console.log(role);
      navigate("/dashboard");
    }
    setLoading(false);
  }, [user, user?.email, role]);

  const axiosSecure = useAxiosSecure();

  const handleCheckRoleAndNavigate = async (email) => {
    const response = await axiosSecure(`/user/${email}`);
    console.log(response.data.role);
    if (response.data.role === "user") {
      navigate("/create-shop");
    } else if (response.data.role === "manager") {
      navigate("/dashboard/product-manage");
    } else {
      navigate("/dashboard/admin/sales-summary");
    }
    toast.success("You have successfully signed in!!");
    setLoading(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.email.value = "";
    e.target.password.value = "";

    signInMethod(email, password)
      .then((res) => {
        setErrorMsg("");
        // handleCheckRoleAndNavigate(res.user.email);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);

    googleSignInMethod()
      .then((res) => {
        setErrorMsg("");

        const { email, displayName } = res.user;
        // console.log(email, displayName, res.user);

        // axios
        //   .put(BASE_URL + "/user", { email, name: displayName })
        //   .then((res) => {
        //     console.log(res.data);

        //     // handleCheckRoleAndNavigate(email);

        //     // setLoading(false);

        //     if (res.data.insertOne)
        //       toast.success("You have successfully signed in!!");
        //     else toast.success("User Exist!!");
        //   });

        addUser({ email, name: displayName })
          .then((res) => {
            console.log(res.data);
            navigate("/create-shop");
            setLoading(false);
            toast.success("You have successfully Logged in!");
          })
          .catch((err) => {
            setLoading(false);
            navigate("/create-shop");
            console.error(err);
            setErrorMsg(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="h-screen min-h-[500px] w-[95%] md:w-[70%] lg:w-[60%] mx-auto flex  justify-center items-center">
      <div className="w-[80%] lg:w-[70%] mx-auto my-[2.5%]  flex flex-col justify-center items-center h-auto">
        <h1 className="text-2xl font-clashBold md:text-3xl">Welcome back!</h1>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col w-full gap-2 mt-6 "
        >
          <Input
            name="email"
            placeholder="Email"
            className="py-2 text-sm md:text-base"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            className="py-2 text-sm md:text-base"
          />
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
          <Button className="py-2 mt-3 text-sm text-white md:text-base">
            Connect
          </Button>
        </form>
        <div className="mt-4 divider">or</div>
        <p className="text-[12px] md:text-sm mb-8">
          Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className="font-bold underline duration-300 cursor-pointer active:scale-90"
          >
            Sign Up
          </span>
        </p>
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full gap-2 py-2 text-sm duration-300 border cursor-pointer active:scale-95 md:text-base"
        >
          <FcGoogle />
          <p>Continue Wih Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
