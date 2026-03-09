import { useState, useEffect } from "react"

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import StatsCards from "./components/StatsCards"
import StudentTable from "./components/StudentTable"
import StudentModal from "./components/StudentModal"
import Pagination from "./components/Pagination"

import { exportToExcel } from "./utils/exportExcel"

export default function App(){

const [students,setStudents]=useState(()=>{

const saved=localStorage.getItem("students")
return saved ? JSON.parse(saved) : []

})

const [search,setSearch]=useState("")
const [page,setPage]=useState(1)

const [modal,setModal]=useState(false)
const [editingStudent,setEditingStudent]=useState(null)

const [dark,setDark]=useState(false)
const [loading,setLoading]=useState(true)

useEffect(()=>{
localStorage.setItem("students",JSON.stringify(students))
},[students])

useEffect(()=>{
setTimeout(()=>{
setLoading(false)
},1000)
},[])

const toggleDark=()=>setDark(!dark)

const saveStudent=(student)=>{

if(editingStudent){

setStudents(
students.map(s=>s.id===student.id?student:s)
)

}else{

setStudents([...students,student])

}

setEditingStudent(null)
setModal(false)

}

const deleteStudent=(id)=>{
setStudents(students.filter(s=>s.id!==id))
}

const editStudent=(student)=>{
setEditingStudent(student)
setModal(true)
}

const filtered=students.filter(s=>
s.name.toLowerCase().includes(search.toLowerCase())
)

const start=(page-1)*5
const paginated=filtered.slice(start,start+5)

return(

<div className={dark?"dark bg-gray-900 text-white":"bg-gray-100"}>

<div className="flex">

<Sidebar/>

<div className="flex-1 min-w-0">

<Navbar setSearch={setSearch} toggleDark={toggleDark}/>

<div className="p-4 sm:p-6">

<StatsCards students={students}/>

<div className="flex flex-col sm:flex-row gap-3 mb-4 w-full">

<button
onClick={()=>{
setEditingStudent(null)
setModal(true)
}}
className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
>
Add Student
</button>

<button
onClick={()=>exportToExcel(students)}
className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto"
>
Export Excel
</button>

</div>

<p className="text-sm text-gray-500 mb-2">
Showing {filtered.length} of {students.length} students
</p>

{loading ? (

<p className="text-center text-gray-500 py-10">
Loading students...
</p>

) : (

<StudentTable
students={paginated}
editStudent={editStudent}
deleteStudent={deleteStudent}
/>

)}

<Pagination
total={filtered.length}
page={page}
setPage={setPage}
/>

</div>

</div>

</div>

<StudentModal
isOpen={modal}
onClose={()=>setModal(false)}
saveStudent={saveStudent}
editingStudent={editingStudent}
/>

</div>

)

}