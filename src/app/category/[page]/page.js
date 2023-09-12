'use client';

import Loading from "@/app/Loading";
import CategoryPage from "@/components/CategoryPage"
import { useLoader } from "@/components/Loader";

export default function Category() {    

    const loading = useLoader(2000);

    return(
<div>
        {
            loading ? <Loading /> : ''
        }
        
        <CategoryPage />
</div>
    )
}

