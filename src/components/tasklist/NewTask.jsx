/* eslint-disable no-unused-vars */
import React from 'react'

const NewTask = () => {
  return (
    
<div className='flex-shrink-0 h-full w-[400px] bg-[#01015633] rounded-xl '>
     <div className='flex justify-between px-3 py-5'>
     <h2 className='text-sm   flex justify-center items-center  w-[20%]  bg-[rgba(255,0,0,0.68)] rounded-lg'>High</h2> 
       <h4 className='text-sm   flex justify-center items-center '>20 feb 2025</h4>
     </div>
     <h1 className='text-xl font-bold flex justify-center '>Client presentation 2pm</h1>
     <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione totam voluptatum dolor saepe soluta tenetur eum, eveniet praesentium odio dolore delectus aut dolorum quis iusto veritatis distinctio animi laboriosam.</p>
   
     <div className='flex justify-center mt-4 '>
       <button className='px-3 py-3 bg-green-600 bg-opacity-80 rounded-md '>Mark as Completed</button>


    </div>


    </div>
  )
}

export default NewTask