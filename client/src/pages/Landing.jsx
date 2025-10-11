import React from 'react'

const Landing = () => {
  return (
    <div>
      <div className='relative w-screen h-screen flex flex-row justify-center items-end'>
        {/* left */}
        <div className='flex-1 hover:flex-2 duration-300 h-full bg-amber-950 flex justify-end'>
          {/* <img className='w-full object-contain object' src='https://media.istockphoto.com/id/187310279/photo/brown-leather-shoe.jpg?s=612x612&w=0&k=20&c=N-G1SP8dDojp3M_ykS7tQuYI8OVPWM0XA8_knBiWRtY=' alt="" /> */}
        </div>

        {/* <div className='absolute bg-red-300/80 size-150 flex justify-center items-center duration-500  mb-20'>



          <div className='relative w-full h-full  bg-pink-400 group overflow-hidden'>
            <button className='border p-2 absolute left-1 bottom-70 group-hover:bottom-59 duration-500 bg-sky-600'>test</button>
          </div>

          src="https://i.pinimg.com/736x/54/cf/ce/54cfcea66366fd7a2fdb5e7bb5534632.jpg" 

        </div> */}

        {/* right */}
        <div className='h-full flex-1 hover:flex-2 duration-300 flex justify-center items-center bg-slate-900'>
          {/* <img className='w-full object-center object-contain' src='https://www.campusshoes.com/cdn/shop/files/CAMP_CLINT_WHT_GRNG8_3_3ff3eec1-906a-4782-958d-c46740344191.jpg?v=1757479645' alt="" /> */}
          <div>
            <h1 className='text-white text-7xl font-extrabold font-serif'>What's on your mind ?</h1>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Landing
