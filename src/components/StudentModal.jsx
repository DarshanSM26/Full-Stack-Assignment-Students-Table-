import {useState,useEffect} from "react"

export default function StudentModal({isOpen,onClose,saveStudent,editingStudent}){

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [age,setAge]=useState("")

useEffect(()=>{

if(editingStudent){

setName(editingStudent.name)
setEmail(editingStudent.email)
setAge(editingStudent.age)

}else{

setName("")
setEmail("")
setAge("")

}

},[editingStudent])

if(!isOpen) return null

const submit=(e)=>{

e.preventDefault()

if(!name || !email || !age){
alert("All fields required")
return
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){
alert("Enter a valid email address")
return
}

saveStudent({
id: editingStudent ? editingStudent.id : Date.now(),
name,
email,
age
})

}

return(

<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

<div className="bg-white dark:bg-gray-800 p-6 rounded w-96 shadow">

<h2 className="text-xl font-bold mb-4 dark:text-white">
{editingStudent ? "Edit Student" : "Add Student"}
</h2>

<form onSubmit={submit} className="space-y-3">

<input
className="border w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="border w-full p-2 rounded bg-white dark:bg-gray-700 dark:text-white"
placeholder="Age"
type="number"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<div className="flex gap-3 pt-2">

<button className="bg-blue-600 text-white px-4 py-2 rounded">
Save
</button>

<button
type="button"
onClick={onClose}
className="bg-gray-500 text-white px-4 py-2 rounded"
>
Cancel
</button>

</div>

</form>

</div>

</div>

)

}