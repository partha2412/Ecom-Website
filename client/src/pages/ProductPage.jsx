import React from 'react'
import Products from './Products'
import OptionBar from '../Components/layout/OptionBar'
import { useState } from 'react'

const ProductPage = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='flex justify-center items-center relative duration-1000'>
      {/* Option bar Button */}
      <div className=' absolute w-12 left-2 top-12 flex flex-col gap-1 bg-amber-100 p-2 border-3 border-amber-400 cursor-pointer' onClick={() => setShow(true)} >
        <div className='border-2 border-amber-400 w-7'></div>
        <div className='border-2 border-amber-400 w-7'></div>
        <div className='border-2 border-amber-400 w-7'></div>
      </div>
      {show ? (
        <OptionBar setShow={setShow} ></OptionBar>
      ) : null}
      <div className={show ? 'filter blur-[8px]  ' : null} >
        <Products></Products>
      </div>

      {/* Optional overlay for dim + block clicks */}
      {show && (
        <div className="fixed inset-0 bg-black/20 z-40"></div>
      )}

      {show && (
        <OptionBar
          setShow={setShow}
          className={`fixed top-0 left-0 h-full w-72 z-50 transform ${show ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        />
      )}


    </div>
  )
}

export default ProductPage
