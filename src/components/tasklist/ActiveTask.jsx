/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ActiveTask = ({data}) => {
  const Submithandler=()=>{
    console.log('Mark as Completed')
    
  }
  return (
    <div>

   
    
   <div className='flex-shrink-0 h-full w-[400px] bg-[#01015633] rounded-xl p-4 '>
     <div className='flex justify-between px-3 py-5'>
     <h2 className='text-sm   flex justify-center items-center  w-[20%]  bg-[rgba(255,0,0,0.68)] rounded-lg'>{data.priority}</h2> 
       <h4 className='text-sm   flex justify-center items-center '>{data.task_date}</h4>
     </div>
     <h1 className='text-xl font-bold flex justify-center '>{data.title}</h1>
     <p className='flex justify-center'>{data.description}</p>
     <div className='flex justify-center mt-4 '>
       <button onClick={Submithandler}  className='px-3 py-3 bg-green-600 bg-opacity-80 rounded-md '>Mark as Completed</button>
       
     </div>
   </div>
   
       
  
   </div>





  
  )
}

export default ActiveTask