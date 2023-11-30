import React, { useEffect, useState } from "react";
import Input from "../../components/html/Input";
import Button from "../../components/html/Button";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa6";
import useAuth from "../../hooks/auth/useAuth";
import getPhotoURL from "../../utils/getPhotoUrl";
import { updateProfile } from "firebase/auth";
import usePutPublic from "../../hooks/apiPublic/usePutPublic";
import axios from "axios";
import BASE_URL from "../../utils/api";
import toast from "react-hot-toast";
import useUser from "../../hooks/others/useUser";
import Loading from "../Loading/Loading";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";

const Signup = () => {
  const { signUpMethod, loading: authLoading, user } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  // const { mutateAsync: addUser } = usePutPublic(null, "/user");
  const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   if (user?.email && !authLoading) {
  //     axiosSecure
  //       .put("/user", { email: user?.email, name: user?.displayName })
  //       .then((res) => {
  //         console.log(res.data);

  //         navigate("/create-shop");

  //         setLoading(false);
  //         toast.success("You have successfully signed up!");
  //       });
  //   }
  // }, [user, user?.email, authLoading]);

  const { mutateAsync: addUser } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.put("/user", data);
      return res?.data;
    },
    retry: 4,
  });

  useEffect(() => {
    if (user?.email) {
      addUser({ email: user?.email, name: user?.displayName })
        .then((res) => {
          console.log(res.data);
          navigate("/create-shop");
          setLoading(false);
          toast.success("You have successfully signed up!");
        })
        .catch((err) => {
          setLoading(false);
          navigate("/create-shop");
          console.error(err);
          setErrorMsg(err.message);
        });
    }
  }, [user, user?.email]);

  // const { setUser } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.files[0];

    const formData = new FormData();

    formData.append("image", photo);

    const url = await getPhotoURL(formData);
    // const url = "234241243134";
    console.log(url);

    // console.log(url);

    if (password.length < 6) {
      setErrorMsg("Password Length Must Be More Then 6 Characters!!");
      return;
    }

    if (/^[^A-Z]*$/.test(password)) {
      setErrorMsg("Password must contain atleast one capital letter");
      return;
    }

    if (/^[a-zA-Z0-9\s]*$/.test(password)) {
      setErrorMsg("Password must contain a special character");
      return;
    }
    setLoading(true);

    e.target.email.value = "";
    e.target.password.value = "";
    e.target.name.value = "";
    e.target.photo.value = "";

    signUpMethod(email, password)
      .then((res) => {
        setErrorMsg("");
        updateProfile(res.user, {
          displayName: name,
          photoURL: url,
        });

        addUser({ email, name })
          .then((res) => {
            console.log(res.data);
            navigate("/create-shop");
            setLoading(false);
            toast.success("You have successfully signed up!");
          })
          .catch((err) => {
            setLoading(false);
            // navigate("/create-shop");
            console.error(err);
            setErrorMsg(err.message);
          });

        // axios.put(BASE_URL + "/user", { email, name }).then((res) => {
        //   console.log(res.data);

        //   navigate("/create-shop");

        //   setLoading(false);
        //   toast.success("You have successfully signed up!");
        // });
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
        <h1 className="text-2xl font-clashBold md:text-3xl">Join us today!</h1>
        <form
          onSubmit={handleRegister}
          className="flex flex-col w-full gap-2 mt-6 "
        >
          <Input
            name="name"
            placeholder="User name"
            className="py-2 text-sm md:text-base"
          />
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
          {/* <input type="file" className="text-[12px] p-0 border-none" /> */}
          <label
            htmlFor="fileInput"
            className="flex items-center gap-2 px-4 py-2 text-[12px] md:text-sm font-semibold text-black bg-white border border-gray-300 rounded-full w-max"
          >
            <FaUpload /> Upload Photo
          </label>
          <input
            id="fileInput"
            type="file"
            className=""
            name="photo"
            // onChange={handleFileChange}
          />
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
          <Button className="py-2 mt-3 text-sm text-white md:text-base">
            Join
          </Button>
        </form>
        <div className="mt-4 divider">or</div>
        <p className="text-[12px] md:text-sm mb-8">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-bold underline duration-300 cursor-pointer active:scale-90"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
