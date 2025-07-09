import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ReactNode } from 'react'
import React from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <div className='w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible' style={{ maxWidth: '1200px' }}>
          <main className='p-5 w-full flex-1 text-center'>
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout