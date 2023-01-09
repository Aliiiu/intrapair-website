import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';

const HeroSection: FC<{
	showTitle?: boolean;
	title?: string;
	imgSrc?: string;
	header: string;
}> = ({ showTitle, title, header, imgSrc }) => {
	return (
		<div className='h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[420px] flex flex-col justify-center relative xl:mx-[114px] 2xl:mx-[0px]'>
			<Image
				src={imgSrc ? imgSrc : '/images/heroBanner.png'}
				alt=''
				fill
				className='hidden md:block'
			/>
			<Image src={'/images/bgBanner.png'} alt='' fill className='md:hidden' />
			<div className='z-[5]'>
				{showTitle && (
					<h1 className='text-xl text-center mb-5 font-encode text-secondaryBlue_03 font-bold'>
						{title}
					</h1>
				)}
				<h1
					className={`text-5xl xl:text-6xl max-w-[900px] mx-auto text-center mb-10 xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white ${
						imgSrc ? 'mt-[80px]' : ''
					}`}
				>
					{header}
				</h1>
			</div>
		</div>
	);
};

export default HeroSection;
