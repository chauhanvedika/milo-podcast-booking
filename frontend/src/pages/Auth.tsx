import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f2e2e]">

      <div className="bg-white rounded-2xl shadow-2xl w-[350px] p-8 transition-all duration-500">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-[#0f2e2e] mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="text-6xl text-[#facc15]">👤</div>
        </div>

        {/* FORM */}
        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* TOGGLE */}
        <p
          className="text-center mt-6 text-sm text-gray-600 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}