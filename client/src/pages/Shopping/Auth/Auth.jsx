import React from 'react'
import Login from './Login'

const Auth = ({setAuthuser}) => {
    
  return (
    <div>
      <Login setAuthuser={setAuthuser}></Login>
    </div>
  )
}

export default Auth
