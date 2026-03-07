import { motion } from "framer-motion";

const items=[
{title:"DSLR Camera",img:"/dslr.jpg"},
{title:"Collar & Stand Microphone",img:"/mic.jpg"},
{title:"2 Soft Lights",img:"/lights.jpg"},
{title:"Teleprompter",img:"/teleprompter.jpg"},
{title:"Ambience",img:"/studio.jpg"},
]

export default function StudioCards(){

return(

<div className="cards">

{items.map((item)=>(
<motion.div 
className="card"
whileHover={{scale:1.1}}
>

<img src={item.img}/>

<h3>{item.title}</h3>

</motion.div>

))}

</div>

)

}