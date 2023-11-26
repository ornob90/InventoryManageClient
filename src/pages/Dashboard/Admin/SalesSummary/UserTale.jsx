import React from "react";
import Button from "../../../../components/html/Button";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";

const UserTale = () => {
  const { data: users } = useGetSecure(["AllUsers"], "/users");

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
    </div>
  );
};

export default UserTale;
