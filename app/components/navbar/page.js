"use client"
import { useEffect, useRef,useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineShoppingCart,AiOutlineClose,AiOutlinePlus,AiOutlineMinus }  from 'react-icons/Ai';
import {PiUserCircleLight} from 'react-icons/Pi';
import ProdImg from '../../../images/mens/menstshirt/Men Colorblock Round Neck Cotton.webp'
import { useDispatch, useSelector } from 'react-redux';
import  {removeFromCart, fetchCart} from '../../store/slice/cartSlice'
import { logoutUser } from '../../store/slice/userSlice';
const Navbar = () => {
    const [dropdown,setDropdown] = useState(false)
    const cartData = useSelector((state)=> state.cart)
    const getLogindata = useSelector((state)=>state.user )
    const isLogin = getLogindata.userLogin
   
    let totalAmount = 0
    let totalItems = 0

    cartData.forEach((item) => {
      totalAmount += parseFloat(item.price);
      totalItems += item.quantity;
    });
  
    totalAmount = totalAmount.toFixed(2);

    const ref = useRef();
    const showCart = () =>{
        ref.current.classList.remove('hidden')
    }
    const hideCart = () =>{        
        ref.current.classList.add('hidden')
    }
    const dispatch = useDispatch();

    const deleteItem = (id)=>{
      dispatch(removeFromCart(id))
    }
    
    const logOut =()=>{
      dispatch(logoutUser())
      console.log("logout");
    }
    
    useEffect(()=>{
      dispatch(fetchCart())
      // dispatch(fetchUser())
    },[dispatch])

  return (
    <header className="text-gray-600 body-font fixed w-full bg-white m-0 p-0 top-0 z-10">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <div className=" ml-3 flex flex-col justify-start">
      <Link href="/"><span className=" text-2xl">BloomCart</span></Link>
      <p className=" text-xs text-gray-500">Style On The Way</p>
      </div>
    </div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/"><p className="mr-5 hover:text-gray-900">Home</p></Link>
      <p className="mr-5 hover:text-gray-900">Mens</p>
      <p className="mr-5 hover:text-gray-900">Womens</p>
      <Link href="/account/login"><p className={`mr-5 ${!isLogin?"":"hidden" } hover:text-gray-900`}>Login</p></Link>
      <div onMouseLeave={()=>{setDropdown(false)}} size={30} className={`absolute ${dropdown?"visible":"hidden"} right-52 bg-zinc-200 rounded-md top-16 shadow-lg`}>
        <div>
          <ul className=' text-sm text-left w-28'>
            <li className=' bg-gray-100   px-3 py-2 mx-2 my-2 rounded-md'> Account</li>
            <a onClick={logOut}><li className=' bg-gray-100  px-3 py-2 mx-2 my-2 rounded-md'> Log Out</li></a>
          </ul>
        </div>
      </div>
      <PiUserCircleLight className={`mr-5 ${isLogin?"":"hidden"} text-pink-600 `} onMouseEnter={()=>{setDropdown(true)}} size={30}/>
    </nav>

    <div onMouseEnter={showCart}   className='flex  bg-gray-100 p-2 hover:bg-gray-200 '>
        <Link href="/cart"><div className='flex'>
            <p className='m-1 text-sm'>{totalAmount}$</p>
            <p className='m-1 text-sm text-gray-400'>{totalItems} items</p>
        </div></Link>
        <a className="inline-flex items-center border-0 py-1 px-3">
            <AiOutlineShoppingCart/>    
        </a>
        <div ref={ref} onMouseLeave={hideCart} className='absolute hidden  z-10 right-0 p-3 bg-gray-100 m-5 top-14 shadow-gray-200 shadow-md'>
          {cartData=='' && <p className='text-center'>No items in the cart</p> }
          {
            cartData.map((item)=>{
              return <div key={item.id} className='flex border p-2 bg-white align-middle items-center mb-2 mt-2 justify-start gap-4'>
              <div>
                <Image src={ProdImg} alt='' width={100} height={100}></Image>
              </div>
              <div className='text-sm w-full'>
              <AiOutlineClose className='float-right' onClick={()=>{deleteItem(item.id)}}></AiOutlineClose>
                <p> {item.name}</p>
                <p className='text-gray-500 text-xs mt-1'>$ {item.price} </p>
                <div className='flex w-1/2 justify-between text-xs mt-2 bg-gray-100 p-2'>
                <AiOutlineMinus/>
                 <p>1</p>
                <AiOutlinePlus/>
                </div>
              </div>
            </div>
            })
          }
          <div className='flex justify-between mt-5 mb-2 gap-2'>
            <button className='bg-rose-500 w-30 text-white rounded-full flex justify-between items-center gap-2 px-4 py-2 text-xs'> <AiOutlineShoppingCart/> Checkout </button>
            <button className=' bg-zinc-800 w-30 text-white rounded-full flex justify-between items-center gap-2 px-4 py-2 text-xs'> <AiOutlineShoppingCart/> View Cart </button>
          </div>
      </div>
        
      </div>
    </div>
    
      
</header>
    
  )
}

export default Navbar
// export default dynamic (() => Promise.resolve(Navbar), {ssr: false})
