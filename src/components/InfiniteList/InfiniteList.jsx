const InfiniteList=({name,imageUrl,description})=>{
  return(
    <>
    <ul role="list" className="divide-y divide-gray-100">
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={imageUrl} alt=""/>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{description}</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>

 

  
  
</ul>
</>
  )
}
export default InfiniteList;