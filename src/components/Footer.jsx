

function Footer() {
  return (
<>
    <section className="footer px-4 sm:px-10 md:px-20 bg-gray-800 pt-[50px] pb-[120px] sm:pt-20 sm:pb-[50px]">
      <div className="footer-box flex max-lg:flex-col max-lg:gap-8 gap-5 justify-between text-white">
        <div className="box w-full lg:w-[40%]">
          <h3 className="font-bold text-3xl"><span className="text-rose-500">Ind</span>buyme</h3>
          <p className="mt-4 leading-8 w-full lg:w-[80%] text-slate-200">Belanja Di <span className="text-rose-500 font-bold">Ind</span>buy terasa lebih seru dan banyk gratis ongkir dengan menyediakan fitur yang termudah dan berbagai macam pembayaran termasuk COD ayo langsung belanja</p>
        </div>
        <div className="box w-full lg:w-[20%] flex gap-3 flex-col">
        <h3 className="font-bold text-xl mb-">Menu</h3>
        <a href={'/'} className="text-zinc-300 text-sm hover:text-white">Home</a>
        <a href={'/allproducts'} className="text-zinc-300 text-sm hover:text-white">All Category</a>
        <a href={'/cart'} className="text-zinc-300 text-sm hover:text-white">Keranjang</a>
        <a href={'/about'} className="text-zinc-300 text-sm hover:text-white">About</a>
        </div>
    
        <div className="box w-full lg:w-[40%]" id="kontak">
          <h3 className="font-bold text-xl">Contact Costumer Service</h3>
          <form className="flex flex-col gap-3 mt-5 text-black" >
            <input type="text" className="rounded border-rose-500 border p-2 outline-none focus:outline-rose-500" placeholder="Nama" />
            <input type="email" className="rounded border-rose-500 border p-2 outline-none focus:outline-rose-500" placeholder="Email" />
            <textarea class="p-2 border-rose-500 border focus:outline-rose-500 rounded" placeholder="Tulis pesan" id="" cols="30" rows="5"></textarea>
            
            <button class="py-2 mt-3 rounded px-4 border-none outline-none bg-rose-500 hover:bg-rose-600 w-28 text-white font-bold">Kirim</button>
          </form>
        </div>

      </div>
    </section>
</>
  )
}

export default Footer