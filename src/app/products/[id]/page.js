'use client';

import ProductPage from "@/components/ProductPage";
import { useLoader } from "@/components/Loader";
import Loading from "@/app/Loading";
import { useAllProductById } from "@/components/service";

export default function ProductsPage() {

    const {data: product} = useAllProductById();
    const loading = useLoader(2000)

    return(
    <>

        {
            loading ? <Loading /> : ''
        }

        <div className="bg-[#eee]/50 pt-14 pb-32">
            <ProductPage 
                title={product.title}
                stok={`Stock ` +product.stock}
                description={product.description}
                price={product.price}
                discount={product.discountPercentage}
                brand={product.brand}
                category={product.category}
            />
        </div>
    </>
    )

}