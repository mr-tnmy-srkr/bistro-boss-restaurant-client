// !Ref : https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js
// !using hook

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);
  useEffect(() => {
    // from : https://stripe.com/docs/payments/quickstart?client=react&lang=node
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // ..................................................................
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //confirm a payment
    // !https://stripe.com/docs/js/payment_intents/payment_method --> JS(ESNEXT)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous", 
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError.message);
    } else {
      console.log("payment intent", paymentIntent);
      setTransactionId(paymentIntent.id)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        />
        <button
          type="submit"
          className="btn btn-sm btn-primary my-4"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {
          transactionId && <p className="text-green-600">Your txn id : {transactionId}</p>
        }
      </form>
    </div>
  );
};

export default CheckoutForm;
