import React from 'react'

const Landing = () => {
  return (
    <div>
      <div className='relative w-screen h-screen flex flex-row justify-center items-end'>
        {/* left */}
        <div className='flex-1 hover:flex-4 duration-300 h-full bg-amber-400'>

        </div>

        <div className='absolute bg-red-300/80 size-150 flex justify-center items-center duration-500  mb-20'>



          <div className='relative w-full h-full  bg-pink-400 group overflow-hidden'>
            <button className='border p-2 absolute left-1 bottom-70 group-hover:bottom-59 duration-500'>test</button>
          </div>


        </div>

        {/* right */}
        <div className='h-full flex-1 hover:flex-4 duration-300 flex justify-end bg-slate-400'>
          {/* <img className='object-cover' src="https://i.pinimg.com/736x/54/cf/ce/54cfcea66366fd7a2fdb5e7bb5534632.jpg" alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Landing
