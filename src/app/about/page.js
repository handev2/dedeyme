import pp from "../../assets/0_pp.png"
import Image from "next/image"

export default function About() {
    return (
<main className="flex min-h-screen items-center justify-center bg-[#eee]/60 p-6 lg:p-24">
    <section class="ABOUT py-10 px-2 lg:px-12 bg-white rounded-lg hover:shadow-lg flex flex-col items-center gap-5">
        <div class="title flex flex-col items-center gap-2">
            <Image src={pp} alt="" class="w-52 rounded-full border-2 border-rose-500" />
            <p class="text-sm italic font-bold text-gray-700/80">( Web developer )</p>
        </div>
        <p class="lg:px-40 text-center leading-8  sm:text-lg text-gray-800">Saya Membuat Website Ini Sebagai Bahan Portofolio Saya, Dengan Framework <span class="text-rose-500"> Next JS Dan Tailwindcss </span> Website Ini Sudah <span class="text-rose-500">Responsive (Menyesuaikan dengan perangkat yang di pakai)</span> Website Ini Masih dalam Masa Pengembangan Jadi Mohon Maaf Bila Terdapat Fitur Yang Masih Belum Berfungsi Saya Sedang Berusaha Mengembangkan Website Ini Dengan Fitur Fitur Menarik</p>
  </section>
</main>
    )
}