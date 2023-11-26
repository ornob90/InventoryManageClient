import React, { useState } from "react";
import Input from "../../components/html/Input";
import Button from "../../components/html/Button";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa6";
import useAuth from "../../hooks/auth/useAuth";
import getPhotoURL from "../../utils/getPhotoUrl";

const Signup = () => {
  const { signUpMethod } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
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

    console.log(url);

    // if (password.length < 6) {
    //   setErrorMsg("Password Length Must Be More Then 6 Characters!!");
    //   return;
    // }

    // if (/^[^A-Z]*$/.test(password)) {
    //   setErrorMsg("Password must contain atleast one capital letter");
    //   return;
    // }

    // if (/^[a-zA-Z0-9\s]*$/.test(password)) {
    //   setErrorMsg("Password must contain a special character");
    //   return;
    // }
    setLoading(true);

    // e.target.email.value = "";
    // e.target.password.value = "";
    // e.target.name.value = "";
    // e.target.photo.value = "";

    // signUpMethod(email, password)
    //   .then((res) => {
    //     setErrorMsg("");
    //     updateProfile(res.user, {
    //       displayName: name,
    //       photoURL: photo,
    //     });

    //     if (state) {
    //       navigate(state);
    //     } else {
    //       navigate("/");
    //     }
    //     setLoading(false);
    //     toast.success("You have successfully signed up!");
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setErrorMsg(err.message);
    //     console.log(err);
    //   });
  };

  return (
    <div className="h-screen min-h-[500px] w-[95%] mx-auto grid  grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block  my-[2.5%] min-h-[500px] bg-signup relative">
        <p className="text-lg font-clashBold sm:text-xl absolute top-[2%] left-[5%] underline  cursor-pointer text-white">
          ShoeSphere
        </p>

        <div className="absolute w-full bottom-[10%] left-[5%] text-white">
          <h2 className="text-4xl">Ready to Elevate Your Style?</h2>
          <p className="text-sm text-gray-300 mt-4 w-[88%]">
            Join us for exclusive styles, insider perks, and a personalized
            fashion journey. Elevate your wardrobe.
          </p>
        </div>
      </div>
      {/* Login Part */}
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
        <div className="flex items-center justify-center w-full gap-2 py-2 text-sm duration-300 border cursor-pointer active:scale-95 md:text-base">
          <FcGoogle />
          <p>Continue Wih Google</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
