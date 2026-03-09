import { useState } from "react"
import { FaHome, FaUserGraduate, FaChartBar, FaCog } from "react-icons/fa"

export default function Sidebar(){

const [open,setOpen] = useState(false)
const [active,setActive] = useState("Dashboard")

const menu = [
{ name:"Dashboard", icon:<FaHome/> },
{ name:"Students", icon:<FaUserGraduate/> },
{ name:"Reports", icon:<FaChartBar/> },
{ name:"Settings", icon:<FaCog/> }
]

return(

<div
onMouseEnter={()=>setOpen(true)}
onMouseLeave={()=>setOpen(false)}
className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300
${open ? "w-60" : "w-16"}
`}>

<h1 className="text-xl font-bold mb-8">

{open ? "Student Admin" : "SA"}

</h1>

<ul className="space-y-6">

{menu.map(item => (

<li
key={item.name}
onClick={()=>setActive(item.name)}
className={`flex items-center gap-3 cursor-pointer p-2 rounded
${active === item.name ? "bg-blue-600" : "hover:bg-gray-700"}
`}>

<span className="text-lg">
{item.icon}
</span>

{open && <span>{item.name}</span>}

</li>

))}

</ul>

</div>

)

}