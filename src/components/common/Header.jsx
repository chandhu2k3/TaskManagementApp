/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { setLocalStorage } from '../../util/MylocalStorage'

const Header = (props) => {
  

const logoutuser=()=>{
  localStorage.setItem('loggedInuser','')
  props.changeUser('')
  
}
  return (
    
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-med'>Hello <br />  <span className='text-3xl font-bold'> User!! </span> </h1>

{/* <h1 className='text-2xl font-med'>Hello <br />  <span className='text-3xl font-bold'> {data.data.data.name}!! </span> </h1> */}

<button onClick={logoutuser} id='logoutbtn' className='text-l px-3 py-2 mb-4 font-semibold bg-red-800 rounded-smalling'>LogOut</button>


    </div>
  )
}

export default Header