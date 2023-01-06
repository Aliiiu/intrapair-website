import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<section className='container m-auto   px-[30px] relative'>
			<div className='absolute sm:block hidden right-0 top-[-25px]'>
				<Image src={'/home/spiral.png'} width={200} height={200} alt='sprial' />
			</div>
			<div className=' flex items-center  justify-center sm:py-[120px] py-9 w-[100%] sm:w-[80%] m-auto'>
				<div className='flex flex-col gap-6 justify-center  text-center'>
					<h1 className='text-dark-blue text-[30px] xs:text-[40px] sm:text-[60px] mlg:text-[100px] sm:leading-[70px] leading-[40px] mlg:leading-[94px] font-milli'>
						ACCELERATING DIGITAL TRANSFORMATION
					</h1>
					<p className='text-dark-blue text-xl md:w-[70%] m-auto w-[100%]'>
						We partner with organizations & startups to accelerate and simplify
						their work processes by building innovative software solutions.
					</p>
					<button className='rounded-[41px]  text-base w-[202px] bg-dark-blue text-white py-[15px] m-auto'>
						Let&apos;s Talk
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
