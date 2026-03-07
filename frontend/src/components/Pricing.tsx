import { motion } from "framer-motion";

export default function Pricing(){

return(

<div className="pricing">

<motion.div 
className="price-card"
whileHover={{y:-10}}
>

<h3>Without Camera Person</h3>

<h2>₹1000/hour</h2>

<ul>
<li>DSLR Camera</li>
<li>Professional Microphones</li>
<li>2 Soft Lights</li>
<li>Teleprompter</li>
<li>Full Studio Access</li>
</ul>

<button className="btn">Book Now</button>

</motion.div>

<motion.div 
className="price-card recommended"
whileHover={{y:-10}}
>

<h3>With Camera Person</h3>

<h2>₹2000/hour</h2>

<ul>
<li>Dedicated Camera Operator</li>
<li>Professional Microphones</li>
<li>2 Soft Lights</li>
<li>Teleprompter</li>
<li>Full Studio Access</li>
<li>Professional Framing & Angles</li>
</ul>

<button className="btn">Book Now</button>

</motion.div>

</div>

)

}