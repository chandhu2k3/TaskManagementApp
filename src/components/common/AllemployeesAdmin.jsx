/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Alltasks = () => {
  const authdata= useContext(Authcontext)
  return (
    <div  className=' mt-8 p-2   bg-gray-700 bg-opacity-50'>
      {/* <div className='  flex justify-center text-2xl font-bold  '> <h1 className='bg-gray-950 bg-opacity-40 rounded-xl px-6 py-2' >Assigned Tasks</h1></div> */}
      <div className='bg-[#0c3f61] text-xl mt-2 bg-opacity-50 text-xl font-bold   py-3 px-4 flex justify-between items-center h-12  border border-gray-500'>
            <h2 className='w-[15%] ' >Employee</h2>
            <h3 className='w-[15%] flex justify-center' >Tasks </h3>
            <h4 className='w-[15%] flex justify-center'>Completed</h4>
            <h4 className='w-[15%] flex justify-center'>Active</h4>
            <h4 className='w-[15%] flex justify-center'>Failed</h4>
        </div>
      <div id='alltasksadmin' className='h-72 overflow-y-auto'>
        {authdata.employees.map(function(elem,idx){
          return (
          <div key={idx} id='employeetask' className='bg-[#060635ae] mt-2 bg-opacity-50 text-xl   py-3 px-4 flex justify-between items-center h-12 rounded-xl border border-gray-500'>
            <h2 className='w-[15%]'>{elem.name}</h2>
            
            <h3 className='w-[15%] flex justify-center ' >{elem.tasks.length}</h3>
            <h3 className='w-[15%] flex justify-center text-green-500'>{elem.task_counts.completed}</h3>
          <h4 className='w-[15%] flex justify-center text-orange-400' >{elem.task_counts.active}</h4>
          <h4 className='w-[15%] flex justify-center text-red-600'>{elem.task_counts.failed}</h4>
        </div>
          )
        })}
     
      
      </div>
      </div>
       
    
  )
}

export default Alltasks
