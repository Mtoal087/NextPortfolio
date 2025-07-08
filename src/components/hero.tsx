import React from 'react'

const HeroElement = () => {
    return (
        <div className='relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1'>
            <p className='text-xl mb-5'>Hi, I'm Matthew Toal.</p>
            {/* <h1 className='heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg'></h1> */}
            <h1 className='heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg'>
                I enjoy <span className='text-secondary'>building</span> software <span className='text-secondary'>products</span>, <span className='text-secondary'>websites</span>, and <span className='text-secondary'>tools</span>.
            </h1>
            <a href="#tools">
                <div className='cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover-bg-secondary hover:text-white hover-border-secondary transition-colors'>Tell me more</div>
            </a>
        </div>
    )
}

export default HeroElement