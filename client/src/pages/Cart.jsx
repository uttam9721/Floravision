import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";   // ✅ IMPORTANT

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // 🗑️ Remove Item Logic
  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  return (
    <div className="bg-[#1B2316] min-h-screen px-6 md:px-16 py-16 text-white">

      <h1 className="text-4xl font-bold mb-12 text-center">
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (

        /* ===== Empty Cart ===== */
        <div className="text-center mt-20">
          <p className="text-xl text-[#C9CAC7]">
            Your cart is empty 🌿
          </p>
          <p className="text-gray-400 mt-2">
            Add some beautiful plants to brighten your home
          </p>
        </div>

      ) : (

        <div className="max-w-4xl mx-auto space-y-6">

          {/* ===== Items ===== */}
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center
              bg-[#272E22] border border-[#4F554B]
              rounded-2xl p-5 backdrop-blur-sm"
            >

              <div>
                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>
                <p className="text-[#9ACD32] mt-1">
                  ₹{item.price}
                </p>
              </div>

              {/* 🗑️ Remove Button */}
              <button
                onClick={() => removeItem(i)}
                className="px-4 py-2 border border-gray-400
                rounded-lg text-sm hover:bg-[#2E3A24]
                transition"
              >
                Remove
              </button>

            </div>
          ))}

          {/* ===== Total Section ===== */}
          <div
            className="bg-[#272E22] border border-[#4F554B]
            rounded-2xl p-6 mt-10"
          >

            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            {/* 🧾 Checkout Button */}
            <Link to="/address" className="block">
              <button
                className="w-full py-3 rounded-xl font-semibold
                border border-gray-400
                hover:bg-[#2E3A24]
                transition"
              >
                Proceed to Checkout
              </button>
            </Link>

          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;
