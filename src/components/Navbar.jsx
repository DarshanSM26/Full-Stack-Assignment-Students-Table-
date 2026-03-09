export default function Navbar({setSearch,toggleDark}){

return(

<div className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between">

<h1 className="font-semibold text-lg">
Student Dashboard
</h1>

<div className="flex gap-3">

<input
className="border px-3 py-1 rounded bg-white dark:bg-gray-700 dark:text-white"
placeholder="Search student"
onChange={(e)=>setSearch(e.target.value)}
/>

<button
onClick={toggleDark}
className="border px-3 py-1 rounded"
>
Dark Mode
</button>

</div>

</div>

)

}