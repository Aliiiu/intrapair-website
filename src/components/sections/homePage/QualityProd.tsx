import Image from 'next/image';
import React, { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useMedia } from 'react-use';

// Media Query with Framer Motion

const QualityProd = () => {
	const isMobile = useMedia('(max-width: 768px)');
	const arrowStyles: CSSProperties = {
		position: 'absolute',
		zIndex: 2,
		top: 'calc(50% - 15px)',
		width: 30,
		height: 30,
		cursor: 'pointer',
	};
	return (
		<div className='container m-auto px-4 xl:px-[114px] w-full'>
			<div className='mb-[70px] m-auto'>
				<div className='flex'>
					<div className='flex flex-col gap-3 xl:w-[700px] max-w-[100%]'>
						<motion.div
							className='pb-2 lg:pb-5 pr-[12rem] md:pr-[4rem]  border-b-[0.5px]  border-solid border-white  w-[fit-content]  '
							whileInView={{
								borderBottom: '2px solid #fff',
								paddingRight: 0,
							}}
							initial={{
								paddingRight: isMobile ? '0.8rem' : '12rem',
								borderBottom: '0.5px solid #fff',
							}}
							whileHover={{
								borderBottom: isMobile ? '1px solid #fff' : '2px solid #fff',
								paddingRight: isMobile ? '0.8rem' : '12rem',
							}}
							transition={{
								duration: 0.5,
								type: 'tween',
								ease: 'easeInOut',
							}}
						>
							<h3 className='font-bold text-white text-3xl xl:text-5xl'>
								Quality Product Keeps
							</h3>
							<h3 className='font-bold text-white text-3xl xl:text-5xl'>
								You In Business
							</h3>
						</motion.div>
						{/* <div className="bg-white w-full h-[1px]"></div> */}

						<p className='text-white text-base leading-6'>
							At Intrapair, we’ve got the engineering of your products figured
							out for you. Don’t take our words for granted, People are saying a
							lot about us!
						</p>
					</div>
				</div>
			</div>
			<div className='md:flex hidden'>
				<div className='overflow-x-scroll scrollbar-hide py-8 flex gap-5 md:gap-[46px] justify-between w-full'>
					{prodArray.map((item) => (
						<div
							key={item.id}
							className='relative flex flex-col border-2  border-solid border-dark-blue p-[20px] xl:p-[40px] 2xl:p-[60px] gap-[54px] 2xl:gap-[74px] min-w-[280px] w-[526px] testimony-container'
						>
							<div className='testimony-overlay z-0 absolute top-0 left-0 w-full h-full bg-secondary-blue_02 opacity-0 duration-300 ease-in-out transition-opacity' />
							<div className='absolute top-[-13px] left-[32px] z-10'>
								<Image
									src={'/home/testimony-tag.svg'}
									width={68}
									height={32}
									alt='tag'
								/>
							</div>
							<p className='text-white text-sm md:text-base 2xl:text-xl z-10'>
								{item.content}
							</p>
							<div className='z-10'>
								<p className='text-white text-base font-semibold'>
									{item.name}
								</p>
								{/* <p className="text-white text-sm md:text-base ">
                  {item.position}
                </p> */}
							</div>
						</div>
					))}
				</div>
			</div>
			<Carousel
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				infiniteLoop={false}
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<button
							type='button'
							onClick={onClickHandler}
							title={label}
							style={{ ...arrowStyles, left: -10 }}
						>
							<FiChevronLeft className='text-white text-3xl' />
						</button>
					)
				}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<button
							type='button'
							onClick={onClickHandler}
							title={label}
							style={{ ...arrowStyles, right: -10 }}
						>
							<FiChevronRight className='text-white text-3xl' />
						</button>
					)
				}
			>
				{prodArray.map((item) => (
					<div key={item.id} className='flex md:hidden'>
						<div className='overflow-x-scroll scrollbar-hide py-8 flex gap-5 md:gap-[46px] justify-between w-full'>
							<div className='relative flex flex-col items-start border-2  border-solid border-dark-blue p-[20px] xl:p-[40px] 2xl:p-[60px] gap-[54px] 2xl:gap-[74px] min-w-[250px] w-[526px] testimony-container'>
								<div className='testimony-overlay z-0 absolute top-0 left-0 w-full h-full bg-secondary-blue_02 opacity-0 duration-300 ease-in-out transition-opacity' />
								<div className='absolute top-[-13px] left-[32px] z-10'>
									<Image
										src={'/home/testimony-tag.svg'}
										width={68}
										height={32}
										alt='tag'
									/>
								</div>
								<p className='text-white text-left text-sm md:text-base 2xl:text-xl z-10'>
									{item.content}
								</p>
								<div className='z-10'>
									<p className='text-white text-base font-semibold'>
										{item.name}
									</p>
									{/* <p className="text-white text-left text-sm md:text-base ">
                    {item.position}
                  </p> */}
								</div>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default QualityProd;

const prodArray = [
	{
		id: 1,
		content:
			'Partnering with Intrapair has to be one of the greatest decisions we took as a company. Their coordination, team spirit and innovative ideas is second to none.',
		name: 'Dele Akeem ',
		// position: 'CEO, Intrapair',
	},
	{
		id: 2,
		content:
			'If you are looking to build a product with the best tech company there is, You need to check out Intrapair. They are the solutions to tech related problems and would give you nothing but the best. I highly recommend Intrapair and their team of experts. ',
		name: 'Eloise Awosika',
		// position: 'CEO, Intrapair',
	},
	{
		id: 3,
		content:
			'Intrapair provides their partners with the best user friendly products. They provide top notch professional services which include user friendly products and a well simplified UI interface that users love. ',
		name: 'Abdulsalaam Hassan',
		// position: 'CEO, Intrapair',
	},
];
