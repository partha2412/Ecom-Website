import React from 'react'

const NavBar = ({setAuthuser={setAuthuser}}) => {
  return (
    <div>
      <div className='w-full h-10 bg-amber-300 grid grid-cols-2'>

        <div className='flex items-center pl-2'>
            <div>
                <h1>Online Shopping</h1>
            </div>
        </div>


        <div className='flex items-center justify-end'>
            <div className='pr-8'>
                <div>
                  {/* Touggle for Auth User(Display Name and all...) and Non Auth User */}
                    {/* {setAuthuser?{}:{}} */}
                    <a className='hover:underline' href="">LogIn</a> | <a className='hover:underline' href="">SignUp</a>
                    
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default NavBar
