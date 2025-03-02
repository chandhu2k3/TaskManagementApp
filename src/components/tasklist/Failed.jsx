/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Failed = ({data}) => {
 
  if(data.failed){
      const status = 'failed'
      
  
  return (
   
    
<div className='flex-shrink-0  w-[400px] bg-red-500 bg-opacity-50 rounded-xl p-4 '>
     <div className='flex justify-between px-3 py-5 '>
     <h2 className='text-sm   flex justify-center items-center  w-[20%]  bg-[rgba(255,0,0,0.68)] rounded-lg'>High</h2> 
       <h4 className='text-sm   flex justify-center items-center '>{data.task_date}</h4>
     </div>
     <h1 className='text-xl font-bold flex justify-center '>{data.title}</h1>
     <p className='flex justify-center'>{data.description}</p>
     <div className='flex justify-center mt-4'>
      <h1 className='text-xl font-bold p-3 '>Failed </h1>
       
     </div>
   </div>
   
  )
}}


export default Failed