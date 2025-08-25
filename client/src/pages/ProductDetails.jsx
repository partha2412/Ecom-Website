import React from 'react'

const ProductDetails = () => {
  return (
    <div>
      <div className='  w-screen flex p-2 gap-2' style={{ height: 'calc(100vh - 2.5rem - 3rem)' }} >
        <div className=' w-[30%] flex flex-col  gap-2 justify-center items-center'>
            <div className='border bg-teal-300 w-full flex-3'></div>
            <div className='border bg-violet-400 w-full flex-1'></div>
        </div>
        <div className='bg-blue-400 w-[70%]' >
            <div className='h-10 bg-violet-800'></div>
            <div className='border text-6xl'><h1>Produt Title</h1></div>
            <div className='border h-110'>
                <p>pera</p>
            </div>
            <div className='bg-green-500 h-30'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
