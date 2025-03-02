/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../common/Header'
import Taskbox from '../common/Taskbox'
import Tasklist from '../tasklist/Tasklist'

const Employeedashboard = (props) => {
  return (
    <>
    <div id='employeedashboard' className='p-10 bg-[#000000] h-screen' >
    <Header changeUser={props.changeUser} data={props.data} />
    <Taskbox data={props.data} />
    <Tasklist data={props.data} />
    </div>
    </>
  )
}

export default Employeedashboard