import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import Button from "../../../../components/html/Button";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import usePostSecure from "../../../../hooks/apiSecure/usePostSecure";
import useShop from "../../../../hooks/data/useShop";

const PaymentForm = ({ selectedPlan, setModalOpen }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const { shopId, loading } = useShop();
  const { mutateAsync: makePayment } = usePostSecure(null, `/make-payment`);

  const price = selectedPlan;
  const axiosSecure = useAxiosSecure();

  const handlePayment = async () => {
    try {
      const response = await makePayment({
        price,
        shopId,
      });
      console.log(response);
      if (
        response.acknowledged &&
        response.updateStatus &&
        response.modifiedCount > 0
      ) {
        toast.success("Payment successful!!");
        setModalOpen(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price,
      })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // toast.error("Errro!!");
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error: ", error);
      setError(error.message);
    } else {
      // console.log(paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: "oornob@orno.com",
            name: "user name",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError.message);
    } else {
      if ((paymentIntent.status = "succeeded")) {
        console.log("Transection id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        handlePayment();
      }
    }
  };

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit}
      className={`  p-5  flex  justify-center items-center flex-col gap-4 w`}
    >
      <div className="w-full">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          className="px-2 py-5 border"
        ></CardElement>
      </div>
      <Button
        className="w-full py-2 mt-2 text-white"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </Button>

      {transactionId && (
        <p className="text-green-600">
          Your transaction id is : {transactionId}
        </p>
      )}
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default PaymentForm;
