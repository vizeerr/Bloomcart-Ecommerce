import Image from 'next/image'
import Category from './components/category/page'
import ProductGrid from './components/profuctgrid/page'

export default function Home() {
  return (
    <main>
      {/* <Carousel/> */}
    <Category/>
    <ProductGrid/>
   </main>
  )
}

