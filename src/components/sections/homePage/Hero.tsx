import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../../UI/widget/button/Button';

const Hero = () => {
	return (
		<section
			className='container mx-auto px-4 h-[calc(60vh-80px)] md:h-[calc(100vh-80px)] flex flex-col items-center justify-center relative'
			id='hero'
		>
			<div className='absolute sm:block hidden right-0 2xl:right-10 top-[0px]'>
				<Image src={'/home/spiral.png'} width={200} height={200} alt='sprial' />
			</div>
			<div className='flex items-center mx-auto justify-center sm:py-[120px] py-9 w-[100%] sm:w-[80%] '>
				<div className='flex flex-col gap-6 justify-center text-center'>
					<h1 className='text-dark-blue text-[30px] xs:text-[40px] sm:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] sm:leading-[70px] leading-[40px] mlg:leading-[94px] font-milli'>
						ACCELERATING DIGITAL TRANSFORMATION
					</h1>
					<p className='text-dark-blue text-sm md:text-xl md:w-[70%] m-auto w-[100%]'>
						We partner with organizations & startups to accelerate and simplify
						their work processes by building innovative software solutions.
					</p>
					{/* <button className='rounded-[41px] text-base w-[202px] bg-dark-blue text-white py-[15px] m-auto'>
						Let&apos;s Talk
					</button> */}
					<Link href={'/contact-us'} className='mx-auto'>
						<Button
							text="Let's Talk"
							style='bg-dark-blue border mx-auto hover:bg-transparent w-[146px] lg:w-[201px] hover:border-dark-blue hover:text-dark-blue '
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
