'use client';

import { useAllCategories } from "./service"
import Link from "next/link";

const CategoryPage = () => {

    const {data: categories} = useAllCategories();

  return (
<>
    <div className="flex justify-center bg-[#eee] my-20 flex-wrap gap-3 sm:gap-6">
        
        {
            categories.map((data) => (
    <Link href={`/products/${data.id}`} key={data.id} className="card-sx flex flex-col justify-between rounded-md w-[150px] sm:w-48 bg-white shadow hover:shadow-lg transition-all border-2 duration-300 hover:-translate-y-2 hover:border-rose-500 cursor-pointer">
        <div className="img-item border-b-2 duration-300">
            <img src={data.thumbnail} alt="" className="border-b-2 object-cover mx-auto h-[150px] sm:h-[200px] rounded-md hover:scale-95 duration-300" />
        </div>
        <div className="title px-2 mt-auto pt-3">
            <h3 className="text-sm sm:text-base">{data.title}</h3>
            <h4 className="font-medium flex text-rose-500 text-xs sm:text-lg"><p className="text-xs sm:text-sm font-normal">$.</p>{data.price}</h4>
        </div>
            <span className="text-[10px] sm:text-xs ml-auto px-2 sm:px-3 py-[2px] bg-rose-400/80 mt-[6px] sm:mt-3 sm:py-1 text-white rounded">{data.rating}</span>
    </Link>
        ))}
    </div>
</>
  )
}

export default CategoryPage