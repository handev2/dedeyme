import Carts from "@/components/Carts";

export default function CartsPage() {
    return(
<>
        <div className="w-full pb-32 sm:pb-52 sm:p-5 bg-gray-50">
            <div className="container mx-auto">
                <div className="flex justify-between px-3 py-5">
                    <h2 className="text-xl sm:text-2xl">Shopping Cart</h2>
                    <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Ind<span className="text-rose-500">Buyme</span></h1>
                </div>
            <div className="px-2">
                <Carts />
            </div>
            </div>

        </div>
</>
    )
}