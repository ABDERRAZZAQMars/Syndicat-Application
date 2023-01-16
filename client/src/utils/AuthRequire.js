import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



const AuthRequire = () => {
  const token = localStorage.getItem('token')

  if(!token){
   return <Navigate to='/' replace = {true} />
  }


  return <Outlet />
  
}

export default AuthRequire