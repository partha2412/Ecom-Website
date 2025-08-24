import React, { useEffect, useState } from 'react'
import { handelGetMe, handleLogout } from '../../../components/auth'

const NavBar = () => {
  const [name, setName] = useState()
  useEffect(() => {
    const fetch = async () => {
      const authUser = await handelGetMe();
      setName(authUser.name)
    };
    fetch();
  }, [])


  return (
    <div>
      <div className='w-full h-10 bg-amber-300 grid grid-cols-2'>

        <div className='flex items-center pl-2 cursor-pointer'>
          <div onClick={handleLogout}>
            <h1>Online Shopping</h1>
          </div>
        </div>


        <div className='flex items-center justify-end'>
          <div className='pr-4'>
            {/* Touggle for Auth User(Display Name and all...) and Non Auth User */}
            {!name ?
              (
                <div className='cursor-pointer'>
                  <a className='hover:underline' href="/login">LogIn</a> | <a className='hover:underline' href="/signup">SignUp</a>
                </div>
              ) : (
                <div>
                  <a className='hover:underline cursor-pointer' onClick={handleLogout}>{name}</a>
                </div>
              )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar
