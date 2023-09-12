'use client';

import Sidebar from "@/components/Sidebar";
import SearchResult from "@/components/SearchResult";
import Loading from "../Loading";
import { useLoader } from "@/components/Loader";
import { useAllProductsPage } from "@/components/service";

export default function AllProducts() {

    const {data: products} = useAllProductsPage();
    const loading = useLoader(2000);

    return(
    <>

{
    loading ? <Loading /> : ''
}

        <div className="w-full bg-rose-500">
            <div className="container mx-auto py-3 px-2 lg:px-10">
                <div className="flex gap-3 items-center">
                    <Sidebar />
                    <h2 className="sm:text-2xl text-white">Semua Kategori</h2>
                </div>
                <h2 className="text-white text-center mt-5 text-2xl">Semua Produk</h2>
                <hr className="opacity-100"/>
            </div>
        </div>



<div className="flex justify-center flex-wrap gap-3 sm:gap-6 py-20 bg-[#eee]/60 pb-32">
{
    products.map((product, idx) => (
            <SearchResult key={idx}
                id={product.id} 
                title={product.title}
                image={product.thumbnail}
                rating={product.rating}
                price={product.price}
            />
    ))
}
</div>
    </>
    )
}