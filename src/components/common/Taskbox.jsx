/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Taskbox = ({data}) => {
  
  return (
    <div className='flex mt-10 justify-between gap-6 screen'>
        <div className='flex-1  rounded-xl  px-3 py-5  bg-[#ffffff1d]'>
     <h2 className='text-2xl flex justify-center font-bold'> {data.task_counts.active} </h2>
      <h3 className='text-xl flex justify-center font-semibold'>ActiveTask</h3>
      </div>
      <div className='flex-1 justify-center rounded-xl px-3 py-5 bg-[#46fd893c]'>
     <h2 className='text-2xl flex justify-center font-bold'>{data.task_counts.completed}</h2>
      <h3 className='text-xl flex justify-center font-semibold'> CompletedTask</h3>
      </div>
      <div className='flex-1 rounded-xl  px-3 py-5 bg-[#ff020229]'>
     <h2 className='text-2xl  flex justify-center font-bold'>{data.task_counts.failed}</h2>
      <h3 className='text-xl flex justify-center font-semibold'> FailedTask</h3>
      </div>
      {/* <div className='flex-1 rounded-xl  px-3 py-5 bg-[#F6F65A66]'>
     <h2 className='text-2xl flex justify-center font-bold'>4</h2>
      <h3 className='text-xl flex justify-center font-semibold'> ActiveTask</h3>
      </div> */}
    </div>
  )
}

export default Taskbox 