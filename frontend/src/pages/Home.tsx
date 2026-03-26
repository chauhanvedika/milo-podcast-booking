import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Pricing from "../components/Pricing";

import podcastImg from "../assets/Podcast.jpg";
import dslrImg from "../assets/dslr.jpg";
import micImg from "../assets/mike.jpg";
import lightImg from "../assets/lighting.jpg";
import studioImg from "../assets/Podcast.jpg"; // temporary (since you don’t have studio.jpg)


export default function Home() {
  return (
    <div className="bg-[#f5f2ea] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="bg-[#0f2e2e] text-white py-20 px-10 text-left">

        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Where the game ends <br />
          and the conversation begins
        </h1>

        <p className="max-w-xl mb-8 text-gray-300">
          Record your podcast in a premium studio with high-end gear and professional setup.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mb-10">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Book Now
          </button>

          <button className="border border-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition">
            View Pricing
          </button>
        </div>

        {/* STATS */}
        <div className="flex gap-10 text-center">
          <div>
            <h2 className="text-3xl font-bold">₹1000</h2>
            <p className="text-gray-400">per hour</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">7</h2>
            <p className="text-gray-400">time slots daily</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Full</h2>
            <p className="text-gray-400">studio setup</p>
          </div>
        </div>

      </section>

      {/* PODCAST IMAGE */}
      <img 
        src={podcastImg} 
        className="w-full h-[400px] object-cover"
      />

      {/* SLIDER */}
      <Slider />

      {/* OUR STUDIO */}
      <section className="py-20 px-10">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Studio
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img 
            src={studioImg} 
            className="rounded-xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Full Studio Setup
            </h3>
            
          </div>

        </div>

        {/* EQUIPMENT CARDS WITH ANIMATION */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* DSLR */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img src={dslrImg} className="h-48 w-full object-cover" />
            <h3 className="p-4 font-semibold text-center">DSLR Camera</h3>
          </div>

          {/* MIC */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img src={micImg} className="h-48 w-full object-cover" />
            <h3 className="p-4 font-semibold text-center">Microphone</h3>
          </div>

          {/* LIGHT */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img src={lightImg} className="h-48 w-full object-cover" />
            <h3 className="p-4 font-semibold text-center">Lighting Setup</h3>
          </div>

        </div>

      </section>

      {/* PRICING */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0f3d2e] mb-10">
          Pricing
        </h2>

        <Pricing />
      </section>

    </div>
  );
}