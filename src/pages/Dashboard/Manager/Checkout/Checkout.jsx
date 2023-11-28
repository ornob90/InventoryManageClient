import React, { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import { MdOutlinePaid } from "react-icons/md";
import CheckoutTable from "./CheckoutTable";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import usePostSecure from "../../../../hooks/apiSecure/usePostSecure";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import CheckoutPDFDocument from "./CheckoutPDFDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
// import PDFJS from "pdfjs-dist/es5/build/pdf";
import { usePDF } from "react-to-pdf";

const Checkout = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  // const { data: cartProducts, isLoading } = useGetSecure(["Cart"], "/cart");
  const { toPDF, targetRef } = usePDF();
  const axiosSecure = useAxiosSecure();

  useState(() => {
    axiosSecure.get("/cart").then((res) => setCartProducts(res.data));
  }, []);

  // const { mutateAsync: addToSales } = usePostSecure([["Cart"]], `/sales`);

  const contentRef = useRef();

  const queryClient = new QueryClient();

  // const generatePDF = () => {
  //   const pdf = new jsPDF();

  //   const content = contentRef.current;

  //   pdf.html(content);

  //   pdf.save("checkout.pdf", () => {}, 15);
  // };

  // const generatePDF = async () => {
  //   const content = contentRef.current;
  //   // console.log(content);
  //   const html2pdfOptions = {
  //     filename: "checkout.pdf",
  //     x: 15,
  //     y: 15,
  //   };

  //   const pdf = await html2pdf().from(content).set(html2pdfOptions).toPdf();
  //   if (pdf?.error) {
  //     console.error("Error generating PDF:", pdf.error);
  //   } else {
  //     console.log("PDF generated successfully!");
  //     const blob = new Blob([pdf], { type: "application/pdf" });
  //     const downloadLink = document.createElement("a");
  //     downloadLink.href = URL.createObjectURL(blob);
  //     downloadLink.download = "checkout.pdf";
  //     downloadLink.click();
  //   }
  // };

  // const generatePDF = () => {
  //   const pdf = new jsPDF();
  //   const contentElement = contentRef.current;
  //   const html = contentElement.innerHTML;
  //   pdf.html(html, (doc) => {
  //     doc.save();
  //   });

  //   pdf.html(html, {
  //     callback: function (doc) {
  //       doc.save("product.pdf");
  //     },
  //   });
  //   // pdf.save("products.pdf");
  // };

  const generatePDF = () => {
    const capture = document.querySelector("#checkout");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

      doc.save("checkout.pdf");
    });
  };

  const handleGetPaid = async () => {
    try {
      // const response = await addToSales(cartProducts || []);

      // console.log(response);
      // generatePDF();
      console.log("toPDF()");
      toPDF();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ShortContainer className="mt-10">
      <div ref={targetRef} id="checkout">
        <div className="flex items-center justify-between pb-3 border-b-2">
          <h1 className="text-xl font-semibold">
            Products: <span className="text-2xl font-bold text-primary">5</span>
          </h1>
          <button
            onClick={handleGetPaid}
            className="flex items-center gap-2 px-4 py-2 bg-primary"
          >
            Get Paid <MdOutlinePaid className="text-xl" />
          </button>
        </div>
        <CheckoutTable cartProducts={cartProducts} />
      </div>
      {/* <CheckoutPDFDocument cartProducts={cartProducts} /> */}
      {/* <PDFDownloadLink
        document={<CheckoutPDFDocument cartProducts={cartProducts} />}
      >
        {({ loading }) => (loading ? "Loading document..." : "Download")}
        Download
      </PDFDownloadLink> */}
    </ShortContainer>
  );
};

export default Checkout;
