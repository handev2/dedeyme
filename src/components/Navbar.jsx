'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => { 
  const router = useRouter();

  const [search, setSearch] = useState('laptop');

  const handleInput = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/searching/products/${search}`)
  }

  return (
<>
    <nav className="sticky top-0 z-30 bg-white">
        <div className="container flex items-center justify-between mx-auto sm:px-10 px-2 py-4">
          <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-gray-800"><span className="text-rose-500">Ind</span>buyme</span>
          </div>

        {/* SEARCHING */}
          <form onSubmit={handleSubmit} className="flex gap-1 w-full max-lg:ml-3 lg:w-[35%] xl:w-1/2 lg:mx-auto">
            <input onChange={handleInput} className="w-full border rounded border-gray-300 focus:outline-rose-500 px-3 bg-gray-50" type="text" placeholder="Samsung..." />
            <button type="submit" className="p-2 px-4 m-[2px] sm:p-3 sm:px-5 rounded hover:bg-rose-500/80 text-white bg-rose-500"><i class="fa-solid fa-magnifying-glass text-lg sm:text-xl"></i></button>
          </form>


          <div className="w-full hidden lg:block md:w-auto text-sm ms-auto">
            <ul className="font-medium flex flex-col md:p-0 mt-4 py-5 items-center md:flex-row gap-5">
              <li>
                <a href={'/'} className="hover:text-rose-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href={'/about'} className="hover:text-rose-500">About</a>
              </li>
              {/* <li className="flex gap-2">
                <a href={'/auth/register'} className="block rounded py-2 px-4 bg-rose-500 text-white hover:bg-rose-500/80 transition-all">Register</a>
                <a href={'/auth/login'} className="block rounded py-2 px-4 border border-rose-500 hover:text-white hover:bg-rose-500 transition-all">Login</a>
              </li> */}
              <a href={'/cart'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 text-rose-500 hover:text-rose-400 cursor-pointer" fill="currentColor"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              </a>
            </ul>
          </div>

        </div>
      </nav>
</>
  )
}

export default Navbar