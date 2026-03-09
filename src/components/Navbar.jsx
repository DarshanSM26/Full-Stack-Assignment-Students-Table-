export default function Navbar({setSearch,toggleDark}){

return(

<div className="bg-white dark:bg-gray-800 shadow p-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">

<h1 className="font-semibold text-lg">
Student Dashboard
</h1>

<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

<input
className="border px-3 py-2 rounded w-full sm:w-64 bg-white dark:bg-gray-700 dark:text-white"
placeholder="Search student"
onChange={(e)=>setSearch(e.target.value)}
/>

<button
onClick={toggleDark}
className="border px-3 py-2 rounded w-full sm:w-auto"
>
Dark Mode
</button>

</div>

</div>

)

}