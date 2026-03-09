export default function StatsCards({students}){

const total = students.length

const avgAge =
students.length===0
?0
:Math.round(
students.reduce((a,b)=>a+Number(b.age),0)/students.length
)

return(

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
<p className="text-gray-500">Total Students</p>
<h2 className="text-2xl font-bold">{total}</h2>
</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
<p className="text-gray-500">Average Age</p>
<h2 className="text-2xl font-bold">{avgAge}</h2>
</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
<p className="text-gray-500">Status</p>
<h2 className="text-green-600 font-bold">Active</h2>
</div>

</div>

)

}