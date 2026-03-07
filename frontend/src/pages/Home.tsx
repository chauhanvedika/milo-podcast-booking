import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import StudioCards from "../components/StudioCards";
import Pricing from "../components/Pricing";

export default function Home(){

return(

<div>

<Navbar/>

<section className="hero">

<h1>Where the game ends and the conversation begins</h1>

<p>
We bridge the gap between high-intensity action and the stories that define the culture behind the screen.

From competitive gaming sessions that push limits to deep-dive podcasts that explore what drives the industry,
we provide the ultimate space to play, record, and connect with your audience.
</p>

</section>

<Slider/>

<section className="section">

<h2>Our Studio</h2>

<StudioCards/>

</section>

<section className="section">

<h2>Pricing</h2>

<Pricing/>

</section>

</div>

)

}