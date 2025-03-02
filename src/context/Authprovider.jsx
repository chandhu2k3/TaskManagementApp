/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext,useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../util/MylocalStorage'


export const Authcontext= createContext()

const Authprovider = ({children}) => {
// localStorage.clear()
  const [userdata, setUserdata] = useState(null)
setLocalStorage()
  useEffect(() => {
    const {employees,admin}= getLocalStorage()
    setUserdata({employees,admin})
  }, [])
  
  


   
  return (
    <div>
        <Authcontext.Provider value={userdata}>    
              {children}
              </Authcontext.Provider>
  
    </div>
  )
}

export default Authprovider