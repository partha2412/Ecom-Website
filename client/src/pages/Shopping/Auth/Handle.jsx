import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from '../Home'
import { handelGetMe, handleLogout } from '../../../components/auth'

const Handle = () => {
  const [authUser, setAuthUser] = useState(null)
  let user,name

  async function test() {
    user = await handelGetMe()
    //console.log(user);
    name=user.name
    
  }
  test()
  //handleLogout()

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={authUser?<Home/>:<Navigate to="/login" />} /> */}
        <Route path='/' element={<Home authUser={user} />} />
        <Route path='/login' element={<Login setAuthUser={setAuthUser} ></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        {/* {islogin?(<Login setAuthuser={setAuthuser} setIslogin={setIslogin}></Login>):(<Signup setIslogin={setIslogin}></Signup>)} */}

      </Routes>
    </BrowserRouter>
  )
}

export default Handle
