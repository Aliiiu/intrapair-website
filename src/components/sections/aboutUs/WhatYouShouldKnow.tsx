import {
	HiOutlineArrowLongLeft,
	HiOutlineArrowLongRight,
} from 'react-icons/hi2';
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';

const CarouselContent = () => (
	<div className='flex-1 flex flex-col bg-orange-200 max-w-[700px] overflow-hidden md:flex-row gap-10'>
		<div className='relative w-full sm:w-[400px] h-[400px] md:h-[500px] xl:h-[608px]'>
			<Image src={'/images/aboutIntrapair.png'} alt='' fill />
		</div>
		<div className='hidden xl:block relative w-[200px] h-[608px]'>
			<Image src={'/images/aboutIntrapair_2.png'} alt='' fill />
		</div>
	</div>
);

const WhatYouShouldKnow = () => {
	return (
		<div className='flex flex-col pb-16 md:pb-0 md:flex-row gap-10'>
			<div className='flex-1 flex flex-col justify-center'>
				<div className='flex flex-col gap-9'>
					<h2 className='font-semibold text-secondaryBlue_05 max-w-[415px] text-3xl lg:text-4xl font-encode '>
						What You Should Know about Intrapair
					</h2>
					<p className='text-secondaryBlue_05 max-w-[415px] '>
						At Intrapair, we believe firmly in the future of technology. This is
						why one of our objectives is to assist organizations in building
						exceptional digital products which would not only solve their
						business needs but also drive growth in their businesses.
					</p>
					<div className='flex gap-5 mb-4 md:mb-0 justify-between md:justify-start mt-12'>
						<HiOutlineArrowLongLeft className='text-secondaryBlue_05 text-4xl' />
						<HiOutlineArrowLongRight className='text-secondaryBlue_05 text-4xl' />
					</div>
				</div>
			</div>
			<div className='flex-1 flex flex-col max-w-[700px] overflow-hidden md:flex-row gap-10'>
				<div className='relative w-full sm:w-[400px] h-[400px] md:h-[500px] xl:h-[608px]'>
					<Image src={'/images/aboutIntrapair.png'} alt='' fill />
				</div>
				<div className='hidden xl:block relative w-[200px] h-[608px]'>
					<Image src={'/images/aboutIntrapair_2.png'} alt='' fill />
				</div>
			</div>
		</div>
	);
};

export default WhatYouShouldKnow;
