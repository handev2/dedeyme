import banner from "../assets/CAROUSEL/CAROUSEL-1.jpg"
import Image from "next/image"

const Banner = () => {
  return (
<>
    <div className="diskon">
    <div className="flex justify-center">
    <div className="box-img h-[200px] sm:h-[300px] relative overflow-hidden w-full">
        <h2 className="text-2xl sm:text-[40px] font-bold absolute text-white z-10 w-full bg-gradient-to-r from-gray-900 justify-center h-full leading-tight p-3  sm:p-5">Diskon dan dapatkan <br /> gratis ongkir <span className="text-rose-500">67%</span> <br /> dengan belanja <br /> menggunakan <span className="text-rose-500">gopay</span><br /> <button  className="text-[10px] sm:text-sm ms-auto font-normal sm:font-medium hover:bg-rose-500 bg-rose-600 py-1 px-2 sm:py-2 sm:px-4">Coba sekarang</button></h2>
        <div className="bg-gray-900/30 absolute left-0 top-0 w-full h-full"></div>
        <Image src={banner} className="w-full h-full object-cover" alt="" />
        </div>
    </div>
    </div>
</>
  )
}

export default Banner