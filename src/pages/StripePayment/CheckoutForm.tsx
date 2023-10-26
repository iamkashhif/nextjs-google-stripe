import { Typography } from "@mui/material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const generateStripeToken = async () => {
    if (!elements || !stripe) {
      return;
    }
    const cardNumberElement = elements.getElement(CardNumberElement);

    const { token, error } = await stripe.createToken(
      cardNumberElement as any,
      {
        name: name,
        address_zip: postalCode,
      }
    );

    if (error || !token) {
      console.log("error here");
      throw error;
    }
    console.log("token: ", token);
    return token;
  };

  const submit = async (e: any) => {
    e.preventDefault();

    const token = await generateStripeToken();
    if (token) {
      alert(token.id);
    }
  };

  return (
    <div>
      <div className="relative px-4 pb-8 max-w-2xl mx-auto rounded-lg">
        <span className="text-xl font-black gradientText">
          Payment Card Info
        </span>

        <div className="bg-white px-8 py-6 rounded-lg shadow-xl text-black mt-3">
          <form onSubmit={submit}>
            <div className="space-y-4">
              {/* Card Number */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="card-nr"
                >
                  Card Number <span className="text-red-500">*</span>
                </label>
                <CardNumberElement
                  options={{ showIcon: true }}
                  id="card-nr"
                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                />
              </div>
              {/* Expiry and CVC */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-expiry"
                  >
                    Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <CardExpiryElement
                    id="card-expiry"
                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-cvc"
                  >
                    CVC <span className="text-red-500">*</span>
                  </label>
                  <CardCvcElement
                    id="card-cvc"
                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  />
                </div>
              </div>

              {/* Name on Card */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="card-name"
                >
                  Card Holder Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="card-name"
                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Postal Code */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="card-email"
                >
                  Postal <span className="text-red-500">*</span>
                </label>
                <input
                  id="card-email"
                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  type="text"
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Postal Code"
                />
              </div>
            </div>

            {/* Form footer */}
            <div className="mt-6">
              <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                Save Payment Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
