import React from 'react'

function CompanyCard({username}) {
  console.log(username);
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-4">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto items-start" src="https://images.unsplash.com/photo-1706633365807-ac262530a8f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="300" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  
    // <div className="grid grid-cols-1 bg-white rounded-md">
    //   <img src="" className='rounded-xl rounded-b-none' />
    //   <div className="my-2 p-4">
    //     <h2 className="font-semibold">Title Card</h2>
    //     <button className=" bg-blue-500 text-white px-2 py-1 rounded-full text-xs my-1">Category</button>
    //     <p className="text-xs mt-1">Lorem ipsum dolor sit.</p>
    //   </div>
    // </div>
  )
}

export default CompanyCard