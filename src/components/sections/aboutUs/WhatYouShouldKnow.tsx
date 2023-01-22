import {
	HiOutlineArrowLongLeft,
	HiOutlineArrowLongRight,
} from 'react-icons/hi2';
import React, {
	forwardRef,
	ReactNode,
	useRef,
	CSSProperties,
	useState,
} from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
// import Carousel, {
// 	ReactElasticCarouselProps,
// 	consts,
// } from 'react-elastic-carousel';

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

const CarouselContent = () => (
	<>
		<div className='relative w-full sm:w-[400px] h-[400px] md:h-[500px] xl:h-[608px]'>
			<Image src={'/images/aboutIntrapair.png'} alt='' fill />
		</div>
		<div className='hidden xl:block relative w-[200px] h-[608px]'>
			<Image src={'/images/aboutIntrapair_2.png'} alt='' fill />
		</div>
	</>
);

// const CustomCarousel = forwardRef<
// 	any,
// 	ReactElasticCarouselProps & { children: ReactNode }
// >((props, ref) => <Carousel ref={ref} {...props} />);

// CustomCarousel.displayName === 'MyCustomCarousel';

const WhatYouShouldKnow = () => {
	// const carouselRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const arrowStyles: CSSProperties = {
		position: 'absolute',
		zIndex: 2,
		bottom: '17%',
		// width: 30,
		// height: 30,
		cursor: 'pointer',
	};

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
			// selectedItem={currentSlide}
			// onChange={updateCurrentSlide}
			showThumbs={false}
			showArrows={true}
			showStatus={false}
			showIndicators={false}
			renderArrowPrev={(onClickHandler, hasPrev, label) =>
				hasPrev && (
					<button
						type='button'
						onClick={onClickHandler}
						title={label}
						// className='absolute w-5 h-5 bg-black z-10'
						style={{ ...arrowStyles, left: 0 }}
					>
						<HiOutlineArrowLongLeft
							onClick={onClickHandler}
							// onClick={prev}
							className='text-secondaryBlue_05 cursor-pointer z-10 text-4xl'
						/>
					</button>
				)
			}
			renderArrowNext={(onClickHandler, hasNext, label) =>
				hasNext && (
					<button
						type='button'
						onClick={onClickHandler}
						title={label}
						// className='absolute w-5 h-5 bg-black z-10'
						style={{ ...arrowStyles, left: 55 }}
					>
						<HiOutlineArrowLongRight
							onClick={onClickHandler}
							className='text-secondaryBlue_05 cursor-pointer text-4xl'
						/>
					</button>
				)
			}
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
							{/* <p>{currentSlide}</p> */}
							{/* <div className='flex gap-5 mb-4 md:mb-0 justify-between md:justify-start mt-12'>
								<HiOutlineArrowLongLeft
									// onClick={prev}
									className='text-secondaryBlue_05 cursor-pointer text-4xl'
								/>
								<HiOutlineArrowLongRight
									// onClick={next}
									className='text-secondaryBlue_05 cursor-pointer text-4xl'
								/>
							</div> */}
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
