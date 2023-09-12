'use client';

import { CategoryData } from "@/assets/Data";
import Link from "next/link";

const Category = () => {

  return (
<> 
    {
        CategoryData.map((product, index) => (
            <Link scroll href={`/category/${product.category}`} key={index} className="bg-white relative max-lg:mb-8 hover:border-rose-500 category w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px] border-2 hover:-translate-y-3 hover:scale-105 duration-300 shadow cursor-pointer hover:shadow-lg p-2 sm:p-3 rounded-lg">
                <img alt="" src={product.image} className="w-full h-full object-contain" />
                <h5 className="text-[12px] md:text-sm lg:text-base absolute -bottom-7  md:-bottom-10 text-gray-600 lg:font-medium hover:text-rose-500 hover:border-rose-500 duration-300 flex items-end h-[95px] sm:h-[125px] lg:h-[190px] w-full text-center p-1 border-b-2">{product.title}</h5>
            </Link>
    ))}
</>
  )
}

export default Category