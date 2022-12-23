import Image from 'next/image';
import React, { FC } from 'react';

const HeroSection: FC<{
	showTitle?: boolean;
	title?: string;
	header: string;
}> = ({ showTitle, title, header }) => {
	return (
		<div className='py-14 md:py-16 xl:py-20 relative xl:mx-[54px]'>
			<Image
				src={'/images/heroBanner.png'}
				alt=''
				fill
				className='hidden md:block'
			/>
			<Image src={'/images/bgBanner.png'} alt='' fill className='md:hidden' />
			{showTitle && (
				<h1 className='text-xl text-center mb-5 font-encode text-secondaryBlue_03 font-bold'>
					{title}
				</h1>
			)}
			<h1 className='text-4xl sm:text-5xl xl:text-6xl max-w-[900px] mx-auto text-center mb-10 xl:leading-[80px] font-extrabold font-milli font-outline-2 text-white'>
				{header}
			</h1>
		</div>
	);
};

export default HeroSection;
