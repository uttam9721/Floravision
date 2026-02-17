import React from "react";

const plants = [
  {
    title: "Indoor Plants",
    desc: "Perfect for homes and offices. Improves air quality and adds freshness.",
    price: "Starting ₹299",
  },
  {
    title: "Outdoor Plants",
    desc: "Ideal for gardens and balconies. Thrives in natural sunlight.",
    price: "Starting ₹399",
  },
  {
    title: "Desk Plants",
    desc: "Small and aesthetic plants for workspaces and study tables.",
    price: "Starting ₹199",
  },
  {
    title: "Air Purifying",
    desc: "Removes toxins and keeps your environment clean and healthy.",
    price: "Starting ₹349",
  },
];

const PlanType = () => {
  return (
    <section className="mt-32 px-6 md:px-20">

      {/* Heading */}
      <h2 className="text-center text-white text-3xl font-bold mb-16">
        Choose Your Plant Type
      </h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {plants.map((plant, index) => (
          <div
            key={index}
            className="border border-[#4F554B] rounded-3xl p-6
            backdrop-blur-sm bg-white/5
            hover:bg-white/10 transition duration-300
            shadow-lg"
          >

            <h3 className="text-white text-xl font-semibold mb-3">
              {plant.title}
            </h3>

            <p className="text-[#C9CAC7] mb-4 text-sm">
              {plant.desc}
            </p>

            <p className="text-[#9ACD32] font-bold mb-4">
              {plant.price}
            </p>

            <button
              className="w-full border border-gray-400 text-white
              py-2 rounded-xl hover:bg-[#2E3A24]
              transition duration-200"
            >
              Explore
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default PlanType;
