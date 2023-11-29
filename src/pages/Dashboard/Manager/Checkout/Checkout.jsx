import React, { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import { MdOutlinePaid } from "react-icons/md";
import CheckoutTable from "./CheckoutTable";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import usePostSecure from "../../../../hooks/apiSecure/usePostSecure";
// import jsPDF from "jspdf";
// import html2pdf from "html2pdf.js";
// import html2canvas from "html2canvas";
// import CheckoutPDFDocument from "./CheckoutPDFDocument";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
// import PDFJS from "pdfjs-dist/es5/build/pdf";
// import { usePDF } from "react-to-pdf";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  // const [cartProducts, setCartProducts] = useState([]);
  const { data: cartProducts, isLoading } = useGetSecure(["Cart"], "/cart");
  // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  // const axiosSecure = useAxiosSecure();
  const targetRef = useRef();

  // useState(() => {
  //   axiosSecure.get("/cart").then((res) => setCartProducts(res.data));
  // }, []);

  const { mutateAsync: addToSales } = usePostSecure([["Cart"]], `/sales`);

  const contentRef = useRef();

  // const queryClient = new QueryClient();

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

  // const generatePDF = () => {
  //   const capture = document.querySelector("#checkout");
  //   html2canvas(capture).then((canvas) => {
  //     const imgData = canvas.toDataURL("img/png");
  //     const doc = new jsPDF("p", "mm", "a4");
  //     const componentWidth = doc.internal.pageSize.getWidth();
  //     const componentHeight = doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

  //     doc.save("checkout.pdf");
  //   });
  // };

  const options = {
    // default is `save`
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: "letter",
      // default is 'portrait'
      orientation: "landscape",
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };

  // const doc = new jsPDF({
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [4, 9],
  // });

  // const generatePDF = () => {
  //   html2canvas(contentRef.current).then((canvas) => {
  //     const img = canvas.toDataURL("image/png");
  //     // doc.addImage(img, "PNG", 0.1, 0.1);
  //     doc.text("hello world", 1, 1);
  //     doc.save("checkout.pdf");
  //   });
  // };

  const handleGetPaid = async () => {
    try {
      // const response = await addToSales(cartProducts || []);
      // console.log(response);
      // toast.success("paid successfully!");
      // await generatePDF();
      // console.log("toPDF()");
      // toPDF();
      generatePDF(targetRef, options);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <ShortContainer className="mt-10">
      <div id="checkout">
        <div className="flex items-center justify-between pb-3 border-b-2">
          <h1 className="text-xl font-semibold">
            Products: <span className="text-2xl font-bold text-primary">5</span>
          </h1>
          <button
            onClick={handleGetPaid}
            className="flex items-center gap-2 px-4 py-2 bg-primary"
          >
            Get Paid
            <MdOutlinePaid className="text-xl" />
          </button>
        </div>
        <div ref={targetRef}>
          <CheckoutTable cartProducts={cartProducts} />
        </div>
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
