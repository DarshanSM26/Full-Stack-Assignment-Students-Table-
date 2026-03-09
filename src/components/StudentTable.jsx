export default function StudentTable({students,editStudent,deleteStudent}){

if(students.length===0){
return(

<div className="bg-white dark:bg-gray-800 p-10 rounded shadow text-center">

<div className="flex flex-col items-center">

<p className="text-5xl mb-3">
📭
</p>

<p className="text-gray-500 text-lg">
No students found
</p>

<p className="text-gray-400 text-sm">
Try adjusting your search or add a new student
</p>

</div>

</div>

)
}

return(

<div className="bg-white dark:bg-gray-800 shadow rounded overflow-x-auto">

<table className="w-full min-w-[500px]">

<thead className="bg-gray-100 dark:bg-gray-700">

<tr>
<th className="p-3 text-left">Name</th>
<th className="p-3 text-left">Email</th>
<th className="p-3 text-left">Age</th>
<th className="p-3 text-left">Actions</th>
</tr>

</thead>

<tbody>

{students.map((s)=>(

<tr key={s.id} className="border-t hover:bg-gray-100 dark:hover:bg-gray-700">

<td className="p-3">{s.name}</td>
<td className="p-3">{s.email}</td>
<td className="p-3">{s.age}</td>

<td className="p-3 space-x-2">

<button
onClick={()=>editStudent(s)}
className="bg-yellow-400 px-3 py-1 rounded"
>
Edit
</button>

<button
onClick={()=>{
if(window.confirm("Delete this student?")){
deleteStudent(s.id)
}
}}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}