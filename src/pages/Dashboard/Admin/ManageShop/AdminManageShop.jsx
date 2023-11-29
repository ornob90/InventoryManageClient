import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import { MdDelete } from "react-icons/md";
import Button from "../../../../components/html/Button";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import MailModal from "../../../../components/shared/MailModal";

const AdminManageShop = () => {
  const { data: shops } = useGetSecure(["AllShops"], `/shops`);

  return (
    <ShortContainer className="min-h-[500px]">
      <h1 className="mt-10 text-lg font-bold md:text-2xl">All Shops</h1>

      <div className="mt-10 overflow-x-auto">
        <table className="table text-[12px] md:text-sm">
          {/* head */}
          <thead className="font-bold text-black">
            <tr>
              <th className="">Name</th>
              <th>Logo</th>
              <th>Product Limit</th>
              <th>Description</th>
              <th>Notice</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {shops?.map((shop) => (
              <tr key={shop?._id}>
                <td>{shop?.shopName}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-lg mask">
                      <img
                        src={shop?.shopLogo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>

                <td>{shop?.productLimit}</td>
                <td>{shop?.shopDescription}</td>
                <td className="flex items-center h-full gap-2 pt-5 text-3xl">
                  <Button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="text-[12px] py-0 px-3 bg-red-600"
                  >
                    Send
                  </Button>
                  <MailModal email={shop?.shopOwnerEmail} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ShortContainer>
  );
};

export default AdminManageShop;
