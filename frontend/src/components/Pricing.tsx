import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="py-20 px-6 bg-[#f5f2ea] text-center">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-3 text-[#0f3d2e]">
        Simple Pricing
      </h1>
      <p className="text-gray-600 mb-12">
        Choose the package that fits your needs
      </p>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">

        {/* LEFT CARD */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg w-[320px]"
          whileHover={{ y: -12, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#0f3d2e]">
            Without Camera Person
          </h3>

          <h2 className="text-4xl font-bold mb-2 text-[#0f3d2e]">
            ₹1,000
          </h2>
          <p className="text-gray-500 mb-6">/hour</p>

          <ul className="space-y-3 text-left text-gray-700">
            <li>✔ DSLR Camera (self-operated)</li>
            <li>✔ Professional Microphones</li>
            <li>✔ 2 Soft Lights</li>
            <li>✔ Teleprompter</li>
            <li>✔ Full Studio Access</li>
          </ul>

          <button className="mt-8 w-full bg-[#0f3d2e] text-white py-3 rounded-xl font-semibold hover:bg-[#145c43] transition">
            Book Now →
          </button>
        </motion.div>

        {/* RIGHT CARD (RECOMMENDED) */}
        <motion.div
          className="relative bg-[#0f3d2e] text-white rounded-2xl p-8 shadow-2xl w-[340px] border-2 border-yellow-400"
          whileHover={{ y: -15, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >

          {/* Recommended Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold shadow">
            Recommended
          </div>

          <h3 className="text-xl font-semibold mb-4">
            With Camera Person
          </h3>

          <h2 className="text-4xl font-bold mb-2">
            ₹2,000
          </h2>
          <p className="text-gray-300 mb-6">/hour</p>

          <ul className="space-y-3 text-left">
            <li>✔ Dedicated Camera Operator</li>
            <li>✔ Professional Microphones</li>
            <li>✔ 2 Soft Lights</li>
            <li>✔ Teleprompter</li>
            <li>✔ Full Studio Access</li>
            <li>✔ Professional Framing & Angles</li>
          </ul>

          <button className="mt-8 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
            Book Now →
          </button>
        </motion.div>

      </div>
    </div>
  );
}