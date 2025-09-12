import React, { useState } from 'react'
import Popup_Options from '../common/Popup_Options'

const SubNavBar = () => {
    const [filter, setFilter] = useState(false)
    return (
        <div className='pt-10'>
            <div className=' absolute z-10 h-10 pl-14 mt-2 w-full gap-2 grid grid-cols-2 duration-100 text-amber-600'>
                {/* left */}
                <div className='flex items-center pl-4 scale- md:scale-none'>
                    <div className='flex flex-col justify-center items-center gap-1 cursor-pointer hover:shadow-sm shadow-amber-400 duration-200' class={filter ? " shadow-amber-900 shadow-sm" : null}    >
                        <div className='p-2' onClick={() => setFilter(!filter)}>
                            <i class="fa-solid fa-filter" ></i>
                        </div>
                        {filter ? (
                            <Popup_Options />
                        ) : null}

                    </div>
                </div>

                {/* Right */}
                <div className=''>
                    <div className='flex items-center justify-end gap-0 md:gap-8 md:pr-12 pr-4 '>


                        {/* Profile */}
                        <div className='p-2 cursor-pointer hover:shadow shadow-amber-400 duration-200'>
                            <i class="fa-solid fa-user"></i>
                        </div>



                        {/* Orders */}
                        <div className='p-2 cursor-pointer hover:shadow shadow-amber-400 duration-200'>
                            <i className="fa-solid fa-box-open "></i>
                        </div>



                        {/* Order Track */}
                        <div className='p-2 cursor-pointer hover:shadow shadow-amber-400 duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                        </div>



                        {/* Wish list */}
                        <div className=' p-2 flex justify-center items-center gap-0.5 cursor-pointer hover:shadow shadow-amber-400 duration-200'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                            </div>
                            {/* <div className='size-5 bg-amber-100 border-1 border-amber-500 rounded-full flex justify-center items-center'>
                            <span className='font-semibold text-amber-700'>3</span>
                        </div> */}
                            <div>
                                <button className='flex items-center justify-center bg-amber-100 size-5 cursor-pointer rounded-full text-amber-600 text-[14px] md:text-[18px] font-semibold '>3</button>
                            </div>
                        </div>




                        {/* Cart List */}
                        <button className='p-2 flex justify-center items-center gap-1 cursor-pointer hover:shadow shadow-amber-400 duration-200'>
                            <div>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            {/* <div className='size-5 bg-amber-100 border-1 border-amber-500 rounded-full flex justify-center items-center'>
                            <span className='font-semibold text-amber-700'>3</span>
                        </div> */}
                            <div>
                                <button className='flex items-center justify-center bg-amber-100 size-5 cursor-pointer rounded-full text-amber-600 text-[14px] md:text-[18px] font-semibold '>3</button>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubNavBar
