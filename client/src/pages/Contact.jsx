import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#1B2316] min-h-screen py-20 px-6 md:px-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white mb-16">
        Contact Us
      </h1>

      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ===== Left: Info ===== */}
        <div className="text-[#C9CAC7] space-y-6">

          <h2 className="text-2xl font-bold text-white">
            Get In Touch 🌿
          </h2>

          <p>
            Have questions about our plants or need help choosing the
            perfect one? We’re here to help you bring nature into your home.
          </p>

          <div className="space-y-3">
            <p>📍 Bangalore, India</p>
            <p>📞 +91 0001112223</p>
            <p>✉️ support@floravision.com</p>
          </div>

          <div className="pt-4">
            <h3 className="text-white font-semibold mb-2">
              Business Hours
            </h3>
            <p>Mon — Sat : 9 AM — 7 PM</p>
            <p>Sunday : Closed</p>
          </div>

        </div>

        {/* ===== Right: Form ===== */}
        <div
          className="bg-[#272E22] border-2 border-[#4F554B]
          rounded-3xl p-8 backdrop-blur-sm"
        >

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold
              text-white border border-gray-400
              hover:bg-[#2E3A24] transition duration-200"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;
