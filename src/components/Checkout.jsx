import { useRouter } from "next/navigation"


const Checkout = ({ total }) => {

  const router = useRouter();

  return (
<>
    <div className="w-full py-5 px-2 sm:p-5 border border-gray-300 shadow">
      <div className="flex justify-between items-center">
        <p className="sm:text-xl">Total Harga: {total}</p>
        <button onClick={() => router.push('https://wa.me/6285770274043?text=Saya ingin dibuatkan website ecommerce seperti yang sudah anda buat')} className="py-2 px-4 rounded-lg bg-rose-500 hover:bg-rose-500/80 text-white font-semibold">Checkout</button>
      </div>
    </div>
</>
  )
}

export default Checkout
