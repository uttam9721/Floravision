import React from "react";

const Address = () => {
  return (
    <div className="bg-[#1B2316] min-h-screen px-6 md:px-16 py-16 text-white">

      <h1 className="text-4xl font-bold text-center mb-12">
        📦 Shipping Address
      </h1>

      <div
        className="max-w-3xl mx-auto
        bg-[#272E22] border border-[#4F554B]
        rounded-3xl p-8 backdrop-blur-sm"
      >

        <form className="space-y-5">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />

          {/* Street */}
          <input
            type="text"
            placeholder="Street / House No."
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />

          {/* Area */}
          <input
            type="text"
            placeholder="Area / Locality"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />

          {/* City + State */}
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
            />

            <input
              type="text"
              placeholder="State"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
            />
          </div>

          {/* Pincode */}
          <input
            type="text"
            placeholder="Pincode"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />

          {/* Country */}
          <input
            type="text"
            placeholder="Country"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-xl font-semibold
            border border-gray-400 hover:bg-[#2E3A24]
            transition"
          >
            Save Address & Continue
          </button>

        </form>

      </div>

    </div>
  );
};

export default Address;
