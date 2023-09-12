
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import Recomendations from "@/components/Recomendations";

export default function Home() {
  return (
    <main>

      {/*  Carousel */}
        <div className="lg:container lg:px-10 lg:mx-auto carousel-banner mt-5 lg:mt-10 h-[180px] sm:h-[300px] md:h-[400px] overflow-hidden object-cover">
          <Carousel />
        </div>

          <div className="py-4 sm:py-10 bg-[#eee]/60">
            <h2 className="text-center text-rose-500 text-lg sm:text-3xl mt-5 mb-3 sm:mt-20 sm:mb-8">Kategori</h2>
            <div className="flex gap-3 flex-wrap lg:gap-5 justify-center mb-5">
              <Category />
            </div>
          </div>

            <div className="bg-[#eee]/60 flex justify-center">
              <a href="/allproducts" className="rounded bg-white mx-auto sm:text-lg py-3 px-6 border hover:bg-gray-200 text-gray-800">Lihat Selengkapnya</a>
            </div>

            <div className="sm:py-14 bg-[#eee]/60 w-full">
              <h1 className="text-center text-rose-500 pb-6 text-2xl sm:text-3xl">Rekomendasi</h1>
                <Recomendations />
            </div>

            <div className="bg-[#eee]/60 flex justify-center">
              <a href="/allproducts" className="rounded bg-white mx-auto sm:text-lg py-3 px-6 border hover:bg-gray-200 text-gray-800">Lihat Selengkapnya</a>
            </div>

            <div className="pt-8 sm:pt-32 bg-[#eee]/60">
              <Banner />
            </div>


    </main>
  )
}
