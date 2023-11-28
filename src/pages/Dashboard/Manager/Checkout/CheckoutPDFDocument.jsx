import React from "react";

import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
import { MdOutlinePaid } from "react-icons/md";
import CheckoutTable from "./CheckoutTable";

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 500,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    borderBottom: 2,
  },
});

const CheckoutPDFDocument = ({ children, cartProducts }) => {
  return (
    <Document>
      <Page size="A4">
        <View
          style={styles.container}
          // className="flex items-center justify-between pb-3 border-b-2"
        >
          <h1
            style={styles.header}
            // className="text-xl font-semibold"
          >
            Products: <span className="text-2xl font-bold text-primary">5</span>
          </h1>
          {/* <button
            // onClick={handleGetPaid}
            className="flex items-center gap-2 px-4 py-2 bg-primary"
          >
            Get Paid <MdOutlinePaid className="text-xl" />
          </button> */}
        </View>

        {/* <CheckoutTable cartProducts={cartProducts} /> */}
      </Page>
    </Document>
  );
};

export default CheckoutPDFDocument;
