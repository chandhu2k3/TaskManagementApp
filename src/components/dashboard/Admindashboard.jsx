/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../common/Header'

import CreatingTaskform from '../common/CreatingTaskform'
import Alltasks from '../common/AllemployeesAdmin'

const Admindashboard = (props) => {
  return (
    
    <div id='admindash' className='h-full w-full p-10 bg-[#000000]'>
        <Header changeUser ={props.changeUser} />
        <CreatingTaskform />
        <Alltasks/>
        </div>
        
       
        
  )
}

export default Admindashboard