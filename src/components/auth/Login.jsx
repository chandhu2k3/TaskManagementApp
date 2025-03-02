/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
    
     const [email, setemail] = useState('')
     const [password, setpassword] = useState('')
const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
  
    setemail('')
    setpassword('')
}   

  return(
    
    <div className='flex h-screen w-screen items-center justify-center'>
<div className='border-2 border-blue-300 p-20'>
<form 
onSubmit={(e)=>{
    submitHandler(e)
}}
 className='flex flex-col items-center justify-center'>
    
    <input
    value={email}
  onChange={(e)=>{
setemail(e.target.value);
  }}
     required className='text-alice outline-none bg-transparent border-2 border-blue-300 px-5 py-4 mt-4 rounded-full  placeholder:text-white' type="email" placeholder='Enter your email' />
    <input 
    onChange={(e)=>{
     setpassword(e.target.value) 
    }
    }
    required className='text-alice outline-none bg-transparent border-2 border-blue-300 py-4 px-5 mt-4 rounded-full placeholder:text-white' type="password" placeholder='Enter Password' />
    <button className=' mt-6 text-black outline-none  border-2 bg-blue-300 py-4 px-5  rounded-full placeholder:text-white'>Login</button>

</form>
</div>
    </div>
  )
}

export default Login