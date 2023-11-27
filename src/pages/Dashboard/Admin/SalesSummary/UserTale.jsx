import React, { useEffect, useState } from "react";
import Button from "../../../../components/html/Button";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";

import { data } from "autoprefixer";
import Pagination from "../../../../components/shared/Pagination";

const UserTale = () => {
  const { data: users } = useGetSecure(["AllUsers"], "/users");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setPageCount(Math.ceil(users?.length / size));

    console.log(data?.length);
  }, [users, size]);

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
                <Button className="text-[12px] py-0 px-3 bg-red-600">
                  Send
                </Button>
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
      />
    </div>
  );
};

export default UserTale;
