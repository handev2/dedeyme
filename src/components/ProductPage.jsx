'use client';

import { useState } from "react";
import { useAllProductById } from "./service";
import { addToCart } from "@/utils/cart";
import Toast from "./Toast";

const ProductPage = (props) => {

  const [toast, setToast] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [warning, setWarning] = useState(false);
  if(quantity < 0) {
    setQuantity(0)
  }

  const {data: product} = useAllProductById();
  const [currentImg, setCurrentImg] = useState('thumbnail');

  const handleImgChange = (imgNumber) => {
    setCurrentImg(imgNumber)
  }

  const addQuantityValue = () => {
    setQuantity(quantity + 1)
    setWarning(false)
  }

  const addItemToCart = () => {
    if( quantity == 0 ) {
    setWarning(true)
    }else {
      const newItem = {
        name: product.title,
        image: product.thumbnail,
        price: product.price,
        stock: product.stock,
        quantity: quantity
      }
      addToCart(newItem)
      setToast(true)
      setTimeout(() => {
        setToast(false)
      }, 3000)
    }

  }

  return (
<>

      {toast ? <Toast /> : ''}
      {/* <Toast /> */}

        <section className="container my-5 px-5 mx-auto flex flex-col lg:flex-row justify-center gap-3 sm:gap-6 lg:gap-10">

          <div className="PRODUCT w-[100%] lg:w-[25%] relative">
            <div className="image-product border border-gray-300 rounded shadow w-full">
              <img src={`https://i.dummyjson.com/data/products/${product.id}/${currentImg}.jpg`} alt="" className="w-full" />
            </div>
            <div className="switch bg-white flex justify-center mt-3 gap-3">
              {[1,2,3,'thumbnail'].map((imgNumber) => (
                <img
                  key={imgNumber}
                  onClick={() => handleImgChange(imgNumber)} 
                  src={`https://i.dummyjson.com/data/products/${product.id}/${imgNumber}.jpg`} alt="" className="w-[60px] border border-slate-400 cursor-pointer" />
              ))}
            </div>

            <div className="discound absolute -top-5 -left-5 flex items-center justify-center bg-rose-400 text-xs sm:text-lg text-white h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] rounded-full">
              <h2>{props.discount}%</h2>
            </div>
          </div>

          <div className="DESCRIPTION w-[100%] lg:w-[40%] bg-white p-3 border border-gray-400/50 rounded">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-rose-400">{props.title}</h1>
            <div className="stok-deliver flex gap-20 py-6">
              <div className="stok flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather text-rose-500 feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p className="text-sm">{props.stok}</p>
              </div>
              <div className="delivery flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather text-gray-600 feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <p className="text-xs">Bebas Biaya Pengiriman</p>
              </div>
            </div>
            <div className="variant">
              <h2 className="font-bold mt-3">Description:</h2>
              <h5 className="ukuran p-2 rounded-md cursor-pointer w-[30%] text-gray-800 text-sm">{props.beban}</h5>
            </div>
            <div className="desc">
              <p className="text-gray-800 text-sm">{props.description}</p>
              <div className="subdesc mt-5">
                <h3>Category: {props.category}</h3>
                <h3>Brand: {props.brand}</h3>
              </div>
            </div>
          </div>

            {/* ADD PRODUCT TO CART */}
          <div className="PRICE bg-white w-[100%] lg:w-[25%] h-[50%] flex flex-col items-center px-3 pb-10 pt-5 border border-gray-400/50 rounded">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-700">$. {props.price}</h1>

            <div className="plus-minus flex justify-center items-center my-5">
              <button type="button" onClick={() => setQuantity(quantity - 1)} className="text-gray-900 hover:bg-slate-200 mx-3 p-1 px-2 rounded-full text-2xl">-</button> 
                <input value={quantity} type="number" className="outline-none border border-gray-400 text-center rounded w-[50%] focus:border-rose-500" />
              <button type="button" onClick={addQuantityValue} className="text-gray-900 hover:bg-slate-200 mx-3 p-1 px-2 rounded-full text-2xl">+</button>
            </div>
            <div onClick={addItemToCart} className="bg-rose-400 hover:bg-rose-500 font-bold text-white text-center cursor-pointer rounded-md p-2 w-full">Tambah ke Keranjang</div>
                <p className={warning ? `text-red-500 mt-5 font-semibold` : 'hidden'}>Tambah Jumlah Produk!</p>
          </div>

        </section>
</>
  )
}

export default ProductPage
