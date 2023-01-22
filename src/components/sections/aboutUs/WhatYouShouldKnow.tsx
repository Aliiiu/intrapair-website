import {
	HiOutlineArrowLongLeft,
	HiOutlineArrowLongRight,
} from 'react-icons/hi2';
import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

const WhatYouShouldKnowArray = [
	{
		id: 1,
		content:
			'At Intrapair, we believe firmly in the future of technology. This is why one of our objectives is to assist organizations in building exceptional digital products which would not only solve their business needs but also drive growth in their businesses.',
		imgSrc1: '/images/aboutIntrapair.png',
		imgSrc2: '/images/aboutIntrapair_2.png',
	},
	{
		id: 2,
		content:
			'As a remote company, we are very much invested in the career growth and progress of our team. We are equipped for excellence and that reflects in our enterprise products.',
		imgSrc1: '/images/whatYouShouldKnow2.png',
		imgSrc2: '/images/whatYouShouldKnow2-2.png',
	},
	{
		id: 3,
		content:
			'We believe that collaborative work, open discussions, and sharing of insights are the key to building a tech-inclined community. You are welcome to contribute to our open-source projects.',
		imgSrc1: '/images/teamWork.png',
		imgSrc2: '/images/teamWork-2.png',
	},
];

const WhatYouShouldKnow = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const next = () => {
		setCurrentSlide((prevState) => prevState + 1);
	};

	const prev = () => {
		setCurrentSlide((prevState) => prevState - 1);
	};

	const updateCurrentSlide = (index: number) => {
		if (currentSlide !== index) {
			setCurrentSlide(index);
		}
	};

	return (
		<Carousel
			selectedItem={currentSlide}
			onChange={updateCurrentSlide}
			showThumbs={false}
			showArrows={false}
			showStatus={false}
			showIndicators={false}
			infiniteLoop={true}
		>
			{WhatYouShouldKnowArray.map((item, index) => (
				<div
					key={index}
					className='flex flex-col pb-16 md:pb-0 md:flex-row gap-10'
				>
					<div className='flex-1 flex flex-col justify-center'>
						<div className='flex flex-col gap-9'>
							<h2 className='font-semibold text-secondaryBlue_05 text-left max-w-[415px] text-3xl lg:text-4xl font-encode '>
								What You Should Know about Intrapair
							</h2>
							<p className='text-secondaryBlue_05 text-left max-w-[415px] '>
								{item.content}
							</p>
							<div className='flex gap-5 mb-4 md:mb-0 justify-between align-bottom md:justify-start mt-12'>
								<HiOutlineArrowLongLeft
									onClick={prev}
									className='text-secondaryBlue_05 cursor-pointer text-4xl'
								/>
								<HiOutlineArrowLongRight
									onClick={next}
									className={`text-secondaryBlue_05 cursor-pointer text-4xl ${
										index === 0 ? 'md:ml-7' : 'ml-0'
									}`}
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-1 flex-col md:flex-row gap-10'>
						<div className='relative w-full sm:w-[400px] h-[400px] md:h-[500px] xl:h-[608px]'>
							<Image src={item.imgSrc1} alt='' fill />
						</div>
						<div className='hidden xl:block relative w-[200px] h-[608px]'>
							<Image src={item.imgSrc2} alt='' fill />
						</div>
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default WhatYouShouldKnow;
