import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-[#0f2e2e] text-white">
      
      {/* LOGO */}
      <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
        MILO
      </h1>

      {/* MENU */}
      <div className="flex gap-8 text-lg">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/podcast" className="hover:text-yellow-400">Podcast</a>
        <a href="/login" className="hover:text-yellow-400">Login</a>
      </div>

    </div>
  );
}