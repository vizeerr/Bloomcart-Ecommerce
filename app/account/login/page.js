/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {loginUser} from '../../store/slice/userSlice';
const page = () => {
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('')
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    }if (name === 'password') {
      setPassword(value);
    }
  }
  const handleForm = async (e) =>{
    e.preventDefault();
    const body = {Email,Password}
    try {
      const response = await axios.post('http://localhost:3000/api/account/login',body)
        console.log("response: " + response.data.token);
        dispatch(loginUser())
        toast("Hello ! Welcome Back",{
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    
    } catch (error) {
      console.log(error);
    }
      
  // setEmail('')
  // setPassword('')
}
  return (
    <>
      <ToastContainer />
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-3xl font-bold text-black">Log In</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={handleForm}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={Email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-full border-0 py-1.5 px-3   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-rose-500 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input value={Password} onChange={handleChange}  id="password" name="password" type="password" autoComplete="current-password" required className=" block w-full rounded-full border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
      <button type='submit' className='bg-rose-500 w-full mt-2 text-white rounded-full  text-center px-4 py-2 text-sm'> Apply </button>
      </div>
    </form>

    <p className="mt-5 text-center text-sm text-gray-500">
      Did Not Have An Account Yet ? 
      <Link href="/account/signup" className="font-semibold leading-6 text-rose-500 hover:text-indigo-500"> Sign Up ! here</Link>
    </p>
  </div>
</div>
</>
  )
}

export default page
