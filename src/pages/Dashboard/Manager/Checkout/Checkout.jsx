// Checkout.jsx
import React, { useRef } from "react";
// import { BlobProvider, PDFViewer } from "@react-pdf-viewer/react-pdf";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import { MdOutlinePaid } from "react-icons/md";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import CheckoutTable from "./CheckoutTable";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import usePostSecure from "../../../../hooks/apiSecure/usePostSecure";
import CheckoutPDFDocument from "./CheckoutPDFDocument";

const Checkout = () => {
  const { data: cartProducts, isLoading } = useGetSecure(["Cart"], "/cart");
  const { mutateAsync: addToSales } = usePostSecure([["Cart"]], "/sales");
  const pdfViewerRef = useRef();

  const handleGetPaid = async () => {
    const response = await addToSales(cartProducts || []);
    console.log(response);
  };

  return (
    <ShortContainer className="mt-10">
      <div className="flex items-center justify-between pb-3 border-b-2">
        <h1 className="text-xl font-semibold">
          Products: <span className="text-2xl font-bold text-primary">5</span>
        </h1>
        <Button
          onClick={() => pdfViewerRef.current.print()}
          className="flex items-center gap-2 px-4 py-2 bg-primary"
        >
          Get Paid <MdOutlinePaid className="text-xl" />
        </Button>
      </div>

      <BlobProvider
        document={<CheckoutPDFDocument cartProducts={cartProducts} />}
        fileName="checkout.pdf"
      >
        {({ blob, url, loading, error }) => (
          <div style={{ flex: 1, minHeight: "500px" }}>
            {loading && "Generating PDF..."}
            {error && "Error generating PDF"}
            {!loading && !error && (
              <PDFViewer width="100%" height="100%">
                <CheckoutPDFDocument cartProducts={cartProducts} />
              </PDFViewer>
            )}
          </div>
        )}
      </BlobProvider>

      {/* Include the CheckoutTable component outside of the PDF */}
      <CheckoutTable cartProducts={cartProducts} />
    </ShortContainer>
  );
};

export default Checkout;

// import React from "react";

// import { Link, useNavigate } from "react-router-dom";
// import ShortContainer from "../../../../components/shared/ShortContainer";
// import Button from "../../../../components/html/Button";
// import { MdOutlinePaid } from "react-icons/md";
// import CheckoutTable from "./CheckoutTable";
// import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
// import usePostSecure from "../../../../hooks/apiSecure/usePostSecure";

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { data: cartProducts, isLoading } = useGetSecure(["Cart"], "/cart");

//   const { mutateAsync: addToSales } = usePostSecure([["Cart"]], `/sales`);

//   const handleGetPaid = async () => {
//     const response = await addToSales(cartProducts || []);

//     console.log(response);
//   };

//   return (
//     <ShortContainer className="mt-10">
//       <div className="flex items-center justify-between pb-3 border-b-2">
//         <h1 className="text-xl font-semibold">
//           Products: <span className="text-2xl font-bold text-primary">5</span>
//         </h1>
//         <Button
//           onClick={handleGetPaid}
//           className="flex items-center gap-2 px-4 py-2 bg-primary"
//         >
//           Get Paid <MdOutlinePaid className="text-xl" />
//         </Button>
//       </div>

//       <CheckoutTable cartProducts={cartProducts} />
//     </ShortContainer>
//   );
// };

// export default Checkout;
