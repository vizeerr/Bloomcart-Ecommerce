
import React from 'react'
import Image from 'next/image'
import ProdImg from '../../../images/mens/menstshirt/Men Colorblock Round Neck Cotton 2.webp'
import {AiFillStar} from 'react-icons/Ai';
import axios from 'axios';
import Link from 'next/link';

const ProductGrid = async() => {
    const response = await getData()
    const Products = response.data.Products
   
    return (
      <section className="text-gray-600 body-font mt-24">
        <div className="container w-10/12 m-auto">
          <h1 className="text-5xl text-center mt-4 mb-20">Mens Wears</h1>
          <div className="flex flex-wrap -m-4 justify-evenly">
            {Products.map((Product) => (
                <Link key={Product._id} href={`/product/${Product.slug}`} className="lg:w-1/5 md:w-1/2 p-4 m-2 w-full">
                <span className="block relative h-64 rounded overflow-hidden transition-all hover:grayscale"  >
                  <Image src={Product.image[0]} alt={Product.title}  height={800} width={300} />
                </span>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {Product.title.length>50?Product.title.slice(0,45)+"..." :Product.title}
                  </h2>
                  <p className="text-sm mt-1"> {Product.fabric}</p>
                  <div className='flex align-middle gap-2 mt-2 '>

                  <p className="m-0 text-sm">${Product.price}</p>
                  <span className="flex items-center m-0">
                    <AiFillStar className="text-yellow-400" />
                    <span className="text-gray-600 ml-1 text-xs">{Product.rating} | 45k</span>
                  </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <hr className="mt-16 mb-5" />
        </div>
      </section>
    );
}

export default ProductGrid


async function getData() {
  const res = await axios.get('http://localhost:3000/api/products/getproducts')
  if (!res) {
    throw new Error('Failed to fetch data')
  }
  return res;
}