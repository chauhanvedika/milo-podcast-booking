import {useEffect,useState} from "react"
import axios from "axios"

export default function Admin(){

const [bookings,setBookings]=useState([])

useEffect(()=>{

axios.get("http://localhost:5000/api/bookings/all")
.then(res=>setBookings(res.data))

},[])

return(

<div>

<h2>Admin Dashboard</h2>

<table>

<tr>
<th>User</th>
<th>Date</th>
<th>Slot</th>
<th>Package</th>
</tr>

{bookings.map((b:any)=>(
<tr key={b._id}>
<td>{b.userId.name}</td>
<td>{b.date}</td>
<td>{b.timeSlot}</td>
<td>{b.package}</td>
</tr>
))}

</table>

</div>

)

}