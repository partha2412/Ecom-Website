import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Auth = ({ setAuthuser }) => {
  const [islogin, setIslogin] = useState(true)
  return (
    <div>
      {islogin?(<Login setAuthuser={setAuthuser} setIslogin={setIslogin}></Login>):(<Signup setIslogin={setIslogin}></Signup>)}
    </div>
  )
}

export default Auth
