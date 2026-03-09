import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function TableSkeleton(){

return(

<div className="bg-white p-4 rounded shadow">

{Array(5).fill(0).map((_,i)=>(
<div key={i} className="flex gap-4 mb-3">

<Skeleton width={150}/>
<Skeleton width={200}/>
<Skeleton width={50}/>
<Skeleton width={120}/>

</div>
))}

</div>

)

}