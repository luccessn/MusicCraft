/* eslint-disable prettier/prettier */
import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { useAppContext } from "../../Context/AppContextReducer";
import CheckCard from "../../Components/CheckOut/CheckCard";
import "./bt1.css";

const CheckOuts = () => {
  //   const location = useLocation();
  //   const total = location.state?.total || "0.00";
  const [promoCode, setPromoCode] = useState("");

  const isValidCode = promoCode.trim().toLowerCase() === "ms21";
  const { state } = useAppContext();
  return (
    <div className=" flex flex-row relative gap-40 justify-center  text-white py-10 ">
      <form className="flex flex-col gap-4  rounded-lg w-[500px] ">
        {/* Payment Info */}
        <div>
          <h2 className="text-2xl mb-4 text-zinc-300">Payment Information</h2>
          <div className="flex flex-col gap-4">
            <label htmlFor="text" className="text-sm text-gray-400">
              Cardholder Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
            />
          </div>
        </div>

        {/* Shipping Info */}
        <div>
          <h2 className="text-2xl mb-4 text-zinc-300">Shipping Address</h2>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="text" className="text-sm text-gray-400">
                Country/Region
              </label>
              <input
                type="text"
                placeholder="country/region"
                className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              />
            </div>
            <div>
              <label htmlFor="text" className="text-sm text-gray-400">
                State
              </label>
              <input
                type="text"
                placeholder="state"
                className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <label htmlFor="text" className="text-sm text-gray-400">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
                />
              </div>
              <div>
                <label htmlFor="text" className="text-sm text-gray-400">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="text-sm text-gray-400">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              />
            </div>
            <div>
              <label htmlFor="text" className="text-sm text-gray-400">
                Apartment
              </label>
              <input
                type="text"
                placeholder="Apartment, suite, etc.(optional)"
                className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <label htmlFor="text" className="text-sm text-gray-400">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
                />
              </div>
              <div>
                <label htmlFor="text" className="text-sm text-gray-400">
                  City
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
                />
              </div>
            </div>
            <div>
              <label htmlFor="text" className="text-sm text-gray-400">
                Postal Code
              </label>
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4 text-zinc-300">
            Payment Card Information
          </h2>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="text" className="text-sm text-gray-400">
                Card Number
              </label>
              <input
                type="text"
                placeholder="Card number"
                className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <label htmlFor="text" className="text-sm text-gray-400">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="Expiration date (MM / YY)"
                  className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
                />
              </div>
              <div>
                <label htmlFor="text" className="text-sm text-gray-400">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="Security code"
                  className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
                />
              </div>
            </div>
            <div>
              <label htmlFor="text" className="text-sm text-gray-400">
                Name On Card
              </label>
              <input
                type="text"
                placeholder="Name On Card"
                className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              />
            </div>
          </div>
        </div>
        <button className="BTN1">
          Pay Now
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className={`star-${num}`}>
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 784.11 815.53"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
                  207.96,29.37 371.12,197.68 392.05,407.74 
                  20.93,-210.06 184.09,-378.37 392.05,-407.74 
                  -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"
                  ></path>
                </g>
              </svg>
            </div>
          ))}
        </button>
      </form>
      <div className="  flex flex-col gap-8  rounded-2xl shadow-xl p-8 ">
        <div
          className={`flex flex-col gap-5 overflow-y-auto ${
            state.cartItems.length > 3 ? "max-h-[300px]" : ""
          }`}
        >
          {state.cartItems.map((item) => (
            <CheckCard key={item.id} props={item} />
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <input
            type="text"
            placeholder="Promo Code"
            className="w-full bg-[#1b1b1b] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ${
              isValidCode
                ? "bg-green-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            APPLY
          </button>
        </div>
        <div className="flex justify-between  text-zinc-200">
          <h1 className="text-medium">Subtotal ·</h1>
          <h1 className="text-medium">
            {state.cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
            items
          </h1>
        </div>
        <div className="flex justify-between text-white">
          <h1 className="text-medium">Total: </h1>
          <h1 className="text-medium">
            {" "}
            {state.cartItems
              .reduce((acc, item) => {
                const price = parseFloat(item.price.replace("$", ""));
                return acc + price * item.quantity;
              }, 0)
              .toFixed(2)}{" "}
            ${" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CheckOuts;
