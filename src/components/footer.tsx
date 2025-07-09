import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col w-screen px-5 py-10 border-t border-secondary z-5'>
            <div className='w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start'>
                <div className='text-left mb-5 sm:mb-0'>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">Pages</h4>
                    <div>
                        <div className="my-4"><a href="/">Home</a></div>
                        <div className="my-4"><a href="/project">Projects</a></div>
                        <div className="my-4"><a href="/other">Others</a></div>
                        <div className="my-4"><a href="/blog">Blog</a></div>
                    </div>
                </div>
                <div className='text-left mb-5 sm:mb-0'>
                    <h4 className="uppercase text-gray-400 text-sm font-bold">Socials</h4>
                    <div>
                        <div className="my-4">
                            <a href="https://github.com/mtoal087" target='_blank' className='items-center flex'>Github</a>
                        </div>
                        <div className="my-4">
                            <a href="mailto:mtoal087@gmail.com" target="_blank" className="items-center flex">Email</a>
                        </div>
                        <div className="my-4">
                            <a href="https://www.linkedin.com/in/mtoal087/" target="_blank" className="items-center flex">LinkedIn</a>
                        </div>
                    </div>
                </div>
                {/* <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
                    <h4 className="uppercase text-gray-400 text-sm font-bold">Support My Work</h4>
                    <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
                        <div>
                            <a target="_blank">
                                <img src="/static/misc/paypal.svg" className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity" />
                            </a>
                        </div>
                        <p className="text-fun-gray text-xs pt-1">I appreciate your support very much! 💙</p>
                    </div>
                </div> */}
            </div>
            <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-gray-400 border-t border-gray">
                <div className="flex flex-col items-center justify-center ">
                    <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
                        Made with <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="40" className="invert" title="NextJS" />
                                <span className="sr-only">NextJS</span>
                            </span>
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="26" title="React" />
                                <span className="sr-only">React</span>
                            </span>
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="26" title="TailwindCSS" />
                                <span className="sr-only">TailwindCSS</span>
                            </span>
                        </div>
                    </div>
                    <div className="mt-2 text-xs ">Made by <a href="mailto:mtoal087@gmail.com" className="text-gray-300 font-bold">Matthew Toal</a>. All rights reserved.
                    </div>
                </div>
            </div >
        </footer>
    )
}

export default Footer