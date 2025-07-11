"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import '../app/globals.css'
import Link from 'next/link';

const Navbar = () => {
    const currPath = usePathname();

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Career', href: '/career' },
        { label: 'Projects', href: '/project' },
        { label: 'Blog', href: '/blog' }
    ]

    return (
        <div className='hidden sm:block z-100'>
            <nav className='flex items-center justify-between'>
                <li className='list-none font-bold text-lg cursor-pointer'>
                    <span className='font-black text-xl flex items-center'>
                        <Link href="/">
                            {/* <img src="" alt="" className='mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500' /> */}
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">M</span>
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">a</span>
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">t</span>
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">t</span>
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">T</span>
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">o</span>
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">a</span>
                            <span className="hover-text-secondary hover:-translate-y-1 transition-all duration-500 hover:duration-100 inline-block">l</span>
                        </Link>
                    </span>
                </li>

                <ul className='flex items-center space-x-10'>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={`${
                                currPath === link.href ? 'opacity-100' : 'opacity-40 hover:opacity-100 transition-opacity'} list-none text-white p-4
                            }`}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                {/* for mobile devices */}
                {/* <button className='burger visible md:hidden' aria-label='Toggle menu' type='button'>
                    <svg className='h-5 w-5 absolute text-gray-100' width={20} height={20} viewBox='0 0 20 20' fill='none' data-hide='false'>
                        <path d="M2.5 7.5H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M2.5 12.5H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <svg className="h-5 w-5 absolute text-gray-100" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" data-hide="true"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
                </button> */}
            </nav>
        </div>
    )
}

export default Navbar