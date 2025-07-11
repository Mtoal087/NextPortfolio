import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col w-screen px-5 py-10 border-t border-secondary z-5'>
            <div className='w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start'>
                <div className='text-left mb-5 sm:mb-0'>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">Pages</h4>
                    <div>
                        <div className="my-4"><Link href="/">Home</Link></div>
                        <div className="my-4"><Link href="/project">Projects</Link></div>
                        <div className="my-4"><Link href="/other">Others</Link></div>
                        <div className="my-4"><Link href="/blog">Blog</Link></div>
                    </div>
                </div>
                <div className='text-left mb-5 sm:mb-0'>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">Socials</h4>
                    <div>
                        <div className="my-4">
                            <Link href="https://github.com/mtoal087" target='_blank' className='items-center flex'>Github</Link>
                        </div>
                        <div className="my-4">
                            <Link href="mailto:mtoal087@gmail.com" target="_blank" className="items-center flex">Email</Link>
                        </div>
                        <div className="my-4">
                            <Link href="https://www.linkedin.com/in/mtoal087/" target="_blank" className="items-center flex">LinkedIn</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-gray-400 border-t border-gray">
                <div className="flex flex-col items-center justify-center ">
                    <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
                        Made with <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
                            <span>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={40} height={40} className="invert" title="NextJS" alt='Nextjs' />
                                <span className="sr-only">NextJS</span>
                            </span>
                            <span>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={26} height={26}  title="React" alt='React' />
                                <span className="sr-only">React</span>
                            </span>
                            <span>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width={26} height={26} title="TailwindCSS" alt='TailwindCSS' />
                                <span className="sr-only">TailwindCSS</span>
                            </span>
                        </div>
                    </div>
                    <div className="mt-2 text-xs ">Made by <Link href="mailto:mtoal087@gmail.com" className="text-gray-300 font-bold">Matthew Toal</Link>. All rights reserved.
                    </div>
                </div>
            </div >
        </footer>
    )
}

export default Footer