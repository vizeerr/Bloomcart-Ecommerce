/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useRef, } from 'react';
import Image from 'next/image'
import { AiOutlineTag,AiOutlineShoppingCart,AiOutlineCheckCircle,AiOutlineClose,AiOutlinePlus,AiOutlineMinus }  from 'react-icons/Ai';
import ProdImg from '../../images/mens/menstshirt/Men Colorblock Round Neck Cotton.webp'
import { useDispatch, useSelector } from 'react-redux';
import  {removeFromCart, fetchCart} from '../store/slice/cartSlice'


const page = () => {
  const cartData = useSelector((state)=> state.cart)
  const dispatch = useDispatch();

    const deleteItem = (id)=>{
      dispatch(removeFromCart(id))
    }
    const totalAmount = "585"
    const totalItems = "2"
    useEffect(()=>{
      dispatch(fetchCart())

    },[dispatch])
    
  return (
    <section class="text-gray-600 body-font overflow-hidden w-3/5 border m-auto mt-28 ">
  <div class="container px-5 py-5 mx-auto ">
    <div class="-my-8 divide-y-2 divide-gray-100 ">
      <div class="py-8 flex flex-wrap md:flex-nowrap gap-5">
        <div class="md:w-1/3 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <div className='border p-3'>
            <h5 className='text-xs'>COUPONS</h5>
            <div className="mt-3 flex justify-between">
                <p className='flex gap-1 text-gray-600 text-sm'> <AiOutlineTag size={20}/> Apply Coupons</p>
                <button className='bg-rose-500 w-30 text-white rounded-full flex justify-between items-center gap-2 px-4 py-2 text-xs'> Apply </button>
            </div>
          </div>
          <div className='border p-3 mt-5'>
            <h5 className='text-xs'>PRICE DETAILS (1 item)</h5>
            <div className='flex justify-between mt-3 text-sm'>
              <p>Total MRP</p>
              <p>$500</p>
            </div>
            <div className='flex justify-between mt-3 text-sm'>
              <p >Discount on MRP</p>
              <p className='text-green-500'>-$150</p>
            </div>
            <div className='flex justify-between mt-3 text-sm'>
              <p>Coupon Discount</p>
              <p className='text-green-500'>-$50</p>
            </div>
            <hr className='mt-3' />
            <div className='flex justify-between mt-3 text-sm text-black'>
              <p > <b>Total Amount</b></p>
              <p> <b>$360</b></p>
            </div> 
            <button className='mt-5 bg-rose-500 w-full text-white rounded-full text-center px-4 py-2 text-sm'> PLACE ORDER </button>
          </div>

        </div>
        <div class="md:flex-grow">
        {cartData=='' && <p className='text-center'>No items in the cart</p> }
          {
            cartData.map((item)=>{
              return <div key={item.id} className='flex border p-2 bg-white align-middle items-center mb-5 justify-start gap-4'>
              <div>
                <Image src={ProdImg} alt='' width={180} height={100}></Image>
              </div>
              <div className='text-sm w-full'>
              <AiOutlineClose className='float-right' onClick={()=>{deleteItem(item.id)}}></AiOutlineClose>
                <h4 className='text-black m-0'> Roadster </h4>
                <p className='mt-1'> {item.name}</p>
                <p className=' text-sm mt-1'>$ {item.price} </p>
                <div className='flex w-28 justify-between text-xs mt-2 bg-gray-100 p-2'>
                <AiOutlineMinus/>
                 <p>1</p>
                <AiOutlinePlus/>
                </div>
                <div className='mt-3 flex gap-1 align-middle'>
                <AiOutlineCheckCircle size={15}/>
                <p className="text-xs text-gray-500  ">  15 Day Return Policy </p>
                </div>
              </div>
            </div>
            })
          }
        </div>
      </div>
      
    </div>
  </div>
</section>
  )
}

export default page
