import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import BtmNav from '@/components/BtmNav'
import { Suspense } from 'react'
import Loading from './Loading'
import { Poppins } from "next/font/google"
// import Head from 'next/head'

const poppins = Poppins({
  weight: ['400','600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Indbuyme - Indonesia Ecommerce',
  description: 'Produk Produk Berkualitas Disini',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <Suspense fallback={<Loading />}>
              <body className={poppins.className}>
                  <Navbar />
                    <div>
                      {children}
                    </div>
                  <BtmNav />
                  <Footer />
                </body>
          </Suspense>
    </html>
  )
}
