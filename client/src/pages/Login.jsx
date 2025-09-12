import React, { useEffect, useState } from 'react'
import { href, Navigate, useNavigate } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'

const Login = (  ) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const {handelLogin} = useAuth()

    async function handleSubmit() {
        await handelLogin(email,password)
    }

    return (
        <div className='flex items-center justify-center w-screen h-screen '>

            <div className='w-screen h-180 md:w-300 md:h-180 flex justify-center shadow-2xl '>

                <div className='w-[30%] md:w-[30%] sm:w-[30%] flex'>
                    <img className='w-full h-full object-cover overflow-hidden' src="https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409471.jpg" alt="Shopping" />
                </div>

                <div className='bg-amber-300 w-[80%] md:w-[70%] flex items-center justify-center '>
                    <div className='sm:border-0 lg:border md:border w-120 h-140 p-6 pt-10 flex flex-col duration-200 gap-10 md:text-2xl sm:text-[15px]'>

                        <div >
                            <h1 className='pb-2 text-[15px] cursor-default'>Login to</h1>
                            <a className='text-3xl font-medium underline cursor-pointer' href="/" >Online Shopping</a>
                        </div>

                        <div className=''>
                            <input className='border p-2 w-full' type="email" placeholder='enter email' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='flex w-full'>
                            <input className='border p-2 w-full' type={show ? "text" : "password"} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                            <button className='border px-3 border-l-0 cursor-pointer' onClick={() => setShow(!show)}>
                                {show ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button className='border p-2 w-full hover:bg-amber-400 cursor-pointer' onClick={handleSubmit}>Login</button>
                        </div>

                        <div className="w-full h-[0.5px] bg-black"></div>

                        <div className='text-[15px] flex items-center'>
                            <span>Does not have any account ?   <a className='text-blue-800 underline cursor-pointer' onClick={(e)=>setIslogin(false)} href='/signup' >Signup</a></span>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login
