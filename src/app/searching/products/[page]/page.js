'use client';

import SearchResult from "@/components/SearchResult";
import { useParams } from "next/navigation";
import Loading from "@/app/Loading";
import { useLoader } from "@/components/Loader";
import { useAllProducts } from "@/components/service";

export default function Searching() {
    const params = useParams();
    const paramsSearch = params.page;

    const {data: products} = useAllProducts();

    
    const FilteredElectronics = products.filter((item) => 
        item.title.toLowerCase().includes(paramsSearch)
        ||
        item.category.toLowerCase().includes(paramsSearch)
        );

    const loading = useLoader(2000);
    
    return(
<>

        {
            loading ? <Loading /> : ''
        }

    <div className="flex justify-center bg-[#eee] my-20 flex-wrap gap-3 sm:gap-6">
        {
            FilteredElectronics.map((phone, idx) => (
                    <SearchResult key={idx}
                        id={phone.id} 
                        title={phone.title}
                        image={phone.thumbnail}
                        rating={phone.rating}
                        price={phone.price}
                    />
            ))
        }
    </div>
</>
    )
}