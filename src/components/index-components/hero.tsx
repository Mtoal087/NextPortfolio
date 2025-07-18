import Link from 'next/link';
import React from 'react';
import WifiDoodle from '../hero-components/wifiDoodle';
import ComputerDoodle from '../hero-components/computerDoodle';
import GlobeDoodle from '../hero-components/globeDoodle';

const HeroElement = () => {
	return (
		<div className="hero-animate overflow-hidden">
			<div className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1 overflow-hidden">
				<p className="text-xl mb-5">Hi, I&apos;m Matthew Toal.</p>
				<h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
					I&apos;m a{' '}
					<span className="text-secondary">software engineer</span>{' '}
					that enjoys <span className="text-secondary">learning</span>{' '}
					and <span className="text-secondary">developing</span> tools
					to <span className="text-secondary">help</span> others.
				</h1>
				<WifiDoodle />
				<ComputerDoodle />
				<GlobeDoodle />
				<Link href="#tools">
					<div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover-bg-secondary hover:text-white hover-border-secondary transition-colors">
						Tell me more
					</div>
				</Link>
			</div>
		</div>
	);
};

export default HeroElement;
