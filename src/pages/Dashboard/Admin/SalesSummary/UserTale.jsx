import React from "react";
import Button from "../../../../components/html/Button";

const UserTale = () => {
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
          <tr>
            <td>Zemlak, Daniel and Leannon</td>
            <td>admin@gmail.com</td>

            <td>Dhaka</td>
            <td>3</td>
            <td className="flex items-center h-full gap-2 pt-5 text-3xl">
              <Button className="text-[12px] py-0 px-3 bg-red-600">Send</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTale;
