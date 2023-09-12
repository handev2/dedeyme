'use client';

import { style } from "./style";
// import Link from "next/link"

const BtmNav = () => {

  return (
<div className={`h-[40px] pt-5 pb-16 px-3 border-t border-gray-400 fixed bottom-0 bg-white z-50 w-full lg:hidden`}>
  <div className={`${style.container} flex justify-between items-center text-gray-600 hover:text-gray-800 gap-3`}>
    <a href={'/'} className="menuu text-center text-gray-600 hover:text-rose-500">
      <i class="fa-solid fa-house text-[22px]"></i>
      <p className="text-sm">Home</p>
    </a>
    <a href={'/allproducts'} className="menuu text-center text-gray-600 hover:text-rose-500">
      <i class="fa-solid fa-list text-[22px]"></i>
      <p className="text-sm">Semua Produk</p>
    </a>
    <a href={'/cart'} className="menuu text-center text-gray-600 hover:text-rose-500">
      <i class="fa-solid fa-cart-shopping text-[22px]"></i>
      <p className="text-sm">Keranjang</p>
    </a>
    <a href={'/about'} className="menuu text-center text-gray-600 hover:text-rose-500">
      <i class="fa-solid fa-user text-[22px]"></i>
      <p className="text-sm">Profile</p>
    </a>
  </div>
</div>
  )
}

export default BtmNav