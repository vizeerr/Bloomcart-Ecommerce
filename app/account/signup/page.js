/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const [Name,setName] = useState()
  const [Email,setEmail] = useState()
  const [PhoneNumber,setPhoneNumber] = useState() 
  const [Password,setPassword] = useState()
  const handleChange = (e) =>{
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }if (name === 'email') {
      setEmail(value);
    } if (name === 'phonenumber') {
      setPhoneNumber(value);
    } if (name === 'password') {
      setPassword(value);
    }

  }
  const handleForm = (e) =>{
    e.preventDefault();
    const body = {Name,Email,PhoneNumber,Password}
    console.log(body);
  axios.post('http://localhost:3000/api/account/signup',body)
  .then(function (response) {
    console.log(response);
    toast("Please Check Email To Confirm",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  })
  .catch(function (error) {
    console.log(error);

  });
  // setEmail('')
  // setName('')
  // setPassword('')
  // setPhoneNumber('')
}
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-3xl font-bold text-black">Sign Up</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" method="POST" onSubmit={handleForm}>
    <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2" >
          <input value={Name} onChange={handleChange} id="name" name="name" type="name" autoComplete="name" required className="block w-full pt-2 rounded-full border-0 py-1.5 px-3  px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2" >
          <input value={Email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full pt-2 rounded-full border-0 py-1.5 px-3  px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="phonenumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
        <div className="mt-2">
          <input value={PhoneNumber}  onChange={handleChange} id="phonenumber" name="phonenumber" type="number" autoComplete="name" required className="block w-full pt-2 rounded-full border-0 py-1.5 px-3  px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
          <input value={Password} onChange={handleChange}  id="password" name="password" type="password"  required className="block w-full pt-2 rounded-full border-0 py-1.5 px-3  px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
        <div className="mt-2">
          <input id="cpassword" name="cpassword" type="password" required className="block w-full pt-2 rounded-full border-0 py-1.5 px-3  px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
      <button type='submit' className='bg-rose-500 w-full mt-2 text-white rounded-full  text-center px-4 py-2 text-sm'> Sign Up </button>
      </div>
    </form>

    <p className="mt-5 text-center text-sm text-gray-500">
      Already Have An Account ? 
      <Link href="/account/login" className="font-semibold leading-6 text-rose-500 hover:text-indigo-500"> Log In ! here</Link>
    </p>
  </div>
</div>
  )
}

export default page
