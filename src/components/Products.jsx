'use client';

import { useAllProducts } from "./service"
import Link from "next/link";

const Products = () => {

    const {data: products} = useAllProducts();

  return (
<div className="flex justify-center w-full flex-wrap gap-3 sm:gap-6">
    {
        products.map((product, index) => (
        <Link href={`/products/${product.id}`} key={index} className="card-sx flex flex-col justify-between rounded-md w-[150px] sm:w-48 bg-white shadow hover:shadow-lg transition-all border-2 duration-300 hover:-translate-y-2 hover:border-rose-500 cursor-pointer">
            <div className="img-product border-b-2 duration-300">
                <img src={product.thumbnail} alt="" className="border-b-2 mx-auto object-cover h-[150px] sm:h-[200px] rounded-md hover:scale-95 duration-300" />
            </div>
            <div className="title px-2 mt-auto pt-3">
                <h3 className="text-sm sm:text-base">{product.title}</h3>
                <h4 className="font-medium flex text-rose-500 text-base"><p className="text-sm sm:text-base font-normal">$.</p>{product.price}</h4>
            </div>
                <span className="text-[10px] sm:text-xs ml-auto px-2 sm:px-3 py-[2px] bg-rose-400/80 mt-[6px] sm:mt-3 sm:py-1 text-white rounded">{product.rating}</span>
        </Link>
        ))
      }
</div>
  )
}

export default Products