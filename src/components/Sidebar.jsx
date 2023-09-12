'use client';

import Link from "next/link"
import { useState } from "react";
import { useAllCategoryList } from "./service";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const {data: categories} = useAllCategoryList();

    const showSidebar = () => {
        setSidebar(true)
    }

    const hideSidebar = () => {
        setSidebar(false)
    }

  return (
<>

        <i onClick={showSidebar} class="fa-solid fa-bars text-3xl text-white cursor-pointer"></i>

    <div className={sidebar ? `fixed bg-transparent top-0 z-50 left-0 h-screen w-full duration-300` : `duration-300 fixed bg-transparent z-50 left-[-100%] top-0 h-screen w-full`}>
        <div className="h-full w-full flex">
            <div className="w-[70%] lg:w-[30%] overflow-y-scroll bg-white relative">
                <div onClick={hideSidebar} className="absolute right-5 top-5 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"><i class="fa-solid fa-x text-xl"></i></div>
                <ul className="flex flex-col gap-2 p-2 mt-12 sm:p-5">

                    {
                        categories.map((category, idx) => (
                            <Link key={idx} href={`/allproducts/category/${category}`} className="text-lg hover:bg-rose-500 hover:text-white px-3 rounded-md py-2">{category}</Link>
                        ))
                    }

                </ul>
            </div>

            {/* CLOSE */}
            <div onClick={hideSidebar} className="w-[30%] overflow-y-hidden lg:w-[70%] bg-black/0 h-full"></div>
        </div>
    </div>

    <div className={sidebar ? `z-40 w-full fixed overflow-y-hidden h-screen top-0 left-0 bg-black/50` : `z-40 w-full h-screen fixed overflow-y-hidden hidden top-0 left-0 bg-black/-50`}></div>
</>
  )
}

export default Sidebar