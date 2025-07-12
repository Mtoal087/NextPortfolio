import Link from 'next/link'
import React from 'react'

const Mail = () => {
    return (
        <div className='pt-14 pb-40'>
            <div className='w-full flex justify-center mb-10'>
                <svg width="316" height="28" viewBox="0 0 316 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-secondary'>
                    <path d="M5 15.8422C6.99 16.1722 14.28 16.8422 20.98 15.0172C26.5396 13.5028 32.96 8.86219 39.645 6.18219C43.7256 4.54627 46.99 4.84219 48.49 5.66719C53.3607 8.3461 50.66 14.8322 52.155 16.4972C58.9657 24.0823 80.3 15.8622 84.985 13.6822C90.599 11.0699 96.98 7.84219 101.315 7.01219C104.251 6.44995 106.99 7.50219 109.315 9.32719C115.367 14.0778 116.98 19.1622 122.975 20.8372C130.105 22.8294 144.24 19.2022 156.965 15.3522C163.513 13.371 171.64 11.1822 185.78 11.3372C192.243 11.408 194.98 19.1622 200.14 20.6722C209.595 23.439 214.64 19.8422 222.8 17.6872C231.404 15.4149 239.62 11.5222 250.13 9.01719C253.64 8.18069 260.28 7.84219 268.775 8.50219C276.721 9.11957 278.98 18.8222 284.14 22.3322C294.65 22.5122 299.32 21.8422 302.475 21.5122C304.31 21.1822 306.62 20.5222 311 19.8422" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-10'>Interested in working together?</h2>
            <Link href="mailto:mtoal087@gmail.com" className="cursor-pointer font-bold whitespace-nowrap mt-6 px-8 py-3 text-white border-2 rounded-full border-white hover-bg-secondary hover-border-secondary transition-colors">Get in Touch</Link>
        </div>
    )
}

export default Mail