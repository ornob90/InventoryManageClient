// CheckoutPDFDocument.jsx
import React from "react";
// import { Page, View, Document, StyleSheet } from "@react-pdf-viewer/react-pdf";
import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import CheckoutTable from "./CheckoutTable";

const CheckoutPDFDocument = ({ cartProducts }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.page}>
          <div className="flex items-center justify-between pb-3 border-b-2">
            <h1 className="text-xl font-semibold">
              Products:{" "}
              <span className="text-2xl font-bold text-primary">5</span>
            </h1>
          </div>

          {/* Include the CheckoutTable component in the PDF */}
          <CheckoutTable cartProducts={cartProducts} />
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
  },
});

export default CheckoutPDFDocument;
