import React, { useState } from 'react'
import { handelSignup } from '../../../components/auth';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIslogin }) => {
  const navigate = useNavigate()
  const [f_name, setFName] = useState();
  const [l_name, setLName] = useState();
  const name = `${f_name} ${l_name}`
  const [email, setEmail] = useState();
  const [dob, setDOB] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  
  async function handleSubmit() {
    const result = await handelSignup(name, email, phone, dob, address, password)
    
    if(result.status){
      //alert(result.res.message)
      navigate('/')
    }
    
  }
  return (
    <div>
      <div className='flex items-center justify-center w-screen h-screen '>
        <div className='w-screen h-180 md:w-300 md:h-180 flex justify-center shadow-2xl'>

          <div className='w-[30%] md:w-[30%] sm:w-[30%] flex'>
            <img className='w-full h-full object-cover overflow-hidden' src="https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409471.jpg" alt="Shopping" />
          </div>


          <div className='bg-amber-300 w-[80%] md:w-[70%] flex items-center justify-center '>
            <div className='sm:border-0 lg:border md:border w-120 h-140 p-6 pt-5 flex flex-col duration-200 gap-3 md:text-2xl sm:text-[15px]'>

              <div >
                <h1 className=' text-[15px] cursor-default'>SignUp to</h1>
                <a className='text-3xl font-medium underline cursor-pointer' href='/'>Online Shopping</a>
              </div>

              {/* Name */}
              <div className='flex gap-3'>
                <input className='border p-1 w-[50%]' type="name" placeholder='first name' onChange={(e) => setFName(e.target.value)} />
                <input className='border p-1 w-[50%]' type="name" placeholder='last name' onChange={(e) => setLName(e.target.value)} />
              </div>

              <div>
                <input className='border p-1 w-full' type="email" placeholder='enter email' onChange={(e) => setEmail(e.target.value)} />
              </div>


              {/* Phone Number */}
              <div className='flex gap-3'>
                <select className='text-[15px] border'>
                  <option value="+91">+91</option>
                </select>
                <input className='border p-1 w-full no-spinner' onWheel={(e) => e.target.blur()} type="text" inputMode="numeric" placeholder='Phone number'
                  onKeyDown={(e) => {
                    if (e.key === "ArrowUp" || e.key === "ArrowDown") e.preventDefault();
                  }}
                  maxLength={10}
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, ""); // remove non-numbers
                    if (val.length <= 10) setPhone(val);           // only keep up to 10 digits                    
                  }}
                />
              </div>

              {/* DOB */}
              <div>
                <input className='border p-1 w-full font-light' placeholder='enter DOB' value={dob} type="date" name="dob" onChange={(e) => setDOB(e.target.value)} />
              </div>

              {/* Address */}
              <div>
                <input className='border p-1 w-full' type="text" placeholder='enter your address' onChange={(e)=>setAddress(e.target.value)} />
              </div>

              {/* PassWord Fiend */}
              <div className='flex w-full'>
                <input className='border p-1 w-full' type={show ? "text" : "password"} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
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

              {/* Confirm PassWord Fiend */}
              <div className='flex w-full'>
                <input className='border p-1 w-full' type="password" placeholder="enter confirm password" onChange={(e) => setPassword(e.target.value)} />
                {/* <button className='border px-3 border-l-0 cursor-pointer' onClick={() => setShow(!show)}>
                  {show ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  )}
                </button> */}
              </div>

              {/* Submit Button */}
              <div className='flex items-center justify-center'>
                <button className='border p-1 w-full hover:bg-amber-400 cursor-pointer' onClick={handleSubmit}>Sign Up</button>
              </div>

              {/* <div className="w-full h-[0.5px] bg-black"></div> */}

              <div className='text-[15px] flex items-center'>
                <span>Already have an account ?   <a className='text-blue-800 underline cursor-pointer' onClick={() => setIslogin(true)} href='/login'>Login</a></span>

              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Signup
