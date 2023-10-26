import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavLayout from "@/components/NavLayout";
import { AuthContextProvider } from "./context/AuthContext";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/store";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`);

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <AuthContextProvider>
          <Elements stripe={stripePromise}>
            <NavLayout>
              <Component {...pageProps} />
            </NavLayout>
          </Elements>
        </AuthContextProvider>
      </Provider>
    </>
  );
}
