import Link from 'next/link'
import React from 'react'

const Mail = () => {
    return (
        <div className='pt-14 pb-40'>
            <h2 className='text-4xl md:text-5xl font-bold mb-10'>Interested in working together?</h2>
            <Link href="mailto:mtoal087@gmail.com" className="cursor-pointer font-bold whitespace-nowrap mt-6 px-8 py-3 text-white border-2 rounded-full border-white hover-bg-secondary hover-border-secondary transition-colors">Get in Touch</Link>
        </div>
    )
}

export default Mail