import React, { useEffect, useState } from "react";
import Button from "../../../../components/html/Button";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";

import { data } from "autoprefixer";
import Pagination from "../../../../components/shared/Pagination";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import emailjs from "@emailjs/browser";
import Input from "../../../../components/html/Input";
import toast from "react-hot-toast";

const UserTale = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [users, setUsers] = useState([]);

  const { data: count } = useGetSecure(["UserCount"], `/user-count`);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/users?page=${page}&size=${size}`)
      .then((res) => setUsers(res?.data));
  }, [page, size]);

  // const { data: users } = useGetSecure(
  //   ["AllUsers"],
  //   `/users?page=${page}&size=${size}`
  // );
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (count?.userCount) setPageCount(Math.ceil(count?.userCount / size));
    // console.log(count);
    // console.log(data?.length);
  }, [count, size]);

  const handleSendEmail = (email) => {
    const templateParams = {
      to_email: email,
      // Add other template parameters as needed
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then((result) => {
        toast.success("Email sent successfully!!");
        console.log(result.text);
        // Optionally, you can update your state or perform other actions after sending the email
      })
      .catch((error) => {
        toast.error("Can not send email");
        console.error(error.text);
      });
  };

  return (
    <div className="mt-10 overflow-x-auto min-h-[300px]">
      <table className="table text-[12px] md:text-sm">
        {/* head */}
        <thead className="font-bold text-black">
          <tr>
            <th className="">User Name</th>
            <th>User Email</th>
            <th>Shop Name</th>
            <th>Role</th>
            <th>Send Email</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users?.map((user) => (
            <tr key={user?._id}>
              <td>{user?.name}</td>
              <td>{user?.email}</td>

              <td>{user?.shopName || "NA"}</td>
              <td>{user?.role}</td>
              <td className="flex items-center h-full gap-2 pt-5 text-3xl">
                {!user?.shopName && user?.role !== "admin" && (
                  <Button
                    onClick={() => handleSendEmail(user?.email)}
                    className="text-[12px] py-0 px-3 bg-red-600"
                  >
                    Send
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        setPage={setPage}
        pageCount={pageCount}
        page={page}
        setSize={setSize}
        size={size}
      />
    </div>
  );
};

export default UserTale;
