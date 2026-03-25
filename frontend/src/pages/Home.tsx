import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import StudioCards from "../components/StudioCards";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <div className="bg-[#f5f2ea] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-[#0f3d2e] mb-6 leading-tight">
          Where the game ends and the conversation begins
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl">
          We bridge the gap between high-intensity action and the stories that define the culture behind the screen.
          From competitive gaming sessions that push limits to deep-dive podcasts that explore what drives the industry,
          we provide the ultimate space to play, record, and connect with your audience.
        </p>
      </section>

      {/* SLIDER */}
      <Slider />

      {/* STUDIO */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0f3d2e] mb-10">
          Our Studio
        </h2>

        <StudioCards />
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