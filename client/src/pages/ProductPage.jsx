import React from 'react'
import Products from './Products'
import OptionBar from '../Components/layout/OptionBar'
import { useState } from 'react'

const ProductPage = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      {/* <div className='flex justify-center items-center w-[187vh] relative'>


        
        <div className=' absolute w-12 left-2 top-2 flex flex-col gap-1 bg-amber-100 p-2 border-3 border-amber-400 cursor-pointer' onClick={() => setShow(true)} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </div>

        {show ? (
          <OptionBar setShow={setShow} ></OptionBar>
        ) : null}


        <div className={show ? 'filter blur-[8px]  ' : null} >
          <Products></Products>
        </div>

        
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
      */}

      <Products />
      <div
          className="absolute z-50 w-12 left-2 top-12 flex flex-col gap-1 bg-amber-100 p-2 border-3 border-amber-400 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <div className="border-2 border-amber-400 w-7"></div>
          <div className="border-2 border-amber-400 w-7"></div>
          <div className="border-2 border-amber-400 w-7"></div>
        </div>
      {show ? (<OptionBar setShow={setShow} ></OptionBar>) : null}

    </>
  )
}

export default ProductPage
