/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import Employeedashboard from './components/dashboard/Employeedashboard'
import Admindashboard from './components/dashboard/Admindashboard'
import { setLocalStorage } from './util/MylocalStorage'
import { getLocalStorage } from './util/MylocalStorage'
import { Authcontext } from './context/Authprovider'



const App = () => {

 
  const [user, setUser] = useState(null);
  const [loggeduserData, setLoggeduserData] = useState(null)
  const authdata =useContext(Authcontext)


useEffect(()=>{
  const loggedInUser =localStorage.getItem('loggedInuser')
  if(loggedInUser){
    const userdata = JSON.parse(loggedInUser)
  setUser(userdata.role)
  setLoggeduserData(userdata.data)
  }
},[])
 
  const handleLogin =(email,password)=>{
    if(email == "admin@example.com" && password == "123"){
     setUser('admin')
    localStorage.setItem('loggedInuser',JSON.stringify({role:'admin'}))
    }
    else if(authdata ){
      const employee =  authdata.employees.find((e)=>email==e.email && password==e.password)
      if(employee){
        setUser('employee')
        setLoggeduserData(employee)
        localStorage.setItem('loggedInuser',JSON.stringify({role:'employee',data:employee}))
      }
      
      

    }
    else{
      alert('Invalid credentials')
    }

  }
  
  const data = useContext(Authcontext)
  
  return (
    <>
    
     {!user?< Login handleLogin={handleLogin} />:''}
      {user=='admin'?<Admindashboard changeUser={setUser} />:''}
      {user=='employee'?<Employeedashboard changeUser={setUser}  data={loggeduserData} />:''}
    
      </>
  )
}

export default App
